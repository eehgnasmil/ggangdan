package com.ggangdan.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ggangdan.dto.BoardVO;

@Mapper
public interface BoardMapper {
	void insert(BoardVO vo);
	BoardVO getBest(int iidx);
	List<BoardVO> boardList();
	int reCommendBtn(int idx);
	BoardVO getLast();
}
