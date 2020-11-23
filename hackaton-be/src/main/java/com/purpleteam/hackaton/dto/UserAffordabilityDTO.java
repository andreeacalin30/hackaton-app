package com.purpleteam.hackaton.dto;

public class UserAffordabilityDTO {

	private Double generatedMaximumAffordability;

	private Double mortgagePayment;

	private Double estimatedRemainingCash;

	private Double otherHousingCosts;

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

	public Double getOtherHousingCosts() {
		return otherHousingCosts;
	}

	public void setOtherHousingCosts(Double otherHousingCosts) {
		this.otherHousingCosts = otherHousingCosts;
	}

	public UserAffordabilityDTO(Double generatedMaximumAffordability, Double mortgagePayment,
			Double estimatedRemainingCash, Double otherHousingCosts) {
		super();
		this.generatedMaximumAffordability = generatedMaximumAffordability;
		this.mortgagePayment = mortgagePayment;
		this.estimatedRemainingCash = estimatedRemainingCash;
		this.otherHousingCosts = otherHousingCosts;
	}

	public UserAffordabilityDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

}
