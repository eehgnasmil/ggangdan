package com.ggangdan.mapper;

import com.ggangdan.dto.MemberDTO;

public interface MemberMapper {
	MemberDTO login(String id);
	public int insert(MemberDTO dto);
	public int update(MemberDTO dto);
	MemberDTO getOne(String id);
	public int logout(String id);

}
