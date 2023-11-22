   $(function(){
      function update(){
         var id = $('#id').val();
         var pw = $('#pw').val();
         var pwCheck = $('#pwCheck').val();
          
          if (id === "") {
             Swal.fire('<span class="alerttext">비밀번호 재설정 실패</span>','<span class="alerttext">아이디를 입력해주세요.</span>','error');
             event.preventDefault();
         } else if (pw === "") {
            Swal.fire('<span class="alerttext">비밀번호 재설정 실패</span>','<span class="alerttext">비밀번호를 입력해주세요.</span>','error');      
            event.preventDefault();    
         } else if (pwCheck === "") {
            Swal.fire('<span class="alerttext">비밀번호 재설정 실패</span>','<span class="alerttext">비밀번호를 입력해주세요.</span>','error');      
            event.preventDefault();       
         } else {
         	if(pw === pwCheck){
	            const params = {id:id, pw:pw};
	            $.ajax({
	               type:"POST",
	               url: "forget",
	               data: params,
	               dataType: "json",
	               success: function(rs) {
	                  if(rs == 1) {
	                     Swal.fire({
	                          title: '<span class=\"alerttext\">비밀번호 재설정 완료</span>',
	                          html: '<span class=\"alerttext\">로그인 화면으로 돌아갑니다.</span>',
	                          icon: 'success',
	                          confirmButtonText: '예',
	                         }).then((result) => {
	                          if (result.isConfirmed) {
	                              window.location.href = './';
	                          }
	                      });
	                  }else {
	                     Swal.fire('<span class="alerttext">비밀번호 재설정 실패</span>','<span class="alerttext">입력값을 다시 한번 확인해주세요</span>','error');
	                     event.preventDefault();
	                  }
	               },
	               error: function(xhr, status, error){
	                  console.log(xhr, status, error);
	               }
	            });
	        } else {
				alert("비밀번호를 확인해주세요");
			}
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