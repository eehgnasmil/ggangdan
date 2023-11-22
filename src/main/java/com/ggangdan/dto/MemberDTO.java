package com.ggangdan.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MemberDTO {
	private int idx;
	private String id;
	private String pw;
	private String codename;
	private String department;
	private int grade;
	private int lv;
	private int exp;
	private int ranking;
}
