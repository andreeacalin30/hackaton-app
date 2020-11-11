package com.purpleteam.hackaton.utils;

public class Utils {
	
	public static Double calculateRemainingCash(Double annualIncome, Double mortgagePayment){		
		Double remainingCash = (annualIncome/12) - mortgagePayment;
		return Double.valueOf(remainingCash.intValue());
	}

}
