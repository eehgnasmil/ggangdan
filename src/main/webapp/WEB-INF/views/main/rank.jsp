<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet"
	href="<%=request.getContextPath()%>/resources/css/main/rank.css">
<script src="<%=request.getContextPath()%>/resources/js/main/rank.js"></script>
</head>
<body>
<div class = "ranking">
<div class="rankingcontainer">
	<div class="Rank">
	    <div class="RackOption">
	      <div class="allrank alltext" id="allrank" onclick="toggle('allranklist', 'departmentranklist')">전체 랭킹</div>
	      <div class="departmentrank departmenttext" id="departmentrank" onclick="toggle('departmentranklist', 'allranklist')">부서 랭킹</div>
	    </div>
	    <div class="ranklist">
	      <div class="ranklistheader" id="ranklistheader">
	        <ul>
	          <li>rank</li>
	          <li>level</li>
	          <li>codename</li>
	          <li>department</li>
	          <li>grade</li>
	        </ul>
	      </div>
	      <div class="myrank">
	        
	      </div>
	      <div class="allranklist" id="allranklist">
	       
	      </div>
	      <div class="departmentranklist" id="departmentranklist">
	        
	      </div>
	    </div>
  	</div>
 </div>
 </div>
</body>
</html>