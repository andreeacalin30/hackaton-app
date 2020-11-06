package com.purpleteam.hackaton.service.impl;

import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.purpleteam.hackaton.dto.UserLoginDTO;
import com.purpleteam.hackaton.exception.AppException;
import com.purpleteam.hackaton.model.User;
import com.purpleteam.hackaton.repository.UserRepository;
import com.purpleteam.hackaton.service.UserService;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserRepository userRepostiroy;

	@Override
	public User createUser(User user) {
		//Checks if email already exists
		Optional<User> existingUser = userRepostiroy.findByEmail(user.getEmail());
		if(existingUser.isPresent()) {
			throw new AppException("User already exists with this email", HttpStatus.BAD_REQUEST);
		}
		user.setId(UUID.randomUUID().toString());
		
		User insertedUser = userRepostiroy.insert(user);
		
		return insertedUser;
	}

	@Override
	public User loginUser(UserLoginDTO userLoginDTO) {
		//Retrieve user from db
		Optional<User> userFromDb = userRepostiroy.findByEmail(userLoginDTO.getEmail());
		if(!userFromDb.isPresent()) {
			throw new AppException("There is no account registered under that email", HttpStatus.BAD_REQUEST);
		}
		
		//check credentials
		String userFromDbPass = userFromDb.get().getPassword();
		if(!userFromDbPass.equals(userLoginDTO.getPassword())) {
			throw new AppException("Incorrect email or password", HttpStatus.BAD_REQUEST);
		}
		
		return userFromDb.get();
	}


}
