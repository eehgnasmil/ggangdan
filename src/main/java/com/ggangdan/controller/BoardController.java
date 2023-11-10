package com.ggangdan.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.ggangdan.dto.BoardVO;
import com.ggangdan.dto.LikedDTO;
import com.ggangdan.service.BoardService;
import com.ggangdan.service.LikedService;
import com.ggangdan.service.MainService;
import com.ggangdan.service.MemberService;


@Controller
@RequestMapping("main")
public class BoardController {
	
	@Autowired
	@Qualifier("boardServiceImpl")
	BoardService boardService;
	
	@Autowired
	@Qualifier("mainServiceImpl")
	MainService mainService;
	
	@Autowired
	@Qualifier("memberServiceImpl")
	MemberService memberService;
	
	@Autowired
	@Qualifier("likedServiceImpl")
	LikedService likedService;
	
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
	public String insert(BoardVO board,HttpSession session) {
		String codename = (String)session.getAttribute("codename");
		memberService.WriteBoard(codename);
		boardService.insert(board);
		board = boardService.getLast();
		
		return "redirect: main?idx=" + board.getIidx();
	}
	
	@PostMapping("getBest")
	@ResponseBody
	public Map<String, Object> getBest(@RequestParam("idx") int iidx) {
		Map<String, Object> map = new HashMap<String, Object>();
		BoardVO board = boardService.getBest(iidx);
		map.put("board", board);
		System.out.println(board.getIidx());
		return map;
	}
	
	@PostMapping("liked")
	@ResponseBody
	public int liked(@RequestParam("idx") int bidx, HttpSession session) {
		;
		String codename = (String)session.getAttribute("codename");
		
		LikedDTO like = new LikedDTO();
		like.setCodename(codename);
		like.setBidx(bidx);		
		
		System.out.println(likedService.getOne(like));
		if(likedService.getOne(like) == null) {
			likedService.insert(like);
		} else {
			likedService.delete(like);
		}
		
		int count = likedService.getCount(bidx);
		
		return count;
	}
	
	@PostMapping("likedCount")
	@ResponseBody
	public List<LikedDTO> likedCount() {
		List<LikedDTO> like = likedService.getAllCount();
		return like;
	}

}
