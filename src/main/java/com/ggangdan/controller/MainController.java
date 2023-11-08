package com.ggangdan.controller;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ggangdan.dto.InvestigationDTO;
import com.ggangdan.dto.MemberDTO;
import com.ggangdan.service.HeaderService;
import com.ggangdan.service.MainService;
import com.ggangdan.service.MemberService;


/**
 * Handles requests for the application home page.
 */
@Controller
@RequestMapping("main")
public class MainController {

	@Autowired
	@Qualifier("headerServiceImpl")
	HeaderService HeaderService;

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
		MemberDTO getdto = MemberService.getOne(dto.getId());
		return getdto;

	}
	@PostMapping("getList")
	@ResponseBody
	public InvestigationDTO getList(String investigationName) {
		InvestigationDTO getdto = MainService.getList(investigationName);
		return getdto;
		
	}

	@RequestMapping("updateInverstigation")
	@ResponseBody
	public int updateInverstigation(InvestigationDTO dto) {
		int rs = MainService.updateInverstigation(dto);
		return rs;
	}
	
	@RequestMapping("complete")
	@ResponseBody
	public int complete(int idx) {
		int rs = MainService.complete(idx);
		return rs;
	}
	
	@RequestMapping("cancel")
	@ResponseBody
	public int cancel(int idx) {
		System.out.println("idx : " + idx);
		int rs = MainService.cancel(idx);
		System.out.println("rs : " + rs);

		return rs;
	}

}

