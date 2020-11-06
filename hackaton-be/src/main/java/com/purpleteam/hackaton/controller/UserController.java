package com.purpleteam.hackaton.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.purpleteam.hackaton.dto.UserLoginDTO;
import com.purpleteam.hackaton.model.User;
import com.purpleteam.hackaton.service.UserService;

@CrossOrigin(origins = "")
@Controller
@RequestMapping("/api")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/user")
	public ResponseEntity<User> createUser(@RequestBody User userIn){
		User insertedUser = userService.createUser(userIn);
		
		return new ResponseEntity<User>(insertedUser, HttpStatus.CREATED);		
	}
	
	@GetMapping("/login/user")
	public ResponseEntity<User> loginUser(UserLoginDTO userLoginDTO){
		User userDetails = userService.loginUser(userLoginDTO);
		
		return new ResponseEntity<User>(userDetails, HttpStatus.OK);
	}

}
