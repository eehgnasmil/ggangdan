package com.ggangdan.serviceImpl;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ggangdan.dto.MessageDTO;
import com.ggangdan.mapper.MessageMapper;
import com.ggangdan.service.MessageService;

@Service
public class MessageServiceImpl implements MessageService{
	
	@Autowired
	MessageMapper message;
	
	public int insertMessage(MessageDTO dto) {
		return message.insertMessage(dto);
	}
	
	public ArrayList<MessageDTO> getMessage(int boardidx) {
		return message.getMessage(boardidx);
	}
}
