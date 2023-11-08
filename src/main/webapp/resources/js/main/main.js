function getInvestigation(idx) {
    $.ajax({
		url: "getInvestigation",
		type: "POST",
        data: {idx},
        dataType: "json",
		success: function(data) {
			str = ""
			
			str += "<p><span>";
			str += "사건 번호 " + data.idx + " - <span style=\"color: #FF9B9B;\" class=\"inverName\">" + data.investigationName + "</span>";
			str += "</span> &nbsp; 의뢰인 : " + data.codename + "</p>";
			
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
			};
			
			if (data.complete == 1) {
				console.log("비비활성화!!");
				$(".rename").prop("disabled", true);
				$(".complete").prop("disabled", true);
				$(".cancel").prop("disabled", true);
			};
			$('.investigationName').html(str);
		},
		error : function(xhr, status, error) {
			console.log(xhr, status, error);
		}
	});
}

			
function getList(){
	var investigationName = $('.inverName').text();
	const params = {investigationName:investigationName};
	$.ajax({
		type:"POST",
		url: "getList",
		data: params,
		dataType: "json",
		success: function(dto) {
			$('.prevName').text(dto.investigationName);
			console.log("didkdk");
		},
		error: function(xhr, status, error){
			console.log(xhr, status, error);
		}
	});
};


function updateInverstigation(idx){
	var investigationName = $('.newName').val();				
	const params = {idx:idx, investigationName:investigationName};
	$.ajax({
		type:"POST",
		url: "updateInverstigation",
		data: params,
		dataType: "json",
		success: function(rs) {
			if(rs == 1) {
				location.reload();
			}else {
				alert("변경 취소..");
			}
		},
		error: function(xhr, status, error){
			console.log(xhr, status, error);
		}
	});
};

function complete(idx){
	const params = {idx:idx};
	$.ajax({
		type:"POST",
		url: "complete",
		data: params,
		dataType: "json",
		success: function(dto) {
			$(".investigationList p").each(function() {
		        var dataValue = $(this).data("value");
		        if (dataValue === idx) {
		          $(this).css({
		          	    textDecoration :"line-through",
					    textDecorationColor: "#ddd",
					    textDecorationThickness: "2px",
					    color: "#9d9d9d"
		          });
		          	$(".rename").prop("disabled", true);
					$(".complete").prop("disabled", true);
					$(".cancel").prop("disabled", true);
		        }
	        });
	        location.reload();
		},
		error: function(xhr, status, error){
			console.log(xhr, status, error);
		}
	});
};


function cancel(idx){
	const params = {idx:idx};
	$.ajax({
		type:"POST",
		url: "cancel",
		data: params,
		dataType: "json",
		success: function(dto) {
			$(".investigationList p").each(function() {
		        var dataValue = $(this).data("value");
		        if (dataValue === idx) {
		          $(this).css('display', 'none');
		        }
	        });
	        alert("의뢰를 취소하셨습니다");
	        location.reload();
	        
		},
		error: function(xhr, status, error){
			console.log(xhr, status, error);
		}
	});
};

function confirmDelete(dataValueIdx) {
    if (confirm("의뢰를 취소하시겠습니까?")) {
        cancel(dataValueIdx);
    } else {
        console.log("의뢰 삭제 취소");
    }
};


$(document).ready(function() { 

	  var dataValueIdx = 0;
      $(document).on('click', '.investigation', function () {
        var dataValue = $(this).data('value');
        dataValueIdx = dataValue;
        $('.investigation').css('background-color', 'transparent');
        $(this).css('background-color','black');
        $(this).css('border-radius','10px');
        
        getInvestigation(dataValue);
     });
    
					console.log("1!!!");
	setTimeout(() => 
		$('.investigationList .caseProgress .cPBox').children("p").each(function(index) {
	        $(this).click(function(){
					console.log("3!!!");
	        	setTimeout(() => getList(),100);
					console.log("4!!!");
				$('.rename').click(function(){
					console.log("di!!!");
					$('.black_box').css('display', 'flex');
				})
	        });
	    }
	),100);
					console.log("2!!!");
	
    $('.changeBtn').click(function(){
		updateInverstigation(dataValueIdx);
	})
	$('.changeCancle').click(function(){
		$('.black_box').css('display', 'none');
	})
	
	$('.complete').click(function(){
		complete(dataValueIdx);
	});
	$('.cancel').click(function(){
		confirmDelete(dataValueIdx);
	});
	
});