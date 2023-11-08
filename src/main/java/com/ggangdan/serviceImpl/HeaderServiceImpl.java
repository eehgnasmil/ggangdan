package com.ggangdan.serviceImpl;

import java.util.ArrayList;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ggangdan.dto.InvestigationDTO;
import com.ggangdan.mapper.InvestigationMapper;
import com.ggangdan.service.HeaderService;

@Service
public class HeaderServiceImpl implements HeaderService{
	
	@Autowired
	InvestigationMapper Investigation;
	
	public ArrayList<InvestigationDTO> getInvestigationList() {
		return Investigation.getInvestigationList();
	}
	
	
	public int insertInvestigation(Map<String,String> map) {
		return Investigation.insertInvestigation(map);
	}
}
