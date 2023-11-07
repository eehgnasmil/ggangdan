package com.ggangdan.service;

import java.util.ArrayList;
import java.util.Map;

import com.ggangdan.dto.InvestigationDTO;

public interface HeaderService {
	ArrayList<InvestigationDTO> getInvestigationList();
	int insertInvestigation(Map<String,String> map);
}
