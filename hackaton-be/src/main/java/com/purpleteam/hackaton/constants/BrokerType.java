package com.purpleteam.hackaton.constants;

import java.util.HashMap;
import java.util.Map;

public enum BrokerType {
	BROKER("Broker"),
	REALESTATE("RealEstate");
	
	private static final Map<String, BrokerType> BY_FULL_NAME  = new HashMap<String, BrokerType>();
	
	static {
		for(BrokerType broker: values()) {
			BY_FULL_NAME.put(broker.fullName, broker);
		}
	}
	
	private String fullName;
	
	private BrokerType(String fullName) {
		this.fullName = fullName;
	}

	public String fullName() {
		return this.fullName;
	}
	
	public static boolean contains(String brokerFullName) {
		for(BrokerType aux: BrokerType.values()) {
			if(aux.fullName.equals(brokerFullName)) {
				return true;
			}
		}
		return false;
	}
	
	public static BrokerType elementOfFullProvinceName(String fullName) {
		return BY_FULL_NAME.get(fullName);
	}

}
