package com.ggangdan.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ggangdan.dto.MemberDTO;
import com.ggangdan.mapper.MemberMapper;
import com.ggangdan.service.MemberService;

@Service
public class MemberServiceImpl implements MemberService {
	
	@Autowired
	MemberMapper member;

	@Override
	public MemberDTO getMemberLogin(String id) {
		MemberDTO dto = null;
		try {
			dto = member.getMemberLogin(id);
			return dto;
		} catch (Exception e) {
			return dto;
		}
	}
	
	@Override
	public int insert(MemberDTO dto) {
		int rs = 0;
		try {
			rs = member.insert(dto);
			return rs;
		} catch (Exception e) {
			return rs;
		}
	}
}
