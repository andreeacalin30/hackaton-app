package com.purpleteam.hackaton.model;

public class DebtPayments {

	private Double creditCard;

	private Double carPayment;

	private Double otherLoanExpenses;

	public Double getCreditCard() {
		return creditCard;
	}

	public void setCreditCard(Double creditCard) {
		this.creditCard = creditCard;
	}

	public Double getCarPayment() {
		return carPayment;
	}

	public void setCarPayment(Double carPayment) {
		this.carPayment = carPayment;
	}

	public Double getOtherLoanExpenses() {
		return otherLoanExpenses;
	}

	public void setOtherLoanExpenses(Double otherLoanExpenses) {
		this.otherLoanExpenses = otherLoanExpenses;
	}

	public DebtPayments(Double creditCard, Double carPayment, Double otherLoanExpenses) {
		super();
		this.creditCard = creditCard;
		this.carPayment = carPayment;
		this.otherLoanExpenses = otherLoanExpenses;
	}

}
