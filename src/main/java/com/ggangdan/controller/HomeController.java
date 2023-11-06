package com.ggangdan.controller;

import java.text.DateFormat;
import java.util.Date;
import java.util.Locale;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

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

	@RequestMapping("login")
	public String login() {
		return "main/main";
	}

	@PostMapping("login")
	@ResponseBody
	public int login(MemberDTO dto, HttpSession session) {
		MemberDTO getdto = service.getMemberLogin(dto.getId());
		System.out.println("It this here??");

		int rs = 0;
		ModelAndView mav = new ModelAndView();
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
		System.out.println("rs : " + rs);

		ModelAndView mav = new ModelAndView();
		return rs;

	}

}
