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

$(document).ready(function() { 
      $(document).on('click', '.investigation', function () {
        var dataValue = $(this).data('value');
        $('.investigation').css('background-color', 'transparent');
        $(this).css('background-color','black');
        $(this).css('border-radius','10px');
        
        getInvestigation(dataValue);
    });
});