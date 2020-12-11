package com.purpleteam.hackaton.mapper;

import com.purpleteam.hackaton.dto.BrokerDTO;
import com.purpleteam.hackaton.model.Broker;

public class BrokerMapper {

	public static BrokerDTO brokerToBrokerDTO(Broker brokerIn) {
		return new BrokerDTO(brokerIn.getId(), brokerIn.getDescription().getImg());
	}
}
