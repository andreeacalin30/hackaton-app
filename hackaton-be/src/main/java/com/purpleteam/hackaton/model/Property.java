package com.purpleteam.hackaton.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "properties")
public class Property {

	@Id
	private String id;

	private Location location;

	private Double price;

	private Integer area;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Location getLocation() {
		return location;
	}

	public void setLocation(Location location) {
		this.location = location;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public Integer getArea() {
		return area;
	}

	public void setArea(Integer area) {
		this.area = area;
	}

	public Property(String id, Location location, Double price, Integer area) {
		super();
		this.id = id;
		this.location = location;
		this.price = price;
		this.area = area;
	}

}
