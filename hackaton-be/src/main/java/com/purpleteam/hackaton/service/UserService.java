package com.purpleteam.hackaton.service;

import com.purpleteam.hackaton.dto.UserLoginDTO;
import com.purpleteam.hackaton.model.User;

public interface UserService {
	
	public User createUser(final User user);
	
	public User loginUser(final UserLoginDTO userLoginDTO);
	
	public User updateUser(final User user);

}
