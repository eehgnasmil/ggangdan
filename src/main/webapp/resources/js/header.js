function getinvestigationslist() {
	$.ajax({
		url: "getinvestigationslist",
		type: "POST",
        dataType: "json",
		success: function(data) {
            let str = "";
            let str2 = "";
/*	            for(items of data) {
	                str += "<p data-value=\"" + items.idx + "\" class=\"investigation idx_" + items.idx + "\">" + items.investigationName + "</p>";
	            }*/
			for(items of data) {
				if (items.complete == 0) {
					str += "<p data-value=\"" + items.idx + "\" class=\"investigation idx_" + items.idx + "\">" + items.investigationName + "</p>";
				} else if (items.complete == 1) {
					str2 += "<p data-value=\"" + items.idx + "\" class=\"investigation idx_" + items.idx + "\">" + items.investigationName + "</p>";
				}
			}
			
            $('.cPBox').html(str);
            $('.cCBox').html(str2);
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
        $(".newcategoryname input").val(null);
    });

    $('.newbtn').on('click',function() {
        var investigationName = $("input[name='investigationName']").val();
        if(investigationName.trim() == "" ) {
            alert("수사 파일 명을 입력해주세요!");
        } else {
            insertinvestigation(investigationName);
        }
        
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
    
    	$('.caseComplete').css('display','none');
    	$('.caseProgress').css('display','flex');
    $('.cPText').click(function(){
    	$('.caseComplete').css('display','none');
    	$('.caseProgress').css('display','flex');
    	$(".addcategory").css('display','inline-block');
    });
    $('.cCText').click(function(){
    	$('.caseProgress').css('display','none');
    	$('.caseComplete').css('display','flex');
    	
    	$(".rename").prop("disabled", true);
        $(".complete").prop("disabled", true);
        $(".cancel").prop("disabled", true);
        
        if($('.cCBox').children().length === 0) {
        	$('.cCBox').append('<div class="CCNothing">완료된 수사가 없습니다</div>');
        }
        $(".addcategory").css('display','none');
    });


	$(document).on('click', '.investigation', function () {
        var dataValue = $(this).data('value');
        $('.investigation').css('background-color', 'transparent');
        $(this).css('background-color','black');
        $(this).css('border-radius','10px');
        
        getInvestigation(dataValue);
    });
})
