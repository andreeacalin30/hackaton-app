package com.purpleteam.hackaton.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Brokers")
public class Broker {

	@Id
	private String id;
	private String brokerType;
	private BrokerDescription description;
	private String fk_propertyId;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public BrokerDescription getDescription() {
		return description;
	}

	public void setDescription(BrokerDescription description) {
		this.description = description;
	}

	public String getBrokerType() {
		return brokerType;
	}

	public void setBrokerType(String brokerType) {
		this.brokerType = brokerType;
	}

	public String getFk_propertyId() {
		return fk_propertyId;
	}

	public void setFk_propertyId(String fk_propertyId) {
		this.fk_propertyId = fk_propertyId;
	}

	public Broker(String id, String brokerType, BrokerDescription description, String fk_propertyId) {
		super();
		this.id = id;
		this.brokerType = brokerType;
		this.description = description;
		this.fk_propertyId = fk_propertyId;
	}

}
