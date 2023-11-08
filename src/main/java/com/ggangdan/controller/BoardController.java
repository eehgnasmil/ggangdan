package com.ggangdan.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.ggangdan.dto.BoardVO;
import com.ggangdan.service.BoardService;
import com.ggangdan.service.MainService;


@Controller
@RequestMapping("main")
public class BoardController {
	
	@Autowired
	@Qualifier("boardServiceImpl")
	BoardService boardService;
	
	@Autowired
	@Qualifier("mainServiceImpl")
	MainService mainService;
	
	@GetMapping("write")
	public ModelAndView write(HttpSession session, int idx) {
		String codename = (String)session.getAttribute("codename");
		
		ModelAndView mav = new ModelAndView();
		mav.addObject("codename", codename);
		mav.addObject("iidx", idx);
		
		mav.setViewName("main/write");
		return mav;
	}
	
	@PostMapping("write")
	public String insert(BoardVO board) {
		
		boardService.insert(board);
		
		return "main/main";
	}

}
