package com.ggangdan.dto;

public class MemberDTO {
	private int idx;
	private String id;
	private String pw;
	private String codename;
	private String department;
	private int grade;
	private int lv;
	private int exp;
	
	public MemberDTO() {
		super();
	}

	public MemberDTO(int idx, String id, String pw, String codename, String department, int grade, int lv, int exp) {
		super();
		this.idx = idx;
		this.id = id;
		this.pw = pw;
		this.codename = codename;
		this.department = department;
		this.grade = grade;
		this.lv = lv;
		this.exp = exp;
	}

	public int getIdx() {
		return idx;
	}

	public void setIdx(int idx) {
		this.idx = idx;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getPw() {
		return pw;
	}

	public void setPw(String pw) {
		this.pw = pw;
	}

	public String getCodename() {
		return codename;
	}

	public void setCodename(String codename) {
		this.codename = codename;
	}

	public String getDepartment() {
		return department;
	}

	public void setDepartment(String department) {
		this.department = department;
	}

	public int getGrade() {
		return grade;
	}

	public void setGrade(int grade) {
		this.grade = grade;
	}

	public int getLv() {
		return lv;
	}

	public void setLv(int lv) {
		this.lv = lv;
	}

	public int getExp() {
		return exp;
	}

	public void setExp(int exp) {
		this.exp = exp;
	}

	@Override
	public String toString() {
		return "MemberDTO [idx=" + idx + ", id=" + id + ", pw=" + pw + ", codename=" + codename + ", department="
				+ department + ", grade=" + grade + ", lv=" + lv + ", exp=" + exp + "]";
	}
	
	
}
