package com.purpleteam.hackaton.service.impl;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.purpleteam.hackaton.exception.AppException;
import com.purpleteam.hackaton.model.Property;
import com.purpleteam.hackaton.repository.PropertyRepository;
import com.purpleteam.hackaton.service.PropertyService;

@Service
public class PropertyServiceImpl implements PropertyService{

	@Autowired
	private PropertyRepository propertyRepository;
	
	@Override
	public Property createProperty(Property propertyIn) {
		List<Property> existingProperty = propertyRepository.findByLocation_Street(propertyIn.getLocation().getStreet());
		
		if(!existingProperty.stream().filter(p -> p.getLocation().getProvince().equals(propertyIn.getLocation().getProvince())).collect(Collectors.toList()).isEmpty()) {
			throw new AppException("Property already exists with this address", HttpStatus.BAD_REQUEST);
		}
		
		propertyIn.setId(UUID.randomUUID().toString());
		Property createdProperty = propertyRepository.save(propertyIn);
		
		return createdProperty;
	}

	@Override
	public Property getProperty(String id) {
		Optional<Property> property = propertyRepository.findById(id);
		
		if(!property.isPresent()) {
			throw new AppException("Property does not exist", HttpStatus.BAD_REQUEST);
		}
		
		return property.get();
	}

	@Override
	public List<Property> getProperties() {
		List<Property> properties = propertyRepository.findAll();
		
		return properties;
	}

}
