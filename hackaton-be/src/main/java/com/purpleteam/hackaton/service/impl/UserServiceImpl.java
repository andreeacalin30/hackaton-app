package com.purpleteam.hackaton.service.impl;

import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.purpleteam.hackaton.constants.PropertyType;
import com.purpleteam.hackaton.exception.AppException;
import com.purpleteam.hackaton.model.OtherExpenses;
import com.purpleteam.hackaton.model.User;
import com.purpleteam.hackaton.repository.UserRepository;
import com.purpleteam.hackaton.service.UserService;
import com.purpleteam.hackaton.utils.Utils;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepostiroy;

	@Override
	public User createUser(User user) {
		// Checks if email already exists
		Optional<User> existingUser = userRepostiroy.findByEmail(user.getEmail());
		if (existingUser.isPresent()) {
			throw new AppException("User already exists with this email", HttpStatus.BAD_REQUEST);
		}
		user.setId(UUID.randomUUID().toString());

		User insertedUser = userRepostiroy.insert(user);

		return insertedUser;
	}

	@Override
	public User loginUser(String userEmail, String userPassword) {
		// Retrieve user from db
		Optional<User> userFromDb = userRepostiroy.findByEmail(userEmail);
		if (!userFromDb.isPresent()) {
			throw new AppException("There is no account registered under that email", HttpStatus.BAD_REQUEST);
		}

		// check credentials
		String userFromDbPass = userFromDb.get().getPassword();
		if (!userFromDbPass.equals(userPassword)) {
			throw new AppException("Incorrect email or password", HttpStatus.BAD_REQUEST);
		}

		return userFromDb.get();
	}

	@Override
	public User updateUser(User userIn) {
		Optional<User> userFromDb = userRepostiroy.findById(userIn.getId());

		if (!userFromDb.isPresent()) {
			throw new AppException("User does not exist in DB", HttpStatus.BAD_REQUEST);
		}

		if (userIn.getHasFinishedQuestioneer()) {
			generateUserAffordability(userIn, true);
		}

		User updatedUser = userRepostiroy.save(userIn);

		return updatedUser;
	}

	@Override
	public User generateUserAffordability(User userIn, boolean fromUpdateUser) {
		Double maximumAffordability = generateMaximumAffordability(userIn);

		userIn.setGeneratedMaximumAffordability(maximumAffordability);
		// calculate the morgage payment per month for 25 years
		userIn.setMortgagePayment(calculateMonthlyMortgagePayent(maximumAffordability));
		userIn.setEstimatedRemainingCash(
				Utils.calculateRemainingCash(userIn.getAnnualIncome(), userIn.getMortgagePayment(), userIn.getOtherHousingCosts()));

		// Update user with generated values;
		Optional<User> userFromDb = userRepostiroy.findById(userIn.getId());
		if (!userFromDb.isPresent()) {
			throw new AppException("User does not exist in DB", HttpStatus.BAD_REQUEST);
		}

		if (!fromUpdateUser) {
			userRepostiroy.save(userIn);
		}

		return userIn;
	}

	private Double generateMaximumAffordability(User user) {
		boolean isEligibbleForMortgage = false;		
		Double maximumAffordability;

		populateOtherExpensesNoValuesAreGiven(user);
		Double monthlyHousingCosts = user.getOtherExpenses().getCondoFees() + user.getOtherExpenses().getHeatingCosts() +
				user.getOtherExpenses().getPropertyTax();

		// Decide if user can afford a mortgage
		// user or from be based on province
		if (user.getDebtPayments().getCreditCard() == null && user.getDebtPayments().getCarPayment() == null
				&& user.getDebtPayments().getOtherLoanExpenses() == null) {
			if (monthlyHousingCosts < 0.32 * user.getAnnualIncome()) {
				user.setOtherHousingCosts(monthlyHousingCosts);
				isEligibbleForMortgage = true;
			}
		} else{
			Double totalMonthlyDebts = user.getDebtPayments().getCarPayment() == null ? 0 : user.getDebtPayments().getCarPayment();
			totalMonthlyDebts += user.getDebtPayments().getCreditCard() == null ? 0 : user.getDebtPayments().getCreditCard();
			totalMonthlyDebts += user.getDebtPayments().getOtherLoanExpenses() == null ? 0 : user.getDebtPayments().getOtherLoanExpenses();
			
			Double totalMonthlyDebtLoad = monthlyHousingCosts + totalMonthlyDebts;
			user.setOtherHousingCosts(monthlyHousingCosts);

			if (totalMonthlyDebtLoad < 0.4 * user.getAnnualIncome()) {
				isEligibbleForMortgage = true;
			}
		}

		if (!isEligibbleForMortgage) {
			throw new AppException("User is not eligible for a mortgage", HttpStatus.BAD_REQUEST);
		}

		// maximum affordability is calculated based on annual income and multiplied by
		// 4 years
		maximumAffordability = user.getAnnualIncome() * 4;

		return maximumAffordability;
	}

	private void populateOtherExpensesNoValuesAreGiven(User user) {
		if(user.getOtherExpenses() == null) {
			user.setOtherExpenses(new OtherExpenses());
		}
		if (user.getOtherExpenses() == null || user.getOtherExpenses().getPropertyTax() == null) {
			// We took the average housing cost for torronto				
			user.getOtherExpenses().setPropertyTax(Double.valueOf(Integer.valueOf(2999))/12);
		}
		if(user.getOtherExpenses() == null || user.getPropertyType().equals(PropertyType.CONDO) && user.getOtherExpenses().getCondoFees() == null) {
			user.getOtherExpenses().setCondoFees(Double.valueOf(Integer.valueOf(250)));
		}
		if(user.getOtherExpenses() == null || user.getOtherExpenses().getHeatingCosts() == null) {
			user.getOtherExpenses().setHeatingCosts(Double.valueOf(Integer.valueOf(45)));
		}
	}

	private Double calculateMonthlyMortgagePayent(Double maximumAffordability) {
		// monthly rate
		Double mounthlyRateWithoutRate = maximumAffordability / 300;

		return (mounthlyRateWithoutRate + (mounthlyRateWithoutRate * 0.0214));
	}

}
