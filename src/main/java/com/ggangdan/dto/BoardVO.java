package com.ggangdan.dto;

import org.springframework.web.multipart.MultipartFile;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BoardVO {
	private int idx;
	private String id;
	private String title;
	private String content;
	private String ofile;
	private String sfile;
	private String regdate;
	private MultipartFile file;
}
