package com.ggangdan.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.ggangdan.dto.BoardVO;

@Mapper
public interface BoardMapper {
   void insert(BoardVO vo);
   List<BoardVO> getBest(int iidx);
   List<BoardVO> boardList(String codename);
   int reCommendBtn(int idx);
   BoardVO getLast();
   boolean getRecommend(int idx);
   void updateRecommend(int idx);
   void deleteRecommend(int idx);
   double getInvestigationRate(int iidx);
}