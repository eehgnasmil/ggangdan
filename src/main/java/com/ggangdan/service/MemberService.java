package com.ggangdan.service;

import java.util.ArrayList;

import com.ggangdan.dto.MemberDTO;

public interface MemberService {
	MemberDTO login(String id);
	public int insert(MemberDTO dto);
	public int update(MemberDTO dto);
	MemberDTO getOne(String id);
	public int logout(String id);
	public int WriteBoard(String codename);
	// rank
	ArrayList<MemberDTO> getallranklist();
	ArrayList<MemberDTO> getdepartmentranklist(String id);
}
