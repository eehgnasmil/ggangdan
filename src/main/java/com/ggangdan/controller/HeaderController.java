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
import com.ggangdan.service.HeaderService;

/**
 * Handles requests for the application home page.
 */
@Controller
@RequestMapping("main")
public class HeaderController {
	
	@Autowired
	@Qualifier("headerServiceImpl")
	HeaderService HeaderService;
	
	@RequestMapping("logout")
	public String logout(HttpSession session) {
		session.invalidate();
		return "redirect: /home";
	}
	
	@PostMapping("getinvestigationslist")
	@ResponseBody
	public ArrayList<InvestigationDTO> getinvestigationslist(HttpSession session) {
		String codename = (String)session.getAttribute("codename");
		return HeaderService.getInvestigationList(codename);
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
	
	@PostMapping("favoriteboard")
	@ResponseBody
	public int favoriteboard(int boardidx,HttpSession session) {
		String codename = (String)session.getAttribute("codename");
		Map<String,Object> map = new HashMap<String, Object>();
		map.put("codename", codename);
		map.put("boardidx", boardidx);
		int rs = HeaderService.favoriteBoard(map);
		return rs;
	}
	
	@PostMapping("favoritedeleteboard")
	@ResponseBody
	public int favoritedeleteboard(int boardidx,HttpSession session) {
		String codename = (String)session.getAttribute("codename");
		Map<String,Object> map = new HashMap<String, Object>();
		map.put("codename", codename);
		map.put("boardidx", boardidx);
		int rs = HeaderService.favoritedeleteboard(map);
		return rs;
	}
	
	@PostMapping("getComplete")
	@ResponseBody
	public ArrayList<Integer> getComplete() {
		return HeaderService.getComplete();
	}
	
}
