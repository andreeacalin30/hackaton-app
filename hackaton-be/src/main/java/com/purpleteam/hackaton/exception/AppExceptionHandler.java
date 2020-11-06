package com.purpleteam.hackaton.exception;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

@ControllerAdvice
public class AppExceptionHandler {

	@ExceptionHandler(AppException.class)
	public final ResponseEntity<ExceptionDTO> handleExceptions(AppException ex, WebRequest req){
		ExceptionDTO exceptionDTO = new ExceptionDTO();
		exceptionDTO.setDetails(ex.getMessage());
		exceptionDTO.setStatus(ex.getStatus().value());
		
		return new ResponseEntity<ExceptionDTO>(exceptionDTO, ex.getStatus());
		
	}
}
