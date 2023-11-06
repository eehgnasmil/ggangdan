package com.ggangdan.mapper;

import com.ggangdan.dto.MemberDTO;

public interface MemberMapper {
	MemberDTO getMemberLogin(String id);
	public int insert(MemberDTO dto);
}
