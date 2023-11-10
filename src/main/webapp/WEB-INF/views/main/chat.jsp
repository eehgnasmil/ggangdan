<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<link rel="stylesheet"
	href="<%=request.getContextPath()%>/resources/css/main/chat.css">
<script src="<%=request.getContextPath() %>/resources/js/main/chat.js"></script>
<style>
.message {
	margin: auto;
	width: 100%;
	height: 77%;
	background-image:
		url('<%=request.getContextPath() %>/resources/imgs/message.png');
	background-size: cover;
	background-repeat: no-repeat;
}
</style>
<div class="chattmain hidden">
	<div class="messagebox">
		<div class="message">

		</div>
		<div class="inputmessage">
			<textarea class="inputText"> </textarea>
			<div class="messagebtn">
				<button class="messagesubmit">전송</button>
			</div>
		</div>

	</div>
</div>