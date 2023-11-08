package com.ggangdan.service;

import java.util.ArrayList;
import java.util.Map;

import com.ggangdan.dto.InvestigationDTO;
import com.ggangdan.dto.ProfileImageDTO;

public interface MainService {
	InvestigationDTO getInvestigation(int idx);
	int updateInverstigation(InvestigationDTO dto);
	InvestigationDTO getList(String investigationName);
	int complete(int idx);
	int cancel(int idx);
	int uploadProfileImage(Map<String,String> map);
	ArrayList<ProfileImageDTO> getProfileImage(String codename);
}
