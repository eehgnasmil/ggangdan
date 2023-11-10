package com.ggangdan.dto;

import org.springframework.web.multipart.MultipartFile;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BoardVO {
	private int iidx;
	private int idx;
	private String codename;
	private String title;
	private String content;
	private String ofile;
	private String sfile;
	private String regdate;
	private MultipartFile file;
	private boolean recommend;
	private String department;
	private String icodename;
}
