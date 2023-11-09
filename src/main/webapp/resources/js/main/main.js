function best(idx) {
	$.ajax({
		url: "getBest",
		type: "POST",
		data: { idx: idx },
		dataType: "json",
		success: function(data) {
			let best = "";
			var data = data.board;
			best = ''
		},
		error: function(xhr, status, error) {
			console.log(xhr, status, error);
		}
	})
}


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

function boardList(idx) {
	$.ajax({
		type: "POST",
		url: "boardList",
		dataType: "json",
		success: function(dto) {
			let boList = "";
			for (let i = 0; i < dto.length; i++) {
				if (dto[i].iidx == idx) {
					boList += '<div data-value="' + dto[i].idx + '" class="board_box">';
					boList += '<div class="pictureBox">';
					if (dto[i].ofile === null) {
						boList += '<img src="' + contextPath + '/resources/imgs/notimg.jpg" alt="not">';
					} else {
						boList += '<img src="' + contextPath + '/resources/imgs/' + dto[i].ofile + '" alt="pic">';
					}
					boList += '</div>';
					boList += '<div class="boardTextBox">';
					boList += '<div class="boardectBox">';
					boList += '<div class="ectBox">';
					boList += '<span class="b_inver">' + dto[i].department + ' /</span>';
					boList += '<span class="b_codename">' + dto[i].codename + ' /</span>';
					boList += '<span class="b_date">' + dto[i].regdate + '</span>';
					boList += '</div>';
					boList += '<div class="ectBox">';
					boList += '<span class="b_liked">' + dto[i].liked + '</span>';
					boList += '<span class="b_likedBtn">좋아요</span>';
					console.log(dto[i].recommend);
					if (dto[i].recommend == false) {
						boList += '<span class="b_recommend">추천</span>';
					} else if (dto[i].recommend == true) {
						boList += '<span class="b_recommend">추천받음</span>';
					}
					boList += '</div>';
					boList += '</div>';
					boList += '<div class="titleBox">';
					boList += '<span class="b_title">"' + dto[i].title + '"</span>';
					boList += '</div>';
					boList += '<div class="contentBox">';
					boList += '<span class="b_content">' + dto[i].content + '</span>';
					boList += '<span class="more">more</span>';
					boList += '</div>';
					boList += '</div>';
					boList += '</div>';
				}
			}

			$('.board_list_box').html(boList);
		},
		error: function(xhr, status, error) {
			console.log(xhr, status, error);
		}
	});
}


function likeBtn(idx, iidx) {
	const params = { idx: id };
	$.ajax({
		type: "POST",
		url: "likeBtn",
		data: params,
		dataType: "json",
		success: function(rs) {
			var bo_Value = $('.border_box').data('value');

			bo_Value.children('.b_liked').css('color', 'red');
		},
			error: function(xhr, status, error ){
			console.log(xhr, status, error);
		}
	});
};

function reCommendBtn(idx, iidx) {
	const params = { idx: idx };
	$.ajax({
		type: "POST",
		url: "reCommendBtn",
		data: params,
		dataType: "json",
		success: function(rs) {

		},
		error: function(xhr, status, error) {
			console.log(xhr, status, error);
		}
	});
};


$(document).ready(function() {
	boardList(dataValueIdx);

	if (dataValueIdx == 0) {
		$(".rename").prop("disabled", true);
		$(".complete").prop("disabled", true);
		$(".cancel").prop("disabled", true);
	};

	$(document).on('click','.b_likedBtn',function() {
		var this_1 = $(this).parentsUntil('.board_list_box'); /* ectBox */
		var this_2 = $(this_1).parentsUntil('.board_list_box'); /* boradTextBox */
		var this_3 = $(this_2).parentsUntil('.board_list_box'); /* border_box */
		var boardValue = $(this_3).parentsUntil('.board_list_box').data('value');
		console.log("vale : " + boardValue);
		likeBtn(boardValue, dataValueIdx);
	});
	
	$(document).on('click', '.b_recommend', function() {
	console.log("ddd");
		var this_1 = $(this).parentsUntil('.board_list_box'); /* ectBox */
		var this_2 = $(this_1).parentsUntil('.board_list_box'); /* boradTextBox */
		var this_3 = $(this_2).parentsUntil('.board_list_box'); /* border_box */
		var boardValue = $(this_3).parentsUntil('.board_list_box').data('value');
		console.log("vale : " + boardValue);
		reCommendBtn(boardValue, dataValueIdx);
	});

	$(document).on('click', '.more', function() {
		$(this).parent('.contentBox').css({
			height: 'auto',
			overflow: 'auto'
		});
		$(this).siblings('.b_content').css({
			height: 'auto',
			overflow: 'auto',
			display: 'inline-block'
		});
		$(this).css('display', 'none');
	});

	$('.rename').click(function() {
		$('.black_box').css('display', 'flex');
	});

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