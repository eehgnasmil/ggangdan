package com.ggangdan.dto;

import lombok.Generated;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/*@Getter
@Setter
@Generated
@ToString*/
public class ProfileImageDTO {
	private int idx;
	private String codename;
	private String imgpath;
	public ProfileImageDTO(int idx, String codename, String imgpath) {
		super();
		this.idx = idx;
		this.codename = codename;
		this.imgpath = imgpath;
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
	public String getImgpath() {
		return imgpath;
	}
	public void setImgpath(String imgpath) {
		this.imgpath = imgpath;
	}
	@Override
	public String toString() {
		return "ProfileImageDTO [idx=" + idx + ", codename=" + codename + ", imgpath=" + imgpath + "]";
	}
	
}
