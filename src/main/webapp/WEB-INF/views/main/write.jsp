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
	</script>
</head>
<form action="write" method="post" enctype="multipart/form-data">
	<div class="write">
		<div class="title">
			<input type="text" name="title" placeholder="제목">
		</div>
		<div class="codename">
			<input type="text" name="codename" value="<%=codename%>">
		</div>
		<div class="content">
			<textarea rows="4" cols="5" name="content"></textarea>
		</div>
		<div class="file">
			<input type="file" name="file" onchange="readURL(this)">
		</div>
		<div class="preview">
			<img id="preview">
		</div>
		<div class="submit">
			<input type="submit" value="전송">
		</div>
	</div>
</form>
</body>
</html>