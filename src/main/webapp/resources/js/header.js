function getInvestigation(idx) {
    $.ajax({
		url: "getInvestigation",
		type: "POST",
        data: {idx},
        dataType: "json",
		success: function(data) {
			str = ""
			
			str += "<p><span>";
			str += "사건 번호 " + data.idx + " - <span style=\"color: #FF9B9B;\">" + data.investigationName + "</span>";
			str += "</span> &nbsp; 의뢰인 : " + data.codename + "</p>";
			 
			$('.investigationName').html(str);
			
			var put = '<a href="write?idx='+data.idx+'"><button class="writebtn">글쓰기</button></a>';
			$('.write').html(put);
			if(codename != data.codename) {
				console.log("비활성화!!");
				$(".rename").prop("disabled", true);
				$(".complete").prop("disabled", true);
				$(".cancel").prop("disabled", true);
			} else {
				console.log("활성화!!");
				$(".rename").prop("disabled", false);
				$(".complete").prop("disabled", false);
				$(".cancel").prop("disabled", false);
			}
		},
		error: function(xhr, status, error) {
			console.log(xhr, status, error);
		}
	})
}



function getinvestigationslist() {
	$.ajax({
		url: "getinvestigationslist",
		type: "POST",
        dataType: "json",
		success: function(data) {
            let str = "";
            for(items of data) {
                str += "<p data-value=\"" + items.idx + "\" class=\"investigation\">" + items.investigationName + "</p>";
            }
			
            $('.investigationList').html(str);
		},
		error: function(xhr, status, error) {
			console.log(xhr, status, error);
		}
	})
}


function insertinvestigation(investigationName) {
    $.ajax({
		url: "insertinvestigation",
		type: "POST",
        data: {investigationName},
        dataType: "json",
		success: function(data) {
            alert("새로운 수사파일을 만들었습니다.");
            $('.newcategoryalert').removeClass('show');

            getinvestigationslist();
		},
		error: function(xhr, status, error) {
            alert("동일한 수사 파일이 있습니다.");
			console.log(xhr, status, error);
		}
	})
}

$(document).ready(function() {
    getinvestigationslist();
 	var clickCount = 0;

      $('.menu-icon').on('click', function() {
        clickCount++;
        var $categoryMenu = $('.categorymenu');

        if (clickCount % 2 === 1) {
            $categoryMenu.removeClass('hidden');
            $categoryMenu.animate({ left: '0' }, 300);
        } else {
            $categoryMenu.animate({ left: '-300px' }, 300, function() {
                $categoryMenu.addClass('hidden');
            });
        }
        
        
    });

    $('.sign_btn').on('click',function() {
    	clickCount++;
    	if (clickCount % 2 === 1) {
        	console.log("한번클릭!");
    		$(this).trigger("click");
        } else {
        	console.log("두번클릭!");
        }
    });
    
    $('.addcategory').on('click',function() {
        $('.newcategoryalert').addClass('show');
    });

    $('.newbtn').on('click',function() {
        var investigationName = $("input[name='investigationName']").val();
        if(investigationName.trim() == "" ) {
            alert("수사 파일 명을 입력해주세요!");
        } else {
            insertinvestigation(investigationName);
        }
        
    });

    $('.cancelbtn').on('click',function() {
        $('.newcategoryalert').removeClass('show');
    });
    
    $(document).on('click', '.investigation', function () {
        var dataValue = $(this).data('value');
        $('.investigation').css('background-color', 'transparent');
        $(this).css('background-color','black');
        $(this).css('border-radius','10px');
        
        getInvestigation(dataValue);
    });
})
