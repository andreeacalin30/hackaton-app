package com.purpleteam.hackaton.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.purpleteam.hackaton.dto.UserAffordabilityDTO;
import com.purpleteam.hackaton.model.User;
import com.purpleteam.hackaton.service.UserService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/user")
	public ResponseEntity<User> createUser(@RequestBody User userIn){
		User insertedUser = userService.createUser(userIn);
		
		return new ResponseEntity<User>(insertedUser, HttpStatus.CREATED);		
	}
	
	@GetMapping("/user/login")
	public ResponseEntity<User> loginUser(@RequestParam String userEmail, @RequestParam String userPassword){
		User userDetails = userService.loginUser(userEmail, userPassword);
		
		return new ResponseEntity<User>(userDetails, HttpStatus.OK);
	}
	
	@PutMapping("/user")
	public ResponseEntity<User> updateUser(@RequestBody User userIn){
		User updatedUser = userService.updateUser(userIn);
		
		return new ResponseEntity<User>(updatedUser, HttpStatus.OK);
	}
	
	@PostMapping("/user/affordability")
	public ResponseEntity<UserAffordabilityDTO> getUserAffordability(@RequestBody UserAffordabilityDTO userAffordabilityDTO){
		UserAffordabilityDTO userAffordabilityOut = userService.generateUserAffordability(userAffordabilityDTO);
		
		return new ResponseEntity<UserAffordabilityDTO>(userAffordabilityOut, HttpStatus.OK);
		
	}

}
