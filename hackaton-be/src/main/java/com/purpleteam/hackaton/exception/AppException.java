package com.purpleteam.hackaton.exception;

import org.springframework.http.HttpStatus;

public class AppException extends RuntimeException{

	private static final long serialVersionUID = 1L;

	private String message;

	private HttpStatus status;

	public AppException(String message, HttpStatus status) {
		super();
		this.message = message;
		this.status = status;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public HttpStatus getStatus() {
		return status;
	}

	public void setStatus(HttpStatus status) {
		this.status = status;
	}

}
