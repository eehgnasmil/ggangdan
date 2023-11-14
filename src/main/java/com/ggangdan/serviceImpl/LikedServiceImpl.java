package com.ggangdan.serviceImpl;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ggangdan.dto.LikedDTO;
import com.ggangdan.mapper.LikedMapper;
import com.ggangdan.service.LikedService;

@Service
public class LikedServiceImpl implements LikedService {

	@Autowired
	LikedMapper liked;

	@Override
	public void insert(LikedDTO like) {
		liked.insert(like);  
	}

	@Override
	public void delete(LikedDTO like) {
		liked.delete(like);
	}

	@Override
	public int getCount(int bidx) {
		return liked.getCount(bidx);
	}

	@Override
	public LikedDTO getOne(LikedDTO like) {
		return liked.getOne(like);
	}

	@Override
	public List<LikedDTO> getAllCount() {
		return liked.getAllCount();
	}

	

}
