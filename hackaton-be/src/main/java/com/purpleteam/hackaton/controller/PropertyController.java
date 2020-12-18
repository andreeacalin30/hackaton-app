package com.purpleteam.hackaton.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.purpleteam.hackaton.model.Property;
import com.purpleteam.hackaton.service.PropertyService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class PropertyController {
	
	@Autowired
	private PropertyService propertyService;
	
	@PostMapping("/property")
	public ResponseEntity<Property> createProperty(@RequestBody Property propertyIn){
		Property createdProperty = propertyService.createProperty(propertyIn);
		
		return new ResponseEntity<Property>(createdProperty, HttpStatus.OK);
	}
	
	@GetMapping("/properties")
	public ResponseEntity<List<Property>> getProperties(){
		List<Property> properties = propertyService.getProperties();
		
		return new ResponseEntity<List<Property>>(properties, HttpStatus.OK);
	}
	
	@GetMapping("/property")
	public ResponseEntity<Property> getProperty(@RequestParam("id") final String id){
		Property property = propertyService.getProperty(id);
		
		return new ResponseEntity<Property>(property, HttpStatus.OK);
	}

}
