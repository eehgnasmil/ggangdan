<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>GGANGDAN</title>
<link rel="stylesheet"
	href="<%=request.getContextPath() %>/resources/css/main.css">
</head>
<body>
	<%@include file="../header.jsp"%>
	<div class="main">
	<div class="container">
		<div class="userinfo"></div>
		<div class="investigationinfo">
			<div class="investigation"></div>
			<div class="investigationButtons">
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
		<div class="investigationbestboard"></div>
		<div class="investigationboard"></div>
	</div>
	</div>
</body>
</html>