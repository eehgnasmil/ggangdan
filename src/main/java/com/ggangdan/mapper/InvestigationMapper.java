package com.ggangdan.mapper;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.web.servlet.ModelAndView;

import com.ggangdan.dto.InvestigationDTO;
import com.ggangdan.dto.PagingDTO;
import com.ggangdan.dto.PopularInvestigationDTO;

@Mapper
public interface InvestigationMapper {
	ArrayList<InvestigationDTO> getInvestigationList(String codename);
	int insertInvestigation(Map<String,String> map);
	InvestigationDTO getInvestigation(int idx);
	int updateInverstigation(InvestigationDTO dto);
	InvestigationDTO getList(String investigationName);
	int complete(int idx);
	int cancel(int idx);
	ArrayList<PopularInvestigationDTO> popularInvestigation();
	ArrayList<Integer> getComplete();
}
