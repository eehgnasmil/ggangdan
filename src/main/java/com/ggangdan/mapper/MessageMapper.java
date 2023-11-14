package com.ggangdan.mapper;

import java.util.ArrayList;

import org.apache.ibatis.annotations.Mapper;

import com.ggangdan.dto.MessageDTO;

@Mapper
public interface MessageMapper {
	int insertMessage(MessageDTO dto);
	ArrayList<MessageDTO> getMessage(int boardidx);
}
