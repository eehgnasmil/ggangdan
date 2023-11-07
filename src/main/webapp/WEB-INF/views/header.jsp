<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GGANGDAN</title>
    <link rel="stylesheet" href="<%=request.getContextPath() %>/resources/css/header.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    <script src="<%=request.getContextPath() %>/resources/js/header.js"></script>
    <%
			String id = (String)session.getAttribute("id");
			String codename = (String)session.getAttribute("codename");
	%>
    <script>
		var id = <%=id%>;
		var codename = <%=codename%>;

    	if(codename == null) {
			alert("로그인 후에 이용 가능합니다");
			location.href = "<%=request.getContextPath()%>";
		}
    </script>
</head>
<body>
    <header class="header">
        <i class="menu-icon fas fa-bars"></i>
        <a class="home" href="<%=request.getContextPath() %>">
            <span class="ggangdan">GGANGDAN</span>
        </a>
        <a class="logout" href="logout">
        	<Button class="sign_btn">로그아웃</Button>
        </a>
    </header>
    <div class="categorymenu">
        <div class="logo">
           	<img src="<%=request.getContextPath() %>/resources/imgs/headerlogo.png" alt="logo">
        </div>
        <div class="category">
        	<div class="investigationList">
        	
        	</div>
        	<p class="addcategory">+ 새로운 수사 파일</p>     
        </div>
           
    </div>
    <div class="newcategoryalert">
        <div class="newcategoryname">
            <h3>새로운 수사명을 입력해주세요.</h3>
            <input type="text" name="investigationName" placeholer="새로운 수사 파일">
            <div class="button_container">
                <Button class="newbtn">새로만들기</Button>
                <Button class="cancelbtn">취소</Button>
            </div>
        </div>
    </div>
</body>
</html>