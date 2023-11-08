function getList() {
	var investigationName = $('.inverName').text();
	const params = { investigationName: investigationName };
	$.ajax({
		type: "POST",
		url: "getList",
		data: params,
		dataType: "json",
		success: function(dto) {
			$('.prevName').text(dto.investigationName);
			console.log("didkdk");
		},
		error: function(xhr, status, error) {
			console.log(xhr, status, error);
		}
	});
};


function updateInverstigation(idx) {
	var investigationName = $('.newName').val();
	const params = { idx: idx, investigationName: investigationName };
	$.ajax({
		type: "POST",
		url: "updateInverstigation",
		data: params,
		dataType: "json",
		success: function(rs) {
			if (rs == 1) {
				location.reload();
			} else {
				alert("변경 취소..");
			}
		},
		error: function(xhr, status, error) {
			console.log(xhr, status, error);
		}
	});
};

function complete(idx) {
	const params = { idx: idx };
	$.ajax({
		type: "POST",
		url: "complete",
		data: params,
		dataType: "json",
		success: function(dto) {
			$(".investigationList p").each(function() {
				var dataValue = $(this).data("value");
				if (dataValue === idx) {
					$(this).css({
						textDecoration: "line-through",
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
		error: function(xhr, status, error) {
			console.log(xhr, status, error);
		}
	});
};


function cancel(idx) {
	const params = { idx: idx };
	$.ajax({
		type: "POST",
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
		error: function(xhr, status, error) {
			console.log(xhr, status, error);
		}
	});
};

function confirmDelete(dataValueIdx) {
	if (confirm("의뢰를 취소하시겠습니까?")) {
		cancel(dataValueIdx);
	} else {

	}
};


$(document).ready(function() {

	setTimeout(() =>
		$('.investigationList .caseProgress .cPBox').children("p").each(function(index) {
			$(this).click(function() {
				setTimeout(() => getList(), 100);
				$('.rename').click(function() {
					$('.black_box').css('display', 'flex');
				})
			});
		}
		), 100);

	$('.changeBtn').click(function() {
		updateInverstigation(dataValueIdx);
	})
	$('.changeCancle').click(function() {
		$('.black_box').css('display', 'none');
	})

	$('.complete').click(function() {
		complete(dataValueIdx);
	});
	$('.cancel').click(function() {
		confirmDelete(dataValueIdx);
	});
});