package com.ggangdan.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ggangdan.dto.InvestigationDTO;
import com.ggangdan.serviceImpl.HeaderServiceImpl;

/**
 * Handles requests for the application home page.
 */
@Controller
@RequestMapping("main")
public class HeaderController {
	
	@Autowired
	@Qualifier("headerServiceImpl")
	HeaderServiceImpl HeaderService;
	
	@RequestMapping("logout")
	public String logout(HttpSession session) {
		session.invalidate();
		return "redirect: /basic";
	}
	
	@PostMapping("getinvestigationslist")
	@ResponseBody
	public ArrayList<InvestigationDTO> getinvestigationslist() {
		return HeaderService.getInvestigationList();
	}
	
	@PostMapping("insertinvestigation")
	@ResponseBody
	public int insertinvestigation(String investigationName,HttpSession session) {
		String codename = (String)session.getAttribute("codename");
		
		Map<String,String> investigation = new HashMap<String, String>();
		investigation.put("codename", codename);
		investigation.put("investigationName",investigationName);
		
		int rs = HeaderService.insertInvestigation(investigation);
		return rs;
	}
}
