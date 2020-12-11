package com.purpleteam.hackaton.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.purpleteam.hackaton.constants.BrokerType;
import com.purpleteam.hackaton.dto.BrokerDTO;
import com.purpleteam.hackaton.model.Broker;
import com.purpleteam.hackaton.service.BrokerService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class BrokerController {
	
	@Autowired
	private BrokerService brokerService;
	
	@PostMapping("/broker")
	public ResponseEntity<Broker> createBroker(@RequestBody Broker brokerIn){
		brokerIn.setBrokerType(BrokerType.BROKER.fullName());
		Broker createdBroker = brokerService.createBroker(brokerIn);
		
		return new ResponseEntity<Broker>(createdBroker, HttpStatus.OK);
	}
	
	@PostMapping("/broker/real-estate")
	public ResponseEntity<Broker> createRealEstateBroker(@RequestBody Broker brokerIn){
		brokerIn.setBrokerType(BrokerType.REALESTATE.fullName());
		Broker createdRealEstateBroker = brokerService.createRealEstate(brokerIn);
		
		return new ResponseEntity<Broker>(createdRealEstateBroker, HttpStatus.OK);
		
	}
	
	@GetMapping("/broker")
	public ResponseEntity<Broker> getBroker(@RequestParam("id") final String id){
		Broker brokerFromDB = brokerService.getBroker(id);
		
		return new ResponseEntity<Broker>(brokerFromDB, HttpStatus.OK);
	}
	
	@GetMapping("/broker/real-estate")
	public ResponseEntity<Broker> getRealEstateBroker(@RequestParam("propertyId") final String propertyId){
		Broker realEstateBrokerFromDB = brokerService.getRealEstateBroker(propertyId);
		
		return new ResponseEntity<Broker>(realEstateBrokerFromDB, HttpStatus.OK);
	}
	
	@GetMapping("/brokers")
	public ResponseEntity<List<BrokerDTO>> getBrokers(@RequestParam("firstXBrokers") final Optional<Integer> nrOfBrokersToDisplay){
		List<BrokerDTO> brokers = brokerService.getBrokers(nrOfBrokersToDisplay);
		
		return new ResponseEntity<List<BrokerDTO>>(brokers,HttpStatus.OK);
	}

}
