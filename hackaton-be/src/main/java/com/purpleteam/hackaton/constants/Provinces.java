package com.purpleteam.hackaton.constants;

import java.util.HashMap;
import java.util.Map;

public enum Provinces {
	
	AB("Alberta", "1"),
	BC("British Columbia", "2"),
	SK("Saskatchewan", "12"),
	ON("Ontario", "9"),
	MB("Manitoba", "3"),
	NB("New Brunswick", "4"),
	QC("Quebec", "11"),
	NL("Newfoundland and Labrador", "5"),
	NS("Nova Scotia", "7"),
	YT("Yukon", "13"),
	NT("Northwest Territories", "6"),
	NU("Nunavut", "8"),
	PE("Prince Edward Island", "10");
	
	private static final Map<String, Provinces> BY_FULL_NAME = new HashMap<String, Provinces>();
	private static final Map<String, Provinces> BY_CODE = new HashMap<String, Provinces>();
	
	static {
		for(Provinces province : values()) {
			BY_FULL_NAME.put(province.fullName, province);
			BY_CODE.put(province.code, province);
		}
	}
	
	private String fullName;
	private String code;
	
	private Provinces(String fullText, String code) {
		this.fullName = fullText;
		this.code = code;
	}
	
	public String fullName() {
		return this.fullName;
	}
	
	public String acronym() {
		return this.code;
	}
	
	public static boolean contains(String fullProvinceName) {
		for(Provinces aux: Provinces.values()) {
			if(aux.fullName.equals(fullProvinceName)) {
				return true;
			}
		}
		return false;
	}
	
	public static Provinces elementOfFullProvinceName(String fullName) {
		return BY_FULL_NAME.get(fullName);
	}
	
	public static Provinces elementOfCode(String code) {
		return BY_CODE.get(code);
	}
}
