package com.purpleteam.hackaton.model;

public class BrokerMortgages {

	private String period;
	private String perecent;

	public String getPeriod() {
		return period;
	}

	public void setPeriod(String period) {
		this.period = period;
	}

	public String getPerecent() {
		return perecent;
	}

	public void setPerecent(String perecent) {
		this.perecent = perecent;
	}

	public BrokerMortgages(String period, String perecent) {
		super();
		this.period = period;
		this.perecent = perecent;
	}

}
