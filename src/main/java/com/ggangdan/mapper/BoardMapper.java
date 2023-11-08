package com.ggangdan.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.ggangdan.dto.BoardVO;

@Mapper
public interface BoardMapper {
	
	void insert(BoardVO vo);

}
