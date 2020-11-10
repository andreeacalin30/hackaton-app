package com.purpleteam.hackaton.dto;

public class UserAffordabilityDTO {

	private String userId;

	private Double annualIncome;

	private Double downPayment;

	private Double monthlyHousingCosts;

	private Double monthlyDebtPayments;

	private Double generatedMaximumAffordability;

	private Double mortgagePayment;

	private Double estimatedRemainingCash;

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public Double getAnnualIncome() {
		return annualIncome;
	}

	public void setAnnualIncome(Double annualIncome) {
		this.annualIncome = annualIncome;
	}

	public Double getMonthlyHousingCosts() {
		return monthlyHousingCosts;
	}

	public void setMonthlyHousingCosts(Double monthlyLivingCosts) {
		this.monthlyHousingCosts = monthlyLivingCosts;
	}

	public Double getMonthlyDebtPayments() {
		return monthlyDebtPayments;
	}

	public void setMonthlyDebtPayments(Double monthlyDebtPayments) {
		this.monthlyDebtPayments = monthlyDebtPayments;
	}

	public Double getDownPayment() {
		return downPayment;
	}

	public void setDownPayment(Double downPayment) {
		this.downPayment = downPayment;
	}

	public Double getGeneratedMaximumAffordability() {
		return generatedMaximumAffordability;
	}

	public void setGeneratedMaximumAffordability(Double generatedMaximumAffordability) {
		this.generatedMaximumAffordability = generatedMaximumAffordability;
	}

	public Double getMortgagePayment() {
		return mortgagePayment;
	}

	public void setMortgagePayment(Double mortgagePayment) {
		this.mortgagePayment = mortgagePayment;
	}

	public Double getEstimatedRemainingCash() {
		return estimatedRemainingCash;
	}

	public void setEstimatedRemainingCash(Double estimatedRemainingCash) {
		this.estimatedRemainingCash = estimatedRemainingCash;
	}

	public UserAffordabilityDTO(String userId, Double annualIncome, Double downPayment, Double monthlyHousingCosts,
			Double monthlyDebtPayments, Double generatedMaximumAffordability, Double mortgagePayment,
			Double estimatedRemainingCash) {
		super();
		this.userId = userId;
		this.annualIncome = annualIncome;
		this.downPayment = downPayment;
		this.monthlyHousingCosts = monthlyHousingCosts;
		this.monthlyDebtPayments = monthlyDebtPayments;
		this.generatedMaximumAffordability = generatedMaximumAffordability;
		this.mortgagePayment = mortgagePayment;
		this.estimatedRemainingCash = estimatedRemainingCash;
	}

	public UserAffordabilityDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

}
