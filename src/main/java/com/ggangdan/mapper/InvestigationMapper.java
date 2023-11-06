package com.ggangdan.mapper;

import java.util.ArrayList;

import org.apache.ibatis.annotations.Mapper;

import com.ggangdan.dto.InvestigationDTO;

@Mapper
public interface InvestigationMapper {
	ArrayList<InvestigationDTO> getInvestigationList();
	int insertInvestigation(String investigationName);
}
