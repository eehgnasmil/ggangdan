package com.ggangdan.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ggangdan.dto.BoardVO;

@Mapper
public interface BoardMapper {
	
	void insert(BoardVO vo);
	List<BoardVO> boardList();
	int likeBtn(int idx);
	int reCommendBtn(int idx);
}
