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
					<input type="file" id="fileInput" style="display: none;"> <label
						for="fileInput" class="custom-file-button">파일 선택</label> 
						<span class="fileName">원하는 프로필 사진을 첨부해주세요.</span>
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

<div class="investigationinfo">
	<div class="investigationName">
		<p>사건 파일
		<p>
	</div>
	<div class="investigationButtons">
		<button class="rename">수사 변경</button>
		<button class="complete">수사 완료</Button>
		<button class="cancel">의뢰 취소</button>
	</div>
</div>