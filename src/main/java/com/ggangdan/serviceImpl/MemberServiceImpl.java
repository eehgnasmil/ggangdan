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
		System.out.println("here? here?");
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
		System.out.println("여기 왔니?");
		int rs = 0;
		try {
			rs = member.insert(dto);
			System.out.println("impl rs : "+ rs);
			return rs;
		} catch (Exception e) {
			System.out.println("impl rs : "+ rs);
			return rs;
		}
	}
}
