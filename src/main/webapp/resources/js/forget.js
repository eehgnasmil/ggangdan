	$(function(){
		function update(){
			var id = $('#id').val();
			var pw = $('#pw').val();
			var pwCheck = $('#pwCheck').val();
			 
			 if (id === "") {
			    alert("아이디를 입력하세요.");
			} else if (pw === "") {
			    alert("비밀번호를 입력하세요.");
			} else if (pwCheck === "") {
			    alert("비밀번호 확인을 입력하세요.");
			} else {
				const params = {id:id, pw:pw};
				$.ajax({
					type:"POST",
					url: "forget",
					data: params,
					dataType: "json",
					success: function(rs) {
						if(rs == 1) {
							alert("비밀번호가 변경되었습니다");
							location.href = "./";
						}else {
							alert("비밀번호 변경이 안됬습니다.");
						}
					},
					error: function(xhr, status, error){
						console.log(xhr, status, error);
					}
				});
			}
		};
		
		$('.reBtn').click(function(){
			update();
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
	})