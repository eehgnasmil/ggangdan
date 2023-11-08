<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<%@include file="../header.jsp"%>
<link rel="stylesheet" href="<%=request.getContextPath() %>/resources/css/main/main.css">
	<link rel="stylesheet" href="<%=request.getContextPath() %>/resources/css/main/board.css">
<script type="text/javascript"
	src="http://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="<%=request.getContextPath() %>/resources/js/main/board.js"></script>
<script>

$(document).ready(function() { 
	getInvestigation(${iidx})
	
	$('#file').on("change", function() {
		 var element = document.getElementById('preview-div');
        if (this.files.length > 0) {
            $('.fileInputName').text("선택한 이미지 : " + this.files[0].name);
            element.classList.remove('hidden');
            
        } else {
            $('.fileInputName').text("원하는 프로필 사진을 첨부해주세요.");
            element.classList.add('hidden');
        }
    });
});
</script>
</head>
<div class="main">
	<div class="container">
		<%@include file="profile.jsp"%>
		<div class="input">
			<form action="write" method="post" enctype="multipart/form-data">
				<div class="title">
					<input type="text" name="title" placeholder="제목">
				</div>
				<div class="hidden">
					<input type="text" name="codename" value="${codename }"> 
					<input type="text" name="iidx" value="${iidx }">
				</div>
				<div class="content">
					<textarea rows="4" cols="5" name="content"></textarea>
				</div>
				<div class="form">
					<div class="file">
						<input type="file" id="file" name="file" accept="image/*" style="display:none;" onchange="readURL(this); checkFileType(this);">
						<label for="file" class="filebtn" id="fileNameDisplay" >파일 선택</label>
						<span class="fileInputName">원하는 프로필 사진을 첨부해주세요.</span>
					</div>
				</div>
				<div class="writeinputbtn">
					<input type="button" id="back" style="display:none;" onclick="backbtn()">
					<label for="back" class="submitbtn" onclick="backbtn()">취소</label>
					<input type="submit" id="submit" style="display:none;">
					<label for="submit" class="submitbtn">등록</label>
				</div>
			</form>
		</div>
		<div class="preview hidden" id="preview-div">
			<img id="preview" >
		</div>
	</div>
</div>
</body>
</html>