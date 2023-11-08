package com.ggangdan.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.Generated;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
 
/*@Getter
@Setter
@Generated 
@ToString */
/* @JsonIgnoreProperties(ignoreUnknown = true) */
public class InvestigationDTO {
	private int idx;
	private String investigationName;
	private String codename;
	private int complete;  
	
	public InvestigationDTO() {
		// TODO Auto-generated constructor stub
	}

	public InvestigationDTO(int idx, String investigationName, String codename, int complete) {
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

	public int getComplete() {
		return complete;
	}

	public void setComplete(int complete) {
		this.complete = complete;
	}

	@Override
	public String toString() {
		return "InvestigationDTO [idx=" + idx + ", investigationName=" + investigationName + ", codename=" + codename
				+ ", complete=" + complete + "]";
	}
	
	
}
