package com.ggangdan.serviceImpl;

import java.util.ArrayList;

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
	public MemberDTO login(String id) {
		MemberDTO dto = null;
		try {
			dto = member.login(id);
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

	@Override
	public int update(MemberDTO dto) {
		int rs = 0;
		try {
			rs = member.update(dto);
			return rs;
		} catch (Exception e) {
			return rs;
		}
	}
	
	@Override
	public MemberDTO getOne(String id) {
		MemberDTO dto = null;
		try {
			dto = member.getOne(id);
			return dto;
		} catch (Exception e) {

			return dto;
		}
	}

	@Override
	public int logout(String id) {
		int rs = 1;
		return rs;
	}
	
	public int WriteBoard(String codename) {
		return member.WriteBoard(codename);
	}
	
	// rank
	@Override
	public ArrayList<MemberDTO> getallranklist() {
		return member.getallranklist();
	}

	@Override
	public ArrayList<MemberDTO> getdepartmentranklist(String id) {
		MemberDTO dto = member.getOne(id);
		return member.getdepartmentranklist(dto.getDepartment());
	}

}
