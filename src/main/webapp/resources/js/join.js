let selectDepartment = "";


function insert() {
   var id = $('#id').val();
   var pw = $('#pw').val();
   var pwCheck = $('#pwCheck').val();
   var codename = $('#codename').val();
   var department = selectDepartment;

   if (id === "") {
      Swal.fire('<span class="alerttext">회원가입 실패</span>','<span class="alerttext">아이디를 입력하세요.</span>','error');
      event.preventDefault();
   } else if (pw === "") {
      Swal.fire('<span class="alerttext">회원가입 실패</span>','<span class="alerttext">비밀번호를 입력하세요.</span>','error');
      event.preventDefault();
   } else if (pwCheck === "") {
      Swal.fire('<span class="alerttext">회원가입 실패<span>','<span class="alerttext">비밀번호를 입력하세요.</span>','error');
      event.preventDefault();
   } else if (codename === "") {
      Swal.fire('<span class="alerttext">회원가입 실패</span>','<span class="alerttext">닉네임을 입력하세요.</span>','error');
      event.preventDefault();
   } else if (department === "") {
      Swal.fire('<span class="alerttext">회원가입 실패</span>','<span class="alerttext">부서를 선택해주세요</span>','error');
      event.preventDefault();
   } else {
      const params = { id: id, pw: pw, codename: codename, department: department };
      $.ajax({
         type: "POST",
         url: "join",
         data: params,
         dataType: "json",
         success: function(rs) {
            if (rs == 1) {
               location.href = "./";
            } else {
               Swal.fire('<span class="alerttext">회원가입 실패</span>','<span class="alerttext">이미 존재하는 아이디입니다</span>','error');
               event.preventDefault();
            }
         },
         error: function(xhr, status, error) {
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

      $('.departmentText').text("진행중인 수사의 방향성 결정");
      $('.departmentText').addClass('fade');

      setTimeout(function() {
         $('.departmentText').removeClass('fade');
      }, 400);
   });

   $('.box-2').on('click', function() {
      var dataText = $(this).attr('data-text');
      selectDepartment = dataText;
      $('.container').css('grid-template-columns', '1fr 2.5fr 1fr');
      $('.box').css('filter', 'grayscale(100%) opacity(50%)');
      $('.box-2').css('filter', 'grayscale(0%) opacity(100%)');

      $('.box').removeClass('active');
      $(this).addClass('active');

      $('.departmentText').text("범인의 SNS 및 인터넷을 통해 정보를 수집");
      $('.departmentText').addClass('fade');

      setTimeout(function() {
         $('.departmentText').removeClass('fade');
      }, 400);
   });

   $('.box-3').on('click', function() {
      var dataText = $(this).attr('data-text');
      selectDepartment = dataText;
      $('.container').css('grid-template-columns', '1fr 1fr 2.5fr');
      $('.box').css('filter', 'grayscale(100%) opacity(50%)');
      $('.box-3').css('filter', 'grayscale(0%) opacity(100%)');

      $('.box').removeClass('active');
      $(this).addClass('active');

      $('.departmentText').text("현장에서 활동하며 정보를 수집");
      $('.departmentText').addClass('fade');

      setTimeout(function() {
         $('.departmentText').removeClass('fade');
      }, 400);

   });


   $('.join_btn').click(function() {
      insert();
   })

   $("#pwCheck").on("keyup", function() {
      var pw = $('#pw').val();
      if ($(this).val() !== pw) {
         $(this).next('.join__label').css('color', 'red');
         $(this).parents('.join__box').css('border-color', 'red');
      } else {
         $(this).next('.join__label').css('color', 'white');
         $(this).parents('.join__box').css('border-color', 'white');
      }
   });

}