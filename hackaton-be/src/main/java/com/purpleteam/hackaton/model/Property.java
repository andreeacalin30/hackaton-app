package com.purpleteam.hackaton.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "properties")
public class Property {

	@Id
	private String id;

	private Location location;

	private List<String> imgs;

	private String description;

	private Double price;

	private Integer area;

	private Integer bedrooms;

	private Integer washrooms;

	private List<Amenities> amenities;

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

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Integer getBedrooms() {
		return bedrooms;
	}

	public void setBedrooms(Integer bedrooms) {
		this.bedrooms = bedrooms;
	}

	public Integer getWashrooms() {
		return washrooms;
	}

	public void setWashrooms(Integer washrooms) {
		this.washrooms = washrooms;
	}

	public List<Amenities> getAmenities() {
		return amenities;
	}

	public void setAmenities(List<Amenities> amenities) {
		this.amenities = amenities;
	}

	public List<String> getImgs() {
		return imgs;
	}

	public void setImgs(List<String> imgs) {
		this.imgs = imgs;
	}

	public Property(String id, Location location, List<String> imgs, String description, Double price, Integer area,
			Integer bedrooms, Integer washrooms, List<Amenities> amenities) {
		super();
		this.id = id;
		this.location = location;
		this.imgs = imgs;
		this.description = description;
		this.price = price;
		this.area = area;
		this.bedrooms = bedrooms;
		this.washrooms = washrooms;
		this.amenities = amenities;
	}

}
