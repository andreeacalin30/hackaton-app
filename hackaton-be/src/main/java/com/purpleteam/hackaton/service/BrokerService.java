package com.purpleteam.hackaton.service;

import java.util.List;
import java.util.Optional;

import com.purpleteam.hackaton.dto.BrokerDTO;
import com.purpleteam.hackaton.model.Broker;

public interface BrokerService {
	
	public Broker createBroker (final Broker brokerIn);
	
	public Broker getBroker (final String id);
	
	public List<BrokerDTO> getBrokers(final Optional<Integer> nrOfBrokersToReturn);
	
	public Broker createRealEstate(final Broker brokerIn);
	
	public Broker getRealEstateBroker (final String id);

}
