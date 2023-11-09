package com.ggangdan.dto;

import lombok.Generated;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@Generated
@ToString
public class MessageDTO {
	private int idx;
	private int boardidx;
	private String id;
	private String codename;
	private String department;
	private String content;
	private String senddate;	
}
