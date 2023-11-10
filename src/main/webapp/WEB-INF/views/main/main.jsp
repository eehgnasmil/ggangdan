<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%
	int boardidx = 0;
	String idxString = request.getParameter("idx");
	if(idxString == null) {
		idxString = "";
	} else {
		boardidx = Integer.parseInt(idxString);
	}
	
%>
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

	<div class="img_viewbox">
		<span class="close-icon"><i class="fas fa-times"></i></span>
		<div class="image_view">
			<img alt="not" src="">
		</div>
	</div>
	
	<div class="main">
		<div class="container">
			<%@include file="profile.jsp"%>
			<div class="current_best_investigation">
				<p>현재 많은 사람들이 수사중인 파일</p>
				<div class="current_list">
					<ul class="current_header">
						<li>사건 번호</li>
						<li>수사 명</li>
						<li>의뢰인</li>
						<li>증거물</li>
					</ul>
				</div>
			</div>
			<div class="progress-region">
				<p>수사 진행률 : 50%</p>
				<div class="progress-bar">
					<div class="progress"></div>
				</div>
			</div>
			<div class="investigationbestboard">
				<div class="best_board"></div>
			</div>
			<div class="investigationboard">
				<div class="search">
					<select class="searchselect">
						<option>전체</option>
						<option>지휘부</option>
						<option>셀럽부</option>
						<option>첩보부</option>
					</select> <input class="searchkeyword" type="text"
						placeholder="검색할 내용을 입력해주세요">
						<Button>검색</Button> 
						<a href="write?idx=<%=boardidx %>"><button>글쓰기</button></a>
				</div>
				<div class="write"></div>
				<div class="board">
					<div class="board_list_box"></div>
				</div>
			</div>
		</div>
	</div>

	<%@include file="chat.jsp"%>
	<div class="chatcontroller">
		<div class="MessageCount hidden">
			<span class="notreadcount"></span>
		</div>
		<img alt="chatimg"
			src="<%=request.getContextPath() %>/resources/imgs/live-chat.png">
	</div>
</body>
</html>