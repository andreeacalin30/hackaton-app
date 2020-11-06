package com.purpleteam.hackaton.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.purpleteam.hackaton.constants.PropertyType;
import com.purpleteam.hackaton.constants.Provinces;

// TODO : INCOMPLETE FORM!!
@Document(collection = "users")
public class User {

	@Id
	private String id;

	private String firstName;

	private String lastName;

	private String email;

	private String password;

	private String phoneNumber;

	private Double annualIncome;

	private PropertyType propertyType;

	private Integer nrOfBaths;

	private Provinces desiredProvince;

	private String desiredCity;

	private String desiredStreet;

	private String desiredStreetNumber;

	private String postalCodel;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public Double getAnnualIncome() {
		return annualIncome;
	}

	public void setAnnualIncome(Double annualIncome) {
		this.annualIncome = annualIncome;
	}

	public PropertyType getPropertyType() {
		return propertyType;
	}

	public void setPropertyType(PropertyType propertyType) {
		this.propertyType = propertyType;
	}

	public Integer getNrOfBaths() {
		return nrOfBaths;
	}

	public void setNrOfBaths(Integer nrOfBaths) {
		this.nrOfBaths = nrOfBaths;
	}

	public Provinces getDesiredProvince() {
		return desiredProvince;
	}

	public void setDesiredProvince(Provinces desiredProvince) {
		this.desiredProvince = desiredProvince;
	}

	public String getDesiredCity() {
		return desiredCity;
	}

	public void setDesiredCity(String desiredCity) {
		this.desiredCity = desiredCity;
	}

	public String getDesiredStreet() {
		return desiredStreet;
	}

	public void setDesiredStreet(String desiredStreet) {
		this.desiredStreet = desiredStreet;
	}

	public String getDesiredStreetNumber() {
		return desiredStreetNumber;
	}

	public void setDesiredStreetNumber(String desiredStreetNumber) {
		this.desiredStreetNumber = desiredStreetNumber;
	}

	public String getPostalCodel() {
		return postalCodel;
	}

	public void setPostalCodel(String postalCodel) {
		this.postalCodel = postalCodel;
	}

	public User(String id, String firstName, String lastName, String email, String password, String phoneNumber,
			Double annualIncome, PropertyType propertyType, Integer nrOfBaths, Provinces desiredProvince,
			String desiredCity, String desiredStreet, String desiredStreetNumber, String postalCodel) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.phoneNumber = phoneNumber;
		this.annualIncome = annualIncome;
		this.propertyType = propertyType;
		this.nrOfBaths = nrOfBaths;
		this.desiredProvince = desiredProvince;
		this.desiredCity = desiredCity;
		this.desiredStreet = desiredStreet;
		this.desiredStreetNumber = desiredStreetNumber;
		this.postalCodel = postalCodel;
	}

}
