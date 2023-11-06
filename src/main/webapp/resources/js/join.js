let selectDepartment = "";


function insert(){
	var id = $('#id').val();
	var pw = $('#pw').val();
	var pwCheck = $('#pwCheck').val();
	var codename = $('#codename').val();
	var department = selectDepartment;
	 
	 if (id === "") {
	    alert("아이디를 입력하세요.");
	} else if (pw === "") {
	    alert("비밀번호를 입력하세요.");
	} else if (pwCheck === "") {
	    alert("비밀번호를 입력하세요.");
	} else if (codename === "") {
	    alert("닉네임을 입력하세요.");
	} else if (department === "") {
	    alert("역할을 골라주세요");
	}else {
		const params = {id:id, pw:pw, codename:codename,department:department};
		$.ajax({
			type:"POST",
			url: "join",
			data: params,
			dataType: "json",
			success: function(rs) {
				if(rs == 1) {
					console.log("회원가입 성공"+ rs);
					location.href = "./";
				}else {
					alert("이미 있는 회원입니다");
				}
			},
			error: function(xhr, status, error){
				console.log(xhr, status, error);
			}
		});
	}
};
		
		
window.onload = function() {
	$('.box-1').on('click', function() {
		var dataText = $(this).attr('data-text');
		selectDepartment = dataText;
		$('.container').css('grid-template-columns', '2.5fr 1fr 1fr');
		$('.box').css('filter', 'grayscale(100%) opacity(50%)');
		$('.box-1').css('filter', 'grayscale(0%) opacity(100%)');

		$('.box').removeClass('active');
		$(this).addClass('active');
	});

	$('.box-2').on('click', function() {
		var dataText = $(this).attr('data-text');
		selectDepartment = dataText;
		$('.container').css('grid-template-columns', '1fr 2.5fr 1fr');
		$('.box').css('filter', 'grayscale(100%) opacity(50%)');
		$('.box-2').css('filter', 'grayscale(0%) opacity(100%)');

		$('.box').removeClass('active');
		$(this).addClass('active');
	});

	$('.box-3').on('click', function() {
		var dataText = $(this).attr('data-text');
		selectDepartment = dataText;
		$('.container').css('grid-template-columns', '1fr 1fr 2.5fr');
		$('.box').css('filter', 'grayscale(100%) opacity(50%)');
		$('.box-3').css('filter', 'grayscale(0%) opacity(100%)');

		$('.box').removeClass('active');
		$(this).addClass('active');
	});
	
	
		$('.join_btn').click(function(){
			insert();
		})
		
		$("#pwCheck").on("keyup", function() {
			var pw = $('#pw').val();
	      	if($(this).val() !== pw){
	      		$(this).next('.join__label').css('color', 'red');
	      		$(this).parents('.join__box').css('border-color', 'red');
	      	}else {
	      		$(this).next('.join__label').css('color', 'white');
	      		$(this).parents('.join__box').css('border-color', 'white');
	      	}
	   	});
		   	
}
