// 상희
function best(idx) {
	$.ajax({
		url: "getBest",
		type: "POST",
		data: { idx: idx },
		dataType: "json",
		success: function(data) {
		
			var data = data.board;
			let best = "";
			if (data.iidx == idx) {
				best += '<div data-value="' + data.idx + '" class="board_box"><div class="pictureBox">'
				if(data.sfile === null){
					best += '<img src="' + contextPath + '/resources/imgs/notimg.jpg" alt="not">'
				} else {
					best += '<img src="' + contextPath + '/resources/imgs/' + data.sfile + '" alt="pic">';
				}
					best += '</div>'
					best += '<div class="boardTextBox">';
					best += '<div class="boardectBox">';
					best += '<div class="ectBox">';
					best += '<span class="b_inver">' + data.department + ' /</span>';
					best += '<span class="b_codename">' + data.codename + ' /</span>';
					best += '<span class="b_date">' + data.regdate + '</span>';
					best += '</div>';
					best += '<div class="ectBox">';
					best += '<span class="b_liked b_liked'+data.idx+'">0</span>';
					best += '<span class="b_likedBtn" onclick="liked('+data.idx+')">좋아요</span>';
					if(codename == data.icodename){
						best += '<span class="b_recommend b_recommend'+data.idx+'" onclick="recommend('+data.idx+')">'
						if(data.recommend == true){
							best += '추천안함';	
						} else {
							best += '추천'
						}
						best += '</span>'
					}
					best += '</div>';
					best += '</div>';
					best += '<div class="titleBox">';
					best += '<span class="b_title">"' + data.title + '"</span>';
					best += '</div>';
					best += '<div class="contentBox">';
					best += '<span class="b_content">' + data.content + '</span>';
					best += '<span class="more">more</span>';
					best += '</div>';
					best += '</div>';
					best += '</div>';
			}
			$('.best_board').html(best);
			likedCount();
				
		},
		error: function(xhr, status, error) {
			console.log(xhr, status, error);
		}
	})
}

function likedCount() {
    $.ajax({
        type: "POST",
        url: "likedCount",
        dataType: "json",
        success: function(data) {
            if (data.length != 0) {
                for (var i = 0; i < data.length; i++) {
                    $('.b_liked' + data[i].bidx).html(data[i].count);
                }
            }
        },
        error: function(xhr, status, error) {
            console.log(xhr, status, error);
        }
    });
}


function liked(idx) {
	$.ajax({
		type: "POST",
		url: "liked",
		data: {idx:idx},
		dataType: "json",
		success: function(data) {
			$('.b_liked'+idx).html(data);
			console.log(dataValueIdx);
			best(dataValueIdx);
		},
		error: function(xhr, status, error) {
			console.log(xhr, status, error);
		}
	});
};

function recommend(idx){
 	$.ajax({
		type: "POST",
		url: "getRecommend",
		data: {idx:idx},
		dataType: "json",
		success: function(data) {	
			boardList(dataValueIdx);
			best(dataValueIdx);
			
		},
		error: function(xhr, status, error) {
			console.log(xhr, status, error);
		}
	});
}




//

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


// 영선

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
					if (dto[i].sfile === null) {
						boList += '<img src="' + contextPath + '/resources/imgs/notimg.jpg" alt="not">';
					} else {
						boList += '<img src="' + contextPath + '/resources/imgs/' + dto[i].sfile + '" alt="pic">';
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
					boList += '<span class="b_liked b_liked'+dto[i].idx+'">0</span>';
					boList += '<span class="b_likedBtn" onclick="liked('+dto[i].idx+')">좋아요</span>';
					if(codename == dto[i].icodename){
						boList += '<span class="b_recommend b_recommend'+dto[i].idx+'" onclick="recommend('+dto[i].idx+')">'
						if(dto[i].recommend == true){
							boList += '추천안함';	
						} else {
							boList += '추천'
						}
						boList += '</span>'
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

function reCommendBtn(idx, iidx) {
	const params = { idx: idx };
	
};


$(document).ready(function() {
	boardList(dataValueIdx);
	best(dataValueIdx);
	likedCount();
	
	if (dataValueIdx == 0) {
		$(".rename").prop("disabled", true);
		$(".complete").prop("disabled", true);
		$(".cancel").prop("disabled", true);

		$('.investigationbestboard').addClass('hidden');
		$('.investigationboard').addClass('hidden');
		$('.progress-region').addClass('hidden');
		$('.investigationinfo').addClass('hidden');
	} else {
		$('.investigationbestboard').removeClass('hidden');
		$('.investigationboard').removeClass('hidden');
		$('.progress-region').removeClass('hidden');
		$('.investigationinfo').removeClass('hidden');
	}


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
	});

	$(document).on('click', '.pictureBox img', function() {
		var src = $(this).attr('src');
		$('.img_viewbox').show();
		$('.image_view img').attr('src',src);
	});
	
	$('.close-icon').on('click',function() {
		$('.img_viewbox').hide();
	});

	$('.rename').click(function() {
		var investigationName = $('.inverName').text();
		$('.black_box').css('display', 'flex');
		$('.prevName').text(investigationName);
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