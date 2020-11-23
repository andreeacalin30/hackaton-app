package com.purpleteam.hackaton.utils;

public class Utils {
	
	public static Double calculateRemainingCash(Double annualIncome, Double mortgagePayment, Double otherHousingCosts){		
		Double remainingCash = (annualIncome/12) - mortgagePayment - otherHousingCosts;
		return remainingCash;
	}

}
