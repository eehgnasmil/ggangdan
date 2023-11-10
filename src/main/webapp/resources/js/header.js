function getInvestigation(idx) {
	$.ajax({
		url: "getInvestigation",
		type: "POST",
		data: { idx },
		dataType: "json",
		success: function(data) {
			$('p[data-value="' + idx + '"]').css('background-color', 'black');
			$('p[data-value="' + idx + '"]').css('border-radius', '10px');
		
			str = ""
			
			str += "<p><span>";
			str += "사건 번호 " + data.idx + " - <span style=\"color: #FF9B9B;\" class=\"inverName\">" + data.investigationName + "</span>";
			str += "</span> &nbsp; 의뢰인 : " + data.codename + "</p>";
			
			if (codename != data.codename) {
				$(".rename").prop("disabled", true);
				$(".complete").prop("disabled", true);
				$(".cancel").prop("disabled", true);
			} else {
				$(".rename").prop("disabled", false);
				$(".complete").prop("disabled", false);
				$(".cancel").prop("disabled", false);
			};

			if (data.complete == 1) {
				$(".rename").prop("disabled", true);
				$(".complete").prop("disabled", true);
				$(".cancel").prop("disabled", true);
			};
			$('.investigationName').html(str);
			best(data.idx);
		},
		error: function(xhr, status, error) {
			console.log(xhr, status, error);
		}
	});
}

function getinvestigationslist() {
	$.ajax({
		url: "getinvestigationslist",
		type: "POST",
		dataType: "json",
		success: function(data) {
			let str = "";
			let str2 = "";
			for (items of data) {
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
		data: { investigationName },
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
	getInvestigation(dataValueIdx);

	$(document).on('click', '.investigation', function() {
		var dataValue = $(this).data('value');
		dataValueIdx = dataValue;
		location.href = "main?idx=" + dataValueIdx;
	});
	
	var clickCount = 0;

	$('.menu-icon').on('click', function() {
		clickCount++;
		var $categoryMenu = $('.categorymenu');

		if (clickCount % 2 === 1) {
			$categoryMenu.animate({ left: '-300px' }, 300);
		} else {
			$categoryMenu.animate({ left: '0' }, 300, function() {
			});
		}
	});

	$('.sign_btn').on('click', function() {
		clickCount++;
		if (clickCount % 2 === 1) {
			$(this).trigger("click");
		} else {
		}
	});

	$('.addcategory').on('click', function() {
		$('.newcategoryalert').addClass('show');
		$(".newcategoryname input").val(null);
	});

	$('.newbtn').on('click', function() {
		var investigationName = $("input[name='investigationName']").val();
		if (investigationName.trim() == "") {
			alert("수사 파일 명을 입력해주세요!");
		} else {
			insertinvestigation(investigationName);
		}

	});

	$('.cancelbtn').on('click', function() {
		$('.newcategoryalert').removeClass('show');
	});

	$('.caseComplete').css('display', 'none');
	$('.caseProgress').css('display', 'flex');
	$('.cPText').click(function() {
		$('.caseComplete').css('display', 'none');
		$('.caseProgress').css('display', 'flex');
		$(".addcategory").css('display', 'inline-block');
	});
	$('.cCText').click(function() {
		$('.caseProgress').css('display', 'none');
		$('.caseComplete').css('display', 'flex');

		$(".rename").prop("disabled", true);
		$(".complete").prop("disabled", true);
		$(".cancel").prop("disabled", true);

		if ($('.cCBox').children().length === 0) {
			$('.cCBox').append('<div class="CCNothing">완료된 수사가 없습니다</div>');
		}
		$(".addcategory").css('display', 'none');
	});


})
