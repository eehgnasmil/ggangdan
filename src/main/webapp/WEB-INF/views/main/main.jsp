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
<script>
		$(function(){
			var arr = ["깨갱..", "깽", "깡", "깨수깡", "깽스터"];
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
						for(let i=0; i<arr.length; i++) {
							if(i == dto.grade) {
								$('.grade').text(arr[i]);
							}
						}

						$('.lv').text(dto.lv);
						$('.exp').css("width",dto.exp+"%");
					},
					error: function(xhr, status, error){
						console.log(xhr, status, error);
					}
				});
			};
			getOne();
			
		})
		
		
	</script>

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
				<div class="board_list_box">
					<%--<div class="board_box">
						 <div class="pictureBox">
							<img src="<%=request.getContextPath()%>/resources/imgs/test.jpg" alt="pic">
						</div>
						<div class="boardTextBox">
							<div class="boardectBox">
								<div class="ectBox">
									<span class="b_inver"></span>
									<span class="b_codename"></span>
									<span class="b_date"></span>
								</div>
								<div class="ectBox">
									<span class="b_liked"></span>
									<span class="b_recommend"></span>
								</div>
							</div>
							<div class="titleBox">
								<span class="b_title"></span>
							</div>
							<div class="contentBox">
								<span class="b_content"></span>
								<span class="more">more</span>
							</div>
						</div>
					</div> --%>
				</div>
			</div>
			<div class="board"></div>
		</div>
		</div>
	</div>
</body>
</html>