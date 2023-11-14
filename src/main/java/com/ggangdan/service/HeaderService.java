package com.ggangdan.service;

import java.util.ArrayList;
import java.util.Map;

import com.ggangdan.dto.InvestigationDTO;

public interface HeaderService {
	ArrayList<InvestigationDTO> getInvestigationList(String codename);
	int insertInvestigation(Map<String,String> map);
	int favoriteBoard(Map<String,Object> map);
	int favoritedeleteboard(Map<String,Object> map);
	ArrayList<Integer> getComplete();
}
