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
	MainServiceImpl MainService;
	
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
}

