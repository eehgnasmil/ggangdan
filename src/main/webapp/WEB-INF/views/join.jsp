<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GGANGDAN</title>
    <link rel="stylesheet" href="<%=request.getContextPath() %>/resources/css/join.css">
    <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    
    <script src="<%=request.getContextPath() %>/resources/js/join.js"></script>
   
</head>
<style>
    body {
        background-image: url('<%=request.getContextPath() %>/resources/imgs/background.png');
        background-size: cover;
        background-repeat: no-repeat;
    }
</style>
<body>
    <div class="join_container">
    <div class="select-department">
    <div class="container">
        <div class="box box-1" style="--img: url(https://i.postimg.cc/sgBkfbtx/img-1.jpg);" data-text="지휘부"></div>
        <div class="box box-2" style="--img: url(https://i.postimg.cc/3RZ6bhDS/img-2.jpg);" data-text="셀럽부"></div>
        <div class="box box-3" style="--img: url(https://i.postimg.cc/DZhHg0m4/img-3.jpg);" data-text="첩보부"></div>
    </div>    
</div>
    <div class="join_contents">
        <div class="join">
            <form action="join" name="join__form" class="join__form"
                method="POST">
                <h1 class="join__title">JOIN</h1>
                <div class="join__content">
                    <div class="join__box">
                        <div class="join__box-input">
                            <input type="ID" name="id" required id="id" class="join__input"
                                placeholder=""> <label for="" class="join__label">ID</label>
                        </div>
                    </div>
                </div>
                <div class="join__content">
                    <div class="join__box">
                        <div class="join__box-input">
                            <input type="password" name="pw" id="pw" value="" required
                                class="join__input" placeholder=""> <label for=""
                                class="join__label">PW</label>
                        </div>
                    </div>
                </div>
                <div class="join__content">
                    <div class="join__box">
                        <div class="join__box-input">
                            <input type="password" name="checkpw" id="pwCheck" value="" required
                                class="join__input" placeholder=""> <label for=""
                                class="join__label">PW CHECK</label>
                        </div>
                    </div>
                </div>
                <div class="join__content">
                    <div class="join__box">
                        <div class="join__box-input">
                            <input type="text" name="codename" id="codename" value="" required
                                class="join__input" placeholder=""> <label for=""
                                class="join__label">CODE NAME</label>
                        </div>
                    </div>
                </div>
                <input type="button" class="join__button" onclick="join();"
                    value="Join"> <a href="login"><input type="button"
                    class="join__button" value="Login"></a>
            </form>
        </div>      
  
        
    </div>
    </div>
</body>
</html>