package com.ggangdan.controller;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ggangdan.dto.MemberDTO;
import com.ggangdan.service.MemberService;

/**
 * Handles requests for the application home page.
 */
@Controller
public class HomeController {
	@Autowired
	@Qualifier("memberServiceImpl")
	MemberService service;

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home() {

		return "home";
	}

	@GetMapping("join")
	public String join() {
		return "join";
	}
	@GetMapping("forget")
	public String forget() {
		return "forget";
	}
	
	@PostMapping("login")
	@ResponseBody
	public int login(MemberDTO dto, HttpSession session) {
		MemberDTO getdto = service.login(dto.getId());		


		int rs = 0;
		if (getdto != null && (dto.getPw() != null && dto.getPw().equals(getdto.getPw()))) {
			session.setAttribute("id", getdto.getId());
			session.setAttribute("codename", getdto.getCodename());
			rs = 1;
		} else {
			rs = 0;
		}
		return rs;
	}

	@PostMapping("join")
	@ResponseBody
	public int register(MemberDTO dto, HttpServletResponse response) {
		int rs = service.insert(dto);

		return rs;
		
	}
	@PostMapping("forget")
	@ResponseBody
	public int forget(MemberDTO dto, HttpServletResponse response) {
		int rs = service.update(dto);
		
		return rs;
		
	}


}
