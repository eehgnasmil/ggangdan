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
	
	@Override
	public int updateInverstigation(InvestigationDTO dto) {
		return Investigation.updateInverstigation(dto); 
	}
	
	@Override
	public InvestigationDTO getList(String investigationName) {
		return Investigation.getList(investigationName);
	}
	
	@Override
	public int complete(int idx) { 
		return Investigation.complete(idx);
	}
	
	@Override
	public int cancel(int idx) { 
		System.out.println("여긱기기기기기");
		return Investigation.cancel(idx);

	}

}
