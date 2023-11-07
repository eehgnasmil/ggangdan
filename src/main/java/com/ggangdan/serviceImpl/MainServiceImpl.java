package com.ggangdan.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.ggangdan.dto.InvestigationDTO;
import com.ggangdan.mapper.InvestigationMapper;
import com.ggangdan.service.MainService;

@Service
public class MainServiceImpl implements MainService{

	@Autowired
	InvestigationMapper Investigation;
	
	@Override
	public InvestigationDTO getInvestigation(int idx) {
		return Investigation.getInvestigation(idx);
	}

}
