package com.ggangdan.service;

import com.ggangdan.dto.MemberDTO;

public interface MemberService {
	MemberDTO getMemberLogin(String id);
	public int insert(MemberDTO dto);
}
