package com.ggangdan.mapper;

import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface FavoriteMapper {
	int favoriteBoard(Map<String,Object> map);
	int favoritedeleteboard(Map<String,Object> map);
}
