package com.ggangdan.service;

import java.util.List;
import java.util.Map;

import com.ggangdan.dto.BoardVO;

public interface BoardService {

   void insert(BoardVO board);
   List<BoardVO> getBest(int iidx);
   BoardVO getLast();
   boolean getRecommend(int idx);
   void updateRecommend(int idx);
   void deleteRecommend(int idx);
   double getInvestigationRate(int iidx);
}