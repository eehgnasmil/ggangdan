// 상희
function best(idx) {
	$.ajax({
		url: "getBest",
		type: "POST",
		data: { idx: idx },
		dataType: "json",
		success: function(response) {
			var data = response.board[0];
			let best = "";
			if (data != null) {
				$('.best_board').removeClass('hidden');
				if (data.iidx == idx) {
					best += '<div data-value="' + data.idx + '" class="board_box"><div class="pictureBox">'
					if (data.sfile === null) {
						best += '<img src="' + contextPath + '/resources/imgs/logo.png" alt="not">'
					} else {
						best += '<img src="' + contextPath + '/resources/imgs/boardImg/' + data.sfile + '" alt="pic">';
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
					best += '<span class="b_liked b_liked' + data.idx + '">0</span>';
					best += '<span class="b_likedBtn b_likedBtn' + data.idx + '" onclick="liked(' + data.idx + ')">좋아요</span>';
					if (codename == data.icodename) {
						best += '<span class="b_recommend b_recommend' + data.idx + '" onclick="recommend(' + data.idx + ')">'
						best += '추천</span>'
					} else {
						best += '<span class="b_recommend disabled-span"'
						if (data.recommend == true) {
							best += 'style="background-color:#FFF89A; color:#272829;" >';
						} else {
							best += '>'
						}
						best += '추천</span>'
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
			} else {
				$('.best_board').addClass('hidden');
			}
			$('.best_board').html(best);
			if (data.recommend == true) {
				$('.b_recommend' + data.idx).addClass('recommend_true');
			}

			for (item of response.board) {
				if (data.idx == item.bidx) {
					if (item.lcodename == codename) {
						$('.b_likedBtn' + data.idx).addClass('like_true');
						break;
					}
				}

			}
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
		data: { idx: idx },
		dataType: "json",
		success: function(data) {
			best(dataValueIdx);
			boardList(dataValueIdx)
		},
		error: function(xhr, status, error) {
			console.log(xhr, status, error);
		}
	});
};

function recommend(idx) {
	$.ajax({
		type: "POST",
		url: "getRecommend",
		data: { idx: idx },
		dataType: "json",
		success: function(data) {
			boardList(dataValueIdx);
			best(dataValueIdx);
			getInvestigationRate(dataValueIdx);

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
						boList += '<img src="' + contextPath + '/resources/imgs/logo.png" alt="not">';
					} else {
						boList += '<img src="' + contextPath + '/resources/imgs/boardImg/' + dto[i].sfile + '" alt="pic">';
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
					boList += '<span class="b_liked b_liked' + dto[i].idx + '">0</span>';
					boList += '<span class="b_likedBtn b_likedBtn' + dto[i].idx + '" onclick="liked(' + dto[i].idx + ')">좋아요</span>';
					if (codename == dto[i].icodename) {
						boList += '<span class="b_recommend b_recommend' + dto[i].idx + '" onclick="recommend(' + dto[i].idx + ')">'
						boList += '추천</span>'
					} else {
						boList += '<span class="b_recommend disabled-span"'
						if (dto[i].recommend == true) {
							boList += 'style="background-color:#FFF89A; color:#272829;" >';
						} else {
							boList += '>'
						}
						boList += '추천</span>'
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
			for (let i = 0; i < dto.length; i++) {
				if (dto[i].recommend == true) {
					$('.b_recommend' + dto[i].idx).addClass('recommend_true');
				}
				if (dto[i].lcodename == codename) {
					$('.b_likedBtn' + dto[i].idx).addClass('like_true');
				}
			}
			likedCount();

		},
		error: function(xhr, status, error) {
			console.log(xhr, status, error);
		}
	});
}

function popularInvestigation() {
	$.ajax({
		type: "POST",
		url: "popularInvestigation",
		dataType: "json",
		success: function(data) {
			str = "";
			for (items of data) {
				str += "<a href=\"main?idx=" + items.iidx + "\">"
				str += "<ul>";
				str += "<li>" + items.iidx + "</li>";
				str += "<li>" + items.investigationName + "</li>";
				str += "<li>" + items.codename + "</li>";
				str += "<li>" + items.count + "</li>";
				str += "</ul>";
				str += "</a>";
			}
			$('.popular_list').html(str);
		},
	});
}

function getInvestigationRate(boardidx) {
	$.ajax({
		type: "POST",
		data: { iidx: boardidx },
		url: "getInvestigationRate",
		dataType: "json",
		success: function(data) {
			let rate = (data * 100).toFixed(2);
			$('.progress-bar .progress').width(rate + "%");
			$('.investigationrate').text(rate);
		},
	});
}

function getComplete() {
	$.ajax({
		type: "POST",
		url: "getComplete",
		dataType: "json",
		success: function(data) {
			const complete = data.includes(dataValueIdx);
			console.log(complete);
			if(complete) {
				$('.Investigaionwrite').prop('disabled',true);
			}
		},
	});
}

$(document).ready(function() {
	if (dataValueIdx == 0) {
		$('.current_list').removeClass("hidden");
	}
	getComplete();
	popularInvestigation();
	boardList(dataValueIdx);
	best(dataValueIdx);
	getInvestigationRate(dataValueIdx);
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
		$('.image_view img').attr('src', src);
	});

	$('.close-icon').on('click', function() {
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

	$('.list_toggle').click(function() {
		if ($('.current_list').hasClass("hidden")) {
			$('.current_list').removeClass("hidden");
			$('.list_toggle').html("<i class=\"fas fa-chevron-down\"></i>");
		} else {
			$('.current_list').addClass("hidden");
			$('.list_toggle').html("<i class=\"fas fa-chevron-up\"></i>");;
		}
	});

});