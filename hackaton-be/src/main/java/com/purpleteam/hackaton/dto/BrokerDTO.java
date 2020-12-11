package com.purpleteam.hackaton.dto;

public class BrokerDTO {
	String id;
	String imgPath;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getImgPath() {
		return imgPath;
	}

	public void setImgPath(String imgPath) {
		this.imgPath = imgPath;
	}

	public BrokerDTO(String id, String imgPath) {
		super();
		this.id = id;
		this.imgPath = imgPath;
	}

}
