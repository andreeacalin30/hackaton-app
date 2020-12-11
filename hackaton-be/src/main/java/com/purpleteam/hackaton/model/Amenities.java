package com.purpleteam.hackaton.model;

public class Amenities {

	private String amenityName;

	private String distanceFromProperty;

	public String getAmenityName() {
		return amenityName;
	}

	public void setAmenityName(String amenityName) {
		this.amenityName = amenityName;
	}

	public String getDistanceFromProperty() {
		return distanceFromProperty;
	}

	public void setDistanceFromProperty(String distanceFromProperty) {
		this.distanceFromProperty = distanceFromProperty;
	}

	public Amenities(String amenityName, String distanceFromProperty) {
		super();
		this.amenityName = amenityName;
		this.distanceFromProperty = distanceFromProperty;
	}
}
