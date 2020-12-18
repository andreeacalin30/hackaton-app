package com.purpleteam.hackaton.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.stereotype.Repository;

import com.purpleteam.hackaton.model.Property;

@EnableMongoRepositories
@Repository
public interface PropertyRepository extends MongoRepository<Property, String>{
	
	public List<Property> findByLocation_Street(final String street);

}
