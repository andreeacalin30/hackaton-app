package com.purpleteam.hackaton.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

//TODO: INCOMPLETE FORM!! 
@Document(collection = "forms")
public class Form {

	@Id
	private String id;

	private String userId;

	private Double annualIncome;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

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

	public Form(String id, String userId, Double annualIncome) {
		super();
		this.id = id;
		this.userId = userId;
		this.annualIncome = annualIncome;
	}

}
