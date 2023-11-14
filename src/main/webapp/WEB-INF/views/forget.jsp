<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="EUC-KR">
<script src="https://code.jquery.com/jquery-3.7.1.min.js"
	integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
	crossorigin="anonymous"></script>
<script src="<%=request.getContextPath() %>/resources/js/forget.js"></script>

<link rel="stylesheet"href="<%=request.getContextPath() %>/resources/css/forget.css">
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@10"></script>
<title>GGANGDAN</title>
</head>
<style>
    body {
        background-image: url('<%=request.getContextPath() %>/resources/imgs/background.png');
        background-size: cover;
        background-repeat: no-repeat;
        padding: 0;
	    margin: 0;
	    display: grid;
	    grid-template-rows: 1fr 10rem auto;
	    grid-template-areas:
	        "main"
	        "."
	        "footer";
	    overflow-x: hidden;
	    min-height: 100vh;
	    font-family: 'neurimboGothicRegular';
    }
</style>
<body>
	<div class="pw">
		<div class="pw__form">
			<form action="forget" name="forgot__form" method="POST">

				<h1 class="pw__title">Forgot Password</h1>

				<div class="pw__content">
					<div class="pw__box">
						<div class="pw__box-input">
							<input type="text" name="id" id="id" required class="pw__input"

								placeholder=""> <label for="" class="pw__label">ID</label>
						</div>
					</div>
					<div class="pw__box">
						<div class="pw__box-input">
							<input type="password" name="pw" id="pw" required class="pw__input"

								placeholder=""> <label for="" class="pw__label">New
								Password</label>
						</div>
					</div>
					<div class="pw__box">
						<div class="pw__box-input">
							<input type="password" name="checkpw" id="pwCheck" required class="pw__input"
								placeholder=""> <label for="" class="pw__label">New
								Password Check</label>
						</div>
					</div>
				</div>
				<input type="button" class="pw__button reBtn" onclick='submitbtn()' value="Complete"> 
				<a href="<%=request.getContextPath() %>"><input type="button" class="pw__button" value="Login"></a>

			</form>

		</div>
	</div>
</body>
</html>