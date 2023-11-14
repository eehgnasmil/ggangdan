package com.ggangdan.service;

import java.util.ArrayList;

import com.ggangdan.dto.MessageDTO;

public interface MessageService {
	int insertMessage(MessageDTO dto);
	ArrayList<MessageDTO> getMessage(int boardidx);
}
