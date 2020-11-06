package com.purpleteam.hackaton.dto;

public class UserLoginDTO {

	private String email;

	private String password;

	public String getEmail() {
		return email;
	}

	public String getPassword() {
		return password;
	}

	public UserLoginDTO(String email, String password) {
		super();
		this.email = email;
		this.password = password;
	}

}
