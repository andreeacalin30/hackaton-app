package com.purpleteam.hackaton.model;

public class OtherExpenses {

	private Double propertyTax;

	private Double condoFees;

	private Double heatingCosts;

	public Double getPropertyTax() {
		return propertyTax;
	}

	public void setPropertyTax(Double propertyTax) {
		this.propertyTax = propertyTax;
	}

	public Double getCondoFees() {
		return condoFees;
	}

	public void setCondoFees(Double condoFees) {
		this.condoFees = condoFees;
	}

	public Double getHeatingCosts() {
		return heatingCosts;
	}

	public void setHeatingCosts(Double heatingCosts) {
		this.heatingCosts = heatingCosts;
	}

	public OtherExpenses(Double propertyTax, Double condoFees, Double heatingCosts) {
		super();
		this.propertyTax = propertyTax;
		this.condoFees = condoFees;
		this.heatingCosts = heatingCosts;
	}

	public OtherExpenses() {
		super();
	}
}
