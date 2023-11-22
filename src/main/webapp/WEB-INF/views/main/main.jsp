<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%
int boardidx = 0;
String idxString = request.getParameter("idx");
if (idxString == null) {
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
				<div class="progress-region">
					<p>수사 진행률 : <span class="investigationrate">0</span>%</p>
					<div class="progress-bar">
						<div class="progress"></div>
					</div>
				</div>
				<div class="investigationbestboard">
					<div class="best_board hidden"></div>
				</div>
				<div class="investigationboard">
					<div class="search">
		               <select class="searchselect">
		                  <option value="title_context" class="sel_option">전체</option>
		                  <option value="commandPost" class="sel_option">지휘부</option>
		                  <option value="CelebrityDepartment" class="sel_option">셀럽부</option>
		                  <option value="IntelligenceDepartment" class="sel_option">첩보부</option>
		               </select> 
		               <input class="searchkeyword" type="text" placeholder="검색할 내용을 입력해주세요" id="searchInput"> 
		               <button class="searchBtn">검색</button>
		               <a href="write?idx=<%=boardidx %>" class="searchBtn"><button>글쓰기</button></a>
		            </div>
					<div class="write">
		
					</div>
					<div class="board">
						<div class="total_box">게시글 : <span id="total_count"></span> (개)</div>
						<div class="board_list_box">
						</div>
						
						
						<c:forEach items="${items.content}" var="item">
						    <!-- 아이템 데이터 표시 -->
						</c:forEach>
						
						<div class="pagination">
						    <c:forEach begin="1" end="${items.totalPages}" var="pageNum">
						        <c:url var="pageLink" value="/items">
						            <c:param name="page" value="${pageNum}" />
						        </c:url>
						        <a href="${pageLink}" class="${pageNum == items.number ? 'active' : ''}">${pageNum}</a>
						    </c:forEach>
						</div>
					</div>
				</div>
			</div>
			<%@include file="rank.jsp"%>
		</div>

		<%@include file="chat.jsp"%>
		<div class="chatcontroller">
			<div class="MessageCount hidden">
				<span class="notreadcount"></span>
			</div>
			<img alt="chatimg"
				src="<%=request.getContextPath()%>/resources/imgs/live-chat.png">
		</div>
</body>
</html>