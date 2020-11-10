package com.purpleteam.hackaton.service.impl;

import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.purpleteam.hackaton.dto.UserAffordabilityDTO;
import com.purpleteam.hackaton.exception.AppException;
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
		UserAffordabilityDTO userAff = new UserAffordabilityDTO();
		//Checks if email already exists
		Optional<User> existingUser = userRepostiroy.findByEmail(user.getEmail());
		if(existingUser.isPresent()) {
			throw new AppException("User already exists with this email", HttpStatus.BAD_REQUEST);
		}
		user.setId(UUID.randomUUID().toString());
		
		User insertedUser = userRepostiroy.insert(user);
		
		if(user.getAnnualIncome() != null && user.getHasFinishedQuestioneer()) {
		 userAff = new UserAffordabilityDTO(user.getId(), user.getAnnualIncome(), user.getDownPayment(), user.getOtherHousingCosts() != null ? user.getOtherHousingCosts() : null,
											user.getOtherDebtPayents(), null, null, null);
		 userAff = generateUserAffordability(userAff);
		 
		 return userRepostiroy.findById(user.getId()).get();
		}				
		
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

		User updatedUser = userRepostiroy.save(userIn);

		return updatedUser;
	}

	@Override
	public UserAffordabilityDTO generateUserAffordability(UserAffordabilityDTO userAffordabilityDTO) {
		Double maximumAffordability = generateMaximumAffoedability(userAffordabilityDTO);

		userAffordabilityDTO.setGeneratedMaximumAffordability(maximumAffordability);
		// calculate the morgage payment per month for 25 years
		userAffordabilityDTO.setMortgagePayment(maximumAffordability / 300);
		userAffordabilityDTO.setEstimatedRemainingCash(Utils.calculateRemainingCash(
				userAffordabilityDTO.getAnnualIncome(), userAffordabilityDTO.getMortgagePayment()));

		// Update user with generated values;
		Optional<User> userFromDb = userRepostiroy.findById(userAffordabilityDTO.getUserId());
		if (!userFromDb.isPresent()) {
			throw new AppException("User does not exist in DB", HttpStatus.BAD_REQUEST);
		}
		userFromDb.get().setGeneratedMaximumAffordability(userAffordabilityDTO.getGeneratedMaximumAffordability());
		userFromDb.get().setMortgagePayment(Double.valueOf(userAffordabilityDTO.getMortgagePayment().intValue()));
		userFromDb.get().setOtherHousingCosts(userAffordabilityDTO.getMonthlyHousingCosts());
		userFromDb.get().setDownPayment(userAffordabilityDTO.getDownPayment());
		userFromDb.get().setOtherDebtPayents(userAffordabilityDTO.getMonthlyDebtPayments());
		userFromDb.get().setAnnualIncome(userAffordabilityDTO.getAnnualIncome());

		userRepostiroy.save(userFromDb.get());

		return userAffordabilityDTO;
	}

	private Double generateMaximumAffoedability(UserAffordabilityDTO userAffordabilityDTO) {
		boolean isEligibbleForMortgage = false;
		Double annualHousingCosts = 12 * userAffordabilityDTO.getMonthlyHousingCosts();
		Double maximumAffordability;

		// Decide if user can afford a mortgage
		// TODO: see how we shall implement Housing costs: it will come from fe added by
		// user or from be based on province
		if (userAffordabilityDTO.getMonthlyDebtPayments() == null) {
			if (annualHousingCosts < 0.32 * userAffordabilityDTO.getAnnualIncome()) {
				isEligibbleForMortgage = true;
			}
		} else {
			Double totalDebtLoad = annualHousingCosts + 12 * userAffordabilityDTO.getMonthlyDebtPayments();

			if (totalDebtLoad < 0.4 * userAffordabilityDTO.getAnnualIncome()) {
				isEligibbleForMortgage = true;
			}
		}

		if (!isEligibbleForMortgage) {
			throw new AppException("User is not eligible for a mortgage", HttpStatus.BAD_REQUEST);
		}

		if (userAffordabilityDTO.getDownPayment() <= Double.valueOf(25000)) {
			maximumAffordability = userAffordabilityDTO.getDownPayment() * 20;
		} else {
			maximumAffordability = (userAffordabilityDTO.getDownPayment() - Double.valueOf(25000)) * 10
					+ Double.valueOf(500000);
		}
		return maximumAffordability;
	}

}
