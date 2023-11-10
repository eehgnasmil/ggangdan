package com.ggangdan.service;

import com.ggangdan.dto.BoardVO;

public interface BoardService {

	void insert(BoardVO board);
	BoardVO getBest(int iidx);
	BoardVO getLast();
	boolean getRecommend(int idx);
	void updateRecommend(int idx);
	void deleteRecommend(int idx);
}
