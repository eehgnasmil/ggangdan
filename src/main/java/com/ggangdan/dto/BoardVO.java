package com.ggangdan.dto;

import org.springframework.web.multipart.MultipartFile;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Generated;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

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
	private int liked;
	private boolean recommend;
	private String department;

	
public BoardVO() {
	// TODO Auto-generated constructor stub
}


public BoardVO(int iidx, int idx, String codename, String title, String content, String ofile, String sfile,
		String regdate, MultipartFile file, int liked, boolean recommend) {
	super();
	this.iidx = iidx;
	this.idx = idx;
	this.codename = codename;
	this.title = title;
	this.content = content;
	this.ofile = ofile;
	this.sfile = sfile;
	this.regdate = regdate;
	this.file = file;
	this.liked = liked;
	this.recommend = recommend;
}
public BoardVO(int iidx, int idx, String codename, String title, String content, String ofile, String sfile,
		String regdate, MultipartFile file, int liked, boolean recommend, String department) {
	super();
	this.iidx = iidx;
	this.idx = idx;
	this.codename = codename;
	this.title = title;
	this.content = content;
	this.ofile = ofile;
	this.sfile = sfile;
	this.regdate = regdate;
	this.file = file;
	this.liked = liked;
	this.recommend = recommend;
	this.department = department;
}


public int getIidx() {
	return iidx;
}


public void setIidx(int iidx) {
	this.iidx = iidx;
}


public int getIdx() {
	return idx;
}


public void setIdx(int idx) {
	this.idx = idx;
}


public String getCodename() {
	return codename;
}


public void setCodename(String codename) {
	this.codename = codename;
}


public String getTitle() {
	return title;
}


public void setTitle(String title) {
	this.title = title;
}


public String getContent() {
	return content;
}


public void setContent(String content) {
	this.content = content;
}


public String getOfile() {
	return ofile;
}


public void setOfile(String ofile) {
	this.ofile = ofile;
}


public String getSfile() {
	return sfile;
}


public void setSfile(String sfile) {
	this.sfile = sfile;
}


public String getRegdate() {
	return regdate;
}


public void setRegdate(String regdate) {
	this.regdate = regdate;
}


public MultipartFile getFile() {
	return file;
}


public void setFile(MultipartFile file) {
	this.file = file;
}


public int getLiked() {
	return liked;
}


public void setLiked(int liked) {
	this.liked = liked;
}


public boolean isRecommend() {
	return recommend;
}


public void setRecommend(boolean recommend) {
	this.recommend = recommend;
}


public String getDepartment() {
	return department;
}


public void setDepartment(String department) {
	this.department = department;
}


@Override
public String toString() {
	return "BoardVO [iidx=" + iidx + ", idx=" + idx + ", codename=" + codename + ", title=" + title + ", content="
			+ content + ", ofile=" + ofile + ", sfile=" + sfile + ", regdate=" + regdate + ", file=" + file + ", liked="
			+ liked + ", recommend=" + recommend + ", department=" + department + "]";
}

	
	
	
	
	
}
