package com.purpleteam.hackaton.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.stereotype.Repository;

import com.purpleteam.hackaton.model.User;

@EnableMongoRepositories
@Repository
public interface UserRepository extends MongoRepository<User , String> {
	
	Optional<User> findByEmail(final String email);

}
