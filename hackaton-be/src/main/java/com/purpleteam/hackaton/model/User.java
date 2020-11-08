package com.purpleteam.hackaton.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.purpleteam.hackaton.constants.OwnershipType;
import com.purpleteam.hackaton.constants.PropertyType;

@Document(collection = "users")
public class User {

	@Id
	private String id;

	private String firstName;

	private String lastName;

	private String email;

	private String password;

	private Boolean hasFinishedQuestioneer;

	private String phoneNumber;

	private Double annualIncome;

	private PropertyType propertyType;

	private String nrOfBaths;

	private String nrOfRooms;

	private OwnershipType desiredOwnershipType;

	private List<String> desiredAddresses;

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

	public Boolean getHasFinishedQuestioneer() {
		return hasFinishedQuestioneer;
	}

	public void setHasFinishedQuestioneer(Boolean hasFinishedQuestioneer) {
		this.hasFinishedQuestioneer = hasFinishedQuestioneer;
	}

	public String getNrOfBaths() {
		return nrOfBaths;
	}

	public void setNrOfBaths(String nrOfBaths) {
		this.nrOfBaths = nrOfBaths;
	}

	public String getNrOfRooms() {
		return nrOfRooms;
	}

	public void setNrOfRooms(String nrOfRooms) {
		this.nrOfRooms = nrOfRooms;
	}

	public OwnershipType getDesiredOwnershipType() {
		return desiredOwnershipType;
	}

	public void setDesiredOwnershipType(OwnershipType desiredOwnershipType) {
		this.desiredOwnershipType = desiredOwnershipType;
	}

	public List<String> getDesiredAddresses() {
		return desiredAddresses;
	}

	public void setDesiredAddresses(List<String> desiredAddresses) {
		this.desiredAddresses = desiredAddresses;
	}

	public User(String id, String firstName, String lastName, String email, String password,
			Boolean hasFinishedQuestioneer, String phoneNumber, Double annualIncome, PropertyType propertyType,
			String nrOfBaths, String nrOfRooms, OwnershipType desiredOwnershipType, List<String> desiredAddresses) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
		this.hasFinishedQuestioneer = hasFinishedQuestioneer;
		this.phoneNumber = phoneNumber;
		this.annualIncome = annualIncome;
		this.propertyType = propertyType;
		this.nrOfBaths = nrOfBaths;
		this.nrOfRooms = nrOfRooms;
		this.desiredOwnershipType = desiredOwnershipType;
		this.desiredAddresses = desiredAddresses;
	}

}
