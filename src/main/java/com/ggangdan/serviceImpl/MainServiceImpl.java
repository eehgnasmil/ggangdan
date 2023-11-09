package com.ggangdan.serviceImpl;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.ggangdan.dto.BoardVO;
import com.ggangdan.dto.InvestigationDTO;
import com.ggangdan.dto.ProfileImageDTO;
import com.ggangdan.mapper.BoardMapper;
import com.ggangdan.mapper.InvestigationMapper;
import com.ggangdan.mapper.ProfileImageMapper;
import com.ggangdan.service.MainService;

@Service
public class MainServiceImpl implements MainService{

	@Autowired
	@Qualifier("investigationMapper")
	InvestigationMapper Investigation;
	
	@Autowired
	@Qualifier("profileImageMapper")
	ProfileImageMapper ImageMapper;
	
	@Autowired
	@Qualifier("boardMapper")
	BoardMapper BoardMapper;

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
		return Investigation.cancel(idx);

	}
	
	@Override
	public int uploadProfileImage(Map<String,String> map) {
		return ImageMapper.uploadProfileImage(map);
	}
	
	@Override
	public ArrayList<ProfileImageDTO> getProfileImage(String codename) {
		return ImageMapper.getProfileImage(codename);
	}
	
	@Override
	public List<BoardVO> boardList() {
		return BoardMapper.boardList();
	}

	@Override
	public int likeBtn(int idx) {
		return BoardMapper.likeBtn(idx);
	}
	
	@Override
	public int reCommendBtn(int idx) {
		return BoardMapper.reCommendBtn(idx);
	}

}
