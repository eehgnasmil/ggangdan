package com.ggangdan.service;

import java.util.List;

import com.ggangdan.dto.LikedDTO;

public interface LikedService {

	void insert(LikedDTO like);

	void delete(LikedDTO like);

	int getCount(int bidx);

	LikedDTO getOne(LikedDTO like);

	List<LikedDTO> getAllCount();

}
