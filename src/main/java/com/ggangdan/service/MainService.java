package com.ggangdan.service;

import com.ggangdan.dto.InvestigationDTO;

public interface MainService {
	InvestigationDTO getInvestigation(int idx);
	int updateInverstigation(InvestigationDTO dto);
	InvestigationDTO getList(String investigationName);
	int complete(int idx);
	int cancel(int idx);
}
