package com.purpleteam.hackaton.model;

import java.util.List;

public class BrokerDescription {

	private String name;
	private String company;
	private String img;
	private String rating;
	private String about;
	private List<BrokerMortgages> mortgages;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getCompany() {
		return company;
	}

	public void setCompany(String company) {
		this.company = company;
	}

	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
	}

	public String getRating() {
		return rating;
	}

	public void setRating(String rating) {
		this.rating = rating;
	}

	public String getAbout() {
		return about;
	}

	public void setAbout(String about) {
		this.about = about;
	}

	public List<BrokerMortgages> getMortgages() {
		return mortgages;
	}

	public void setMortgages(List<BrokerMortgages> mortgages) {
		this.mortgages = mortgages;
	}

	public BrokerDescription(String name, String company, String img, String rating, String about,
			List<BrokerMortgages> mortgages) {
		super();
		this.name = name;
		this.company = company;
		this.img = img;
		this.rating = rating;
		this.about = about;
		this.mortgages = mortgages;
	}
	

}
