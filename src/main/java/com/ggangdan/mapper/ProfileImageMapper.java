package com.ggangdan.mapper;

import java.util.ArrayList;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.ggangdan.dto.ProfileImageDTO;

@Mapper
public interface ProfileImageMapper {
	int uploadProfileImage(Map<String,String> map);
	ArrayList<ProfileImageDTO> getProfileImage(String codename);
	int resetUseImage(String codename);
	int selectUseImage(Map<String,String> map);
	ProfileImageDTO getUseImage(String codename);
}
