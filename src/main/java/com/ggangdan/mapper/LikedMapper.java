package com.ggangdan.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.ggangdan.dto.LikedDTO;

@Mapper
public interface LikedMapper {

	void insert(LikedDTO like);

	void delete(LikedDTO like);

	int getCount(int bidx);

	LikedDTO getOne(LikedDTO like);

	List<LikedDTO> getAllCount();


}
