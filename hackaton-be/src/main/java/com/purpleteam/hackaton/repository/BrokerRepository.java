package com.purpleteam.hackaton.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.stereotype.Repository;

import com.purpleteam.hackaton.model.Broker;

@EnableMongoRepositories
@Repository
public interface BrokerRepository extends MongoRepository<Broker, String>{
	
	Optional<Broker> findByFkPropertyIdAndBrokerType(final String id, final String brokerType);
	
	Optional<Broker> findByDescription_Name(final String name);
	
	List<Broker> findByBrokerType(final String brokerType);

	Optional<Broker> findByIdAndBrokerType(String id, String fullName);

}
