package com.ggangdan.dto;

import lombok.Data;

public class InvestigationDTO {
	private int idx;
	private String investigationName;
	private String codename;
	private Integer complete;
	
	public InvestigationDTO() {
		// TODO Auto-generated constructor stub
	}

	public InvestigationDTO(int idx, String investigationName, String codename, Integer complete) {
		super();
		this.idx = idx;
		this.investigationName = investigationName;
		this.codename = codename;
		this.complete = complete;
	}

	public int getIdx() {
		return idx;
	}

	public void setIdx(int idx) {
		this.idx = idx;
	}

	public String getInvestigationName() {
		return investigationName;
	}

	public void setInvestigationName(String investigationName) {
		this.investigationName = investigationName;
	}

	public String getCodename() {
		return codename;
	}

	public void setCodename(String codename) {
		this.codename = codename;
	}

	public Integer getComplete() {
		return complete;
	}

	public void setComplete(Integer complete) {
		this.complete = complete;
	}
	
	
	
}
