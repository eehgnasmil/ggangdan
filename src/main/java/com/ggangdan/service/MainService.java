package com.ggangdan.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import com.ggangdan.dto.BoardVO;
import com.ggangdan.dto.InvestigationDTO;
import com.ggangdan.dto.PopularInvestigationDTO;
import com.ggangdan.dto.ProfileImageDTO;

public interface MainService {
	InvestigationDTO getInvestigation(int idx);
	int updateInverstigation(InvestigationDTO dto);
	InvestigationDTO getList(String investigationName);
	int complete(int idx);
	int cancel(int idx);
	ArrayList<PopularInvestigationDTO> popularInvestigation();
	// 프로필 이미지 서비스
	int uploadProfileImage(Map<String,String> map);
	ArrayList<ProfileImageDTO> getProfileImage(String codename);
	int resetUseImage(String codename);
	ProfileImageDTO getUseImage(String codename);
	///////////////////
	int selectUseImage(Map<String,String> map);
	List<BoardVO> boardList(String codename);
}
