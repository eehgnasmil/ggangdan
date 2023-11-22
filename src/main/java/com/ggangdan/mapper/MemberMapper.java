package com.ggangdan.mapper;

import java.util.ArrayList;

import org.apache.ibatis.annotations.Mapper;

import com.ggangdan.dto.MemberDTO;

@Mapper
public interface MemberMapper {
	MemberDTO login(String id);
	public int insert(MemberDTO dto);
	public int update(MemberDTO dto);
	MemberDTO getOne(String id);
	public int logout(String id);
	public int WriteBoard(String codename);
	ArrayList<MemberDTO> getallranklist();
	ArrayList<MemberDTO> getdepartmentranklist(String department);
}
