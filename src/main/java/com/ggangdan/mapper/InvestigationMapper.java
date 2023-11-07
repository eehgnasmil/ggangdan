package com.ggangdan.mapper;

import java.util.ArrayList;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.ggangdan.dto.InvestigationDTO;

@Mapper
public interface InvestigationMapper {
	ArrayList<InvestigationDTO> getInvestigationList();
	int insertInvestigation(Map<String,String> map);
	InvestigationDTO getInvestigation(int idx);
}
