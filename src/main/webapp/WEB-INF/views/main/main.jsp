<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>GGANGDAN</title>
<%@include file="../header.jsp"%>
<link rel="stylesheet"
	href="<%=request.getContextPath() %>/resources/css/main/main.css">
<script
	src="<%=request.getContextPath()%>/resources/js/main/main.js"></script>
</head>

<body>
	
	<div class="main">
	<div class="container">
		<div class="userinfo"></div>
		<div class="investigationinfo">
			<div class="investigationName">
				<p>사건 파일<p>
			</div>
			<div class="investigationButtons">
				<button class="rename">수사 변경</button>
				<button class="complete">수사 완료</Button>
				<button class="cancel">의뢰 취소</button>
			</div>
		</div>
		<div class="progress-region">
			<p>수사 진행률 : 50%</p>
			<div class="progress-bar">
				<div class="progress"></div>
			</div>
		</div>
		<div class="investigationbestboard">
			
		</div>
		<div class="investigationboard">
			<div class="search">
				<button>글쓰기</button>
			</div>
			<div class="board"></div>
		</div>
	</div>
	</div>
</body>
</html>