<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>GGANGDAN</title>
<%@include file="../header.jsp"%>
<link rel="stylesheet"
	href="<%=request.getContextPath()%>/resources/css/main/main.css">
<script src="<%=request.getContextPath()%>/resources/js/main/main.js"></script>
</head>
<body>
	<div class="black_box">
		<div class="changeName">
			<div>수사명 이름을 적어주세요</div>
			<div class="changeBox">
				<span>수정 전 수사명 : <span class="prevName"></span></span> <input
					type="text" class="newName" value="">
			</div>
			<div class="changeBtnBox">
				<div class="changeBtn">수사명 변경</div>
				<div class="changeCancle">취소</div>
			</div>
		</div>
	</div>

	<div class="main">
		<div class="container">
			<%@include file="profile.jsp"%>
			<div class="progress-region">
				<p>수사 진행률 : 50%</p>
				<div class="progress-bar">
					<div class="progress"></div>
				</div>
			</div>
			<div class="investigationbestboard"></div>
			<div class="investigationboard">
			<div class="search">
			
			</div>
			<div class="write">

			</div>
			<div class="board">
				
			</div>
			<div class="board"></div>
		</div>
		</div>
	</div>
</body>
</html>