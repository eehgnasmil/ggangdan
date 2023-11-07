package com.ggangdan.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ggangdan.dto.InvestigationDTO;
import com.ggangdan.dto.MemberDTO;
import com.ggangdan.serviceImpl.HeaderServiceImpl;
import com.ggangdan.service.MemberService;
import com.ggangdan.serviceImpl.MainServiceImpl;

/**
 * Handles requests for the application home page.
 */
@Controller
@RequestMapping("main")
public class MainController {
	@Autowired
	@Qualifier("headerServiceImpl")
	HeaderServiceImpl HeaderService;

	@Autowired
	@Qualifier("mainServiceImpl")
	MainService MainService;

	@Autowired
	@Qualifier("memberServiceImpl")
	MemberService MemberService;

	@RequestMapping("main")
	public String home() {

		return "main/main";
	}	
	
	@RequestMapping("write")
	public String write() {
		return "main/write";
	}
	@RequestMapping("getInvestigation")
	@ResponseBody
	public InvestigationDTO getInvestigation(int idx) {
		
		return MainService.getInvestigation(idx);
	}

	@RequestMapping("write")
	public String write() {
		return "main/write";
	}

	@RequestMapping("getInvestigation")
	@ResponseBody
	public InvestigationDTO getInvestigation(int idx) {

		return MainService.getInvestigation(idx);
	}

	@PostMapping("getOne")
	@ResponseBody
	public MemberDTO getOne(MemberDTO dto) {
		System.out.println("id : " + dto.getId());
		MemberDTO getdto = MemberService.getOne(dto.getId());
		System.out.println("getdto : " + getdto);
		return getdto;

	}
	
	@RequestMapping("updateInverstigation")
	@ResponseBody
	public int updateInverstigation(InvestigationDTO dto) {
		int rs = MainService.updateInverstigation(dto);
		
		return rs;
	}

}

