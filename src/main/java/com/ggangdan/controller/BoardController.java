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
		String codename = (String) session.getAttribute("codename");

		ModelAndView mav = new ModelAndView();
		mav.addObject("codename", codename);
		mav.addObject("iidx", idx);

		mav.setViewName("main/write");
		return mav;
	}

	@PostMapping("write")
	public String insert(BoardVO board, HttpSession session) {
		String codename = (String) session.getAttribute("codename");
		memberService.WriteBoard(codename);
		boardService.insert(board);
		board = boardService.getLast();

		return "redirect: main?idx=" + board.getIidx() + "&page=1";
	}

	@PostMapping("getBest")
	@ResponseBody
	public Map<String, Object> getBest(@RequestParam("idx") int iidx) {
		List<BoardVO> board = boardService.getBest(iidx);
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("board", board);
		return map;
	}

	@PostMapping("liked")
	@ResponseBody
	public Map<String, Object> liked(@RequestParam("idx") int bidx, HttpSession session) {
		;
		String codename = (String) session.getAttribute("codename");

		LikedDTO like = new LikedDTO();
		like.setCodename(codename);
		like.setBidx(bidx);

		Map<String, Object> map = new HashMap<String, Object>();

		if (likedService.getOne(like) == null) {
			likedService.insert(like);
		} else {
			likedService.delete(like);
		}

		int count = likedService.getCount(bidx);
		map.put("count", count);
		map.put("like", likedService.getOne(like));

		return map;
	}

	@PostMapping("likedCount")
	@ResponseBody
	public List<LikedDTO> likedCount() {
		List<LikedDTO> like = likedService.getAllCount();
		return like;
	}

	@PostMapping("getRecommend")
	@ResponseBody
	public boolean getRecommend(@RequestParam("idx") int idx) {
		if (boardService.getRecommend(idx) == true) {
			boardService.deleteRecommend(idx);
		} else {
			boardService.updateRecommend(idx);
		}
		boolean recommend = boardService.getRecommend(idx);

		return recommend;
	}

	@PostMapping("getInvestigationRate")
	@ResponseBody
	public double getInvestigationRate(int iidx) {
		return boardService.getInvestigationRate(iidx);
	}
}
