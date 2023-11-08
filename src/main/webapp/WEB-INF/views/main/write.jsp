<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<%@include file="../header.jsp"%>
<link rel="stylesheet"
	href="<%=request.getContextPath() %>/resources/css/main/main.css">
<script type="text/javascript" src="http://code.jquery.com/jquery-3.5.1.min.js"></script>
	<script>
	function readURL(input){
		if(input.files && input.files[0]){
			var reader = new FileReader();
			reader.onload = function(e){
			 document.getElementById('preview').src = e.target.result;
		    };
		    reader.readAsDataURL(input.files[0]);
		  } else {
		    document.getElementById('preview').src = "";
		  }
		}
	$(document).ready(function() { 
		getInvestigation(${iidx})
	});
	</script>
</head>
<div class="main">
	<div class="container">
		<%@include file="profile.jsp"%>
		<form action="write" method="post" enctype="multipart/form-data">
			<div class="input">
				<div class="title">
					<input type="text" name="title" placeholder="제목">
				</div>
				<div class="hidden">
					<input type="text" name="codename" value="${codename }">
					<input type="text" name="iidx" value="${iidx }">		
				</div>
				<div class="content">
				<div class="content">
					<textarea rows="4" cols="5" name="content"></textarea>
				</div>
				<div class="file">
					<input type="file" name="file" onchange="readURL(this)">
				</div>
				<div class="preview">
					<img id="preview">
				</div>
				<div class="writeinputbtn">
					<input type="submit" value="전송">
				</div>
			</div>
		</form>
	</div>
</div>
</body>
</html>