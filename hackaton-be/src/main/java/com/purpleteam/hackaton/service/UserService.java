package com.purpleteam.hackaton.service;

import com.purpleteam.hackaton.dto.UserAffordabilityDTO;
import com.purpleteam.hackaton.model.User;

public interface UserService {
	
	public User createUser(final User user);
	
	public User loginUser(final String userEmail, final String userPassword);
	
	public User updateUser(final User user);
	
	public UserAffordabilityDTO generateUserAffordability(final UserAffordabilityDTO userAffordabilityDTO);

}
