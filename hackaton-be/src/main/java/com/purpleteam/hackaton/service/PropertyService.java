package com.purpleteam.hackaton.service;

import java.util.List;

import com.purpleteam.hackaton.model.Property;

public interface PropertyService {
	
	public Property createProperty(final Property propertyIn);
	
	public Property getProperty(final String id);
	
	public List<Property> getProperties();

}
