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

import com.ggangdan.dto.MessageDTO;
import com.ggangdan.service.MessageService;

@Controller
@RequestMapping("main")
public class MessageController {
		
	@Autowired
	@Qualifier("messageServiceImpl")
	MessageService messageService;
	
	@PostMapping("insertmessage")
	@ResponseBody
	public int insertmessage(String message,int boardidx,HttpSession session) {
		String id = (String)session.getAttribute("id");
		String codename = (String)session.getAttribute("codename");
		MessageDTO dto = new MessageDTO();
		dto.setBoardidx(boardidx);
		dto.setId(id);
		dto.setCodename(codename);
		dto.setContent(message);
		int rs = messageService.insertMessage(dto);

		return rs;
	}
	
	@PostMapping("getmessage")
	@ResponseBody
	public Map<String,ArrayList<MessageDTO>> getmessage(int boardidx) {
		Map<String,ArrayList<MessageDTO>> messageMap = new HashMap<String, ArrayList<MessageDTO>>();
		ArrayList<MessageDTO> messageList = messageService.getMessage(boardidx);
		messageMap.put("message", messageList);
		
		
		return messageMap;
	}
}
