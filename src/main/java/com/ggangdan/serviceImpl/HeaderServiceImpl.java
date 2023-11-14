package com.ggangdan.serviceImpl;

import java.util.ArrayList;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.ggangdan.dto.InvestigationDTO;
import com.ggangdan.mapper.FavoriteMapper;
import com.ggangdan.mapper.InvestigationMapper;
import com.ggangdan.service.HeaderService;

@Service
public class HeaderServiceImpl implements HeaderService{
	
	@Autowired
	@Qualifier("investigationMapper")
	InvestigationMapper Investigation;
	
	@Autowired
	@Qualifier("favoriteMapper")
	FavoriteMapper favorite;
	
	public ArrayList<InvestigationDTO> getInvestigationList(String codename) {
		return Investigation.getInvestigationList(codename);
	}
	
	public int insertInvestigation(Map<String,String> map) {
		return Investigation.insertInvestigation(map);
	}
	
	public int favoriteBoard(Map<String,Object> map) {
		return favorite.favoriteBoard(map);
	}
	
	public int favoritedeleteboard(Map<String,Object> map) {
		return favorite.favoritedeleteboard(map);
	}
	
	public ArrayList<Integer> getComplete() {
		return Investigation.getComplete();
	}
}
