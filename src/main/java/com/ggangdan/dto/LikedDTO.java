package com.ggangdan.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LikedDTO {
	
	int idx;
	int bidx;
	String codename;
	int count;
}
