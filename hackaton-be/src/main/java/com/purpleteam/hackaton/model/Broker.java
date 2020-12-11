package com.purpleteam.hackaton.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Brokers")
public class Broker {

	@Id
	private String id;
	private String brokerType;
	private BrokerDescription description;
	private String fkPropertyId;

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

	public String getFkPropertyId() {
		return fkPropertyId;
	}

	public void setFkPropertyId(String fkPropertyId) {
		this.fkPropertyId = fkPropertyId;
	}

	public Broker(String id, String brokerType, BrokerDescription description, String fkPropertyId) {
		super();
		this.id = id;
		this.brokerType = brokerType;
		this.description = description;
		this.fkPropertyId = fkPropertyId;
	}

}
