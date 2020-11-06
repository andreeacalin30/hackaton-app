package com.purpleteam.hackaton.model;

import com.purpleteam.hackaton.constants.Provinces;

public class Location {

	private Provinces province;

	private String city;

	private String street;

	private String postalLdu;

	private String postalFsa;

	public Provinces getProvince() {
		return province;
	}

	public void setProvince(Provinces province) {
		this.province = province;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public String getPostalLdu() {
		return postalLdu;
	}

	public void setPostalLdu(String postalLdu) {
		this.postalLdu = postalLdu;
	}

	public String getPostalFsa() {
		return postalFsa;
	}

	public void setPostalFsa(String postalFsa) {
		this.postalFsa = postalFsa;
	}

	public Location(Provinces province, String city, String street, String postalLdu, String postalFsa) {
		super();
		this.province = province;
		this.city = city;
		this.street = street;
		this.postalLdu = postalLdu;
		this.postalFsa = postalFsa;
	}

}
