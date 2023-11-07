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
	<script>
		$(function(){
			function getOne(){
				var id = "<%=id%>";
				const params = {id:id};
				$.ajax({
					type:"POST",
					url: "getOne",
					data: params,
					dataType: "json",
					success: function(dto) {
						$('.department').text(dto.department);
						$('.codename').text(dto.codename);
						$('.grade').text(dto.grade);
						$('.lv').text(dto.lv);
						$('.exp').css("width",dto.exp+"%");
					},
					error: function(xhr, status, error){
						console.log(xhr, status, error);
					}
				});
			};
			getOne();
			
			
			
			function updateInverstigation(){
				var codename = "<%=codename%>";
				 
				const params = {codename:codename};
				$.ajax({
					type:"POST",
					url: "updateInverstigation",
					data: params,
					dataType: "json",
					success: function(rs) {
						if(rs == 1) {
							alert("수사변경 완료");
						}else {
							alert("변경 취소..");
						}
					},
					error: function(xhr, status, error){
						console.log(xhr, status, error);
					}
				});
			};
			
			$('.rename').click(function(){
				updateInverstigation();
			})
		})
		
		
	</script>
<body>
	
	<div class="main">
	<div class="container">
		<div class="userinfo">
			<div class="userinfo_box">
				<div class="uBox">
					<span class="uBoxImage"><img src="<%=request.getContextPath()%>/resources/imgs/test.jpg"></span>
				
					<div class="uTextBox">
						<div class="userBox">
							<span>부서<span class="department"></span></span>
							<span>닉네임<span class="codename"></span></span>
						</div>
						<div class="userBox">
							<span>등급<span class="grade"></span></span>
							<span>레벨<span class="lv"></span></span>
						</div>
					</div>
				</div>
				<div class="userBox2">
					<span>exp</span>
					<span class="exp_box"><span class="exp"></span></span>
				</div>
			</div>
		</div>
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
				<a href="write">
					<button>글쓰기</button>
				</a>
			</div>
			<div class="board"></div>
		</div>
	</div>
	</div>
</body>
</html>