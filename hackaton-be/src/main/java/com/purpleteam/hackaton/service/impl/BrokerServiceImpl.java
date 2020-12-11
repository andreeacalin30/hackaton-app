package com.purpleteam.hackaton.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import com.purpleteam.hackaton.constants.BrokerType;
import com.purpleteam.hackaton.dto.BrokerDTO;
import com.purpleteam.hackaton.exception.AppException;
import com.purpleteam.hackaton.mapper.BrokerMapper;
import com.purpleteam.hackaton.model.Broker;
import com.purpleteam.hackaton.repository.BrokerRepository;
import com.purpleteam.hackaton.service.BrokerService;

@Service
public class BrokerServiceImpl implements BrokerService{

	@Autowired
	private BrokerRepository brokerRepository;
	
	@Override
	public Broker createBroker(Broker brokerIn) {
		Optional<Broker> existingBroker = brokerRepository.findByDescription_Name(brokerIn.getDescription().getName());
		
		if(existingBroker.isPresent() && existingBroker.get().getBrokerType().equals(BrokerType.BROKER.fullName())) {
			throw new AppException("Broker already exists with this name", HttpStatus.BAD_REQUEST);
		}
		
		brokerIn.setId(UUID.randomUUID().toString());
		Broker insertedBroker = brokerRepository.save(brokerIn);
		
		return insertedBroker;
	}
	
	@Override
	public Broker createRealEstate(Broker brokerIn) {
		Optional<Broker> existingRealEstateBroker = brokerRepository.findByDescription_Name(brokerIn.getDescription().getName());
		
		if(existingRealEstateBroker.isPresent() && existingRealEstateBroker.get().getBrokerType().equals(BrokerType.REALESTATE.fullName())) {
			throw new AppException("Real Estate Broker already exists with this name", HttpStatus.BAD_REQUEST);
		}
		
		brokerIn.setId(UUID.randomUUID().toString());
		Broker insertedRealEstateBroker = brokerRepository.save(brokerIn);
		
		return insertedRealEstateBroker;
	}

	@Override
	public Broker getBroker(String id) {
		Optional<Broker> brokerFromDB = brokerRepository.findByIdAndBrokerType(id, BrokerType.BROKER.fullName());
		
		if(!brokerFromDB.isPresent()) {
			throw new AppException("Broker with that id does not exist in the DB", HttpStatus.BAD_REQUEST);
		}
		
		return brokerFromDB.get();
	}
	
	@Override
	public Broker getRealEstateBroker(String propertyId) {
		Optional<Broker> realEstateBrokerFromDB = brokerRepository.findByFkPropertyIdAndBrokerType(propertyId, BrokerType.REALESTATE.fullName());
		
		if(!realEstateBrokerFromDB.isPresent()) {
			throw new AppException("Real Estate Broker Broker for that property does not exist in the DB", HttpStatus.BAD_REQUEST);
		}
		
		return realEstateBrokerFromDB.get();
	}

	@Override
	public List<BrokerDTO> getBrokers(Optional<Integer> nrOfBrokersToDisplay) {
		List<BrokerDTO> brokersDTO = new ArrayList<BrokerDTO>();
		if(!nrOfBrokersToDisplay.isPresent()) {
			List<Broker> brokers = brokerRepository.findByBrokerType(BrokerType.BROKER.fullName());
			brokersDTO = brokers.parallelStream().map(b -> BrokerMapper.brokerToBrokerDTO(b)).collect(Collectors.toList());
		}else {
			Page<Broker> brokersPage = brokerRepository.findAll(PageRequest.of(0, nrOfBrokersToDisplay.get()));
			List<Broker> brokers = brokersPage.getContent();
			brokersDTO = brokers.parallelStream().map(b -> BrokerMapper.brokerToBrokerDTO(b)).collect(Collectors.toList());
		}	
		
		return brokersDTO;
	}
}
