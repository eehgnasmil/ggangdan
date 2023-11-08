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
	var contextPath = '<%=request.getContextPath()%>';
	
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
		<%@include file="profile.jsp"%>
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