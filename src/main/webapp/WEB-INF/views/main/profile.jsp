<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<link rel="stylesheet"
	href="<%=request.getContextPath()%>/resources/css/main/profile.css">
<script src="<%=request.getContextPath()%>/resources/js/main/profile.js"></script>
<script type="text/javascript">
	var contextPath = "<%=request.getContextPath()%>";
</script>
<div class="userinfo">
	<div class="userinfo_box">
		<div class="uBox">
			<span class="uBoxImage"><img class="profileimg"
				src="<%=request.getContextPath()%>/resources/imgs/logo.png"></span>
			<div class="selectimg hidden">
				<div class="profilImglist"></div>
				<div class="profileupload">
					<input type="file" id="fileInput" accept="image/*" style="display:none;" onchange="checkProfileType(this);">
					<label
						for="fileInput" class="custom-file-button">파일 선택</label> <span
						class="fileName">원하는 프로필 사진을 첨부해주세요.</span>
					<Button class="imageUpload">등록</Button>
				</div>
			</div>
			<div class="uTextBox">
				<div class="userBox">
					<span>부서<span class="department"></span></span> <span>닉네임<span
						class="codename"></span></span>
				</div>
				<div class="userBox">
					<span>등급<span class="grade"></span></span> <span>레벨<span
						class="lv"></span></span>
				</div>
			</div>
		</div>
		<div class="userBox2">
			<span>exp</span> <span class="exp_box"><span class="exp"></span></span>
		</div>
	</div>
</div>
<div class="current_best_investigation">
	<div class="current_best_title">
		<p>현재 많은 사람들이 수사중인 파일 TOP 10</p>
		<Button class="list_toggle">
			<i class="fas fa-chevron-down"></i>
		</Button>
	</div>
	<div class="current_list hidden">
		<ul>
			<li>사건 번호</li>
			<li>수사 명</li>
			<li>의뢰인</li>
			<li>증거물(개)</li>
		</ul>
		<hr>
		<div class="popular_list"></div>
	</div>
</div>

