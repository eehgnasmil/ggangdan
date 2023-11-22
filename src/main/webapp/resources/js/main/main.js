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
            if (item.lcodename == codename) {
               $('.b_likedBtn' + item.idx).addClass('like_true');
               /*console.log(item.idx);*/
            }
         }
         
         likedCount();
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
			loadList((currentPage2 * 5) , itemsPerPage, dataValueIdx,selectVal,searchInput);
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
			loadList((currentPage2 * 5) , itemsPerPage, dataValueIdx,selectVal,searchInput);
			getInvestigationRate(dataValueIdx);

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

var urlParams = new URLSearchParams(window.location.search);
var currentPage2 = urlParams.get('page') - 1;

var selectVal = "";
var searchInput = "";
let total = "";
function boardList(idx, selectVal, searchInput) {
	// data 객체를 초기화
	  var data = {idx:idx};
	
	  if (selectVal != "") {
	    data.selectVal = selectVal;
	  }
	
	  if (searchInput != "") {
	    data.searchInput = searchInput;
	  }
	$.ajax({
		type: "POST",
		url: "boardList",
		data: data,
		dataType: "json",
		success: function(response) {
			total = response;
			loadList((currentPage2 * 5), itemsPerPage, idx, selectVal, searchInput);
		},
		error: function(xhr, status, error) {
			console.log(xhr, status, error);
		}
		
	});
}

let currentPage = 0;
let itemsPerPage = 5; // 한 페이지당 항목 수
var total2 = 0;

function loadList(page, itemsPerPage, idx, selectVal, searchInput) {
  $.ajax({
    type: "GET",
    url: "loadList",
    data: {
      page: page,
      itemsPerPage: itemsPerPage,
      idx:idx,
      selectVal:selectVal,
      searchInput:searchInput
    },
    dataType: "json",
    success: function(response) {
         let boList = "";
         for (dto of response) {
            if (dto.iidx == idx) {
               boList += '<div data-value="' + dto.idx + '" class="board_box">';
               boList += '<div class="pictureBox">';
               if (dto.ofile === null) {
                  boList += '<img src="' + contextPath + '/resources/imgs/notimg.jpg" alt="not">';
               } else {
                  boList += '<img src="' + contextPath + '/resources/imgs/' + dto.ofile + '" alt="pic">';
               }
               boList += '</div>';
               boList += '<div class="boardTextBox">';
               boList += '<div class="boardectBox">';
               boList += '<div class="ectBox">';
               boList += '<span class="b_inver">' + dto.department + ' /</span>';
               boList += '<span class="b_codename">' + dto.codename + ' /</span>';
               boList += '<span class="b_date">' + dto.regdate + '</span>';
               boList += '</div>';
               boList += '<div class="ectBox">';
               boList += '<span class="b_liked b_liked'+dto.idx+'">0</span>';
               boList += '<span data-idx=\"' + dto.idx + '\"  class="b_likedBtn b_likedBtn'+ dto.idx +'" onclick="liked(' + dto.idx + ')">좋아요</span>';
               if (codename == dto.icodename) {
                  boList += '<span class="b_recommend b_recommend' + dto.idx + '" onclick="recommend(' + dto.idx + ')">'
                  boList += '추천</span>'
               } else {
                  boList += '<span class="b_recommend disabled-span"'
                  if (dto.recommend == true) {
                     boList += 'style="background-color:#FFF89A; color:#272829;" >';
                  } else {
                     boList += '>'
                  }
                  boList += '추천</span>'
               }
               boList += '</div>';
               boList += '</div>';
               boList += '<div class="titleBox">';
               boList += '<span class="b_title">"' + dto.title + '"</span>';
               boList += '</div>';
               boList += '<div class="contentBox">';
               boList += '<span class="b_content">' + dto.content + '</span>';
               boList += '<span class="more">more</span>';
               boList += '<span class="close">close</span>';
               boList += '</div>';
               boList += '</div>';
               boList += '</div>';
               
            }

         }
         
          total2 = dto.length;
	      $('.board_list_box').html(boList);
          var Total = total;
	      $('#total_count').text(Total);
	      updatePagination(currentPage, Total);
	      for(item of response){
	         if (item.recommend == true) {
	               $('.b_recommend' + item.idx).addClass('recommend_true');
	            }
	      }
	      best(dataValueIdx);
	      likedCount();
      
    },
    error: function(xhr, status, error) {
      console.log(xhr, status, error);
    }
  });
}


function updatePagination(currentPage, totalPages) {
	const urlParams = new URL(location.href).searchParams;
	const param = urlParams.get('page');
	var page = Number(param);
	console.log("page : " + page );
	
	var data = {
		page:page,
		total:total
	};
	$.ajax({
		type: "POST",
		url: "paging",
		data: data,
		dataType: "json",
		success: function(rs) {
			console.log("rs : " + rs.currentPage)
			var current = rs.currentPage;
			var totalP = rs.totalCount;
			var end = rs.endPage;
			var next = rs.nextPage;
			var prev = rs.prevPage;
			var start = rs.startPage;
			var middle = rs.middlePage;
			let pagination = '';
			var startPage = 1;
					
			pagination += `<a href="&page=1" data-page="1" class="1 page_nation page_1_prev"><<</a>`;
			pagination += `<a href="&page=${prev}" data-page="${prev}" class="${prev} page_nation page_${prev}_prev pagePrev"><</a>`;
			
			for(let i=start; i<middle+1; i++) {
				pagination += `<a href="&page=${i}" data-page="${i}" class="${i} page_nation page_${i} pageNumber">${i}</a>`;
			}
			
		 	pagination += `<a href="&page=${next}" data-page="${next}" class="${next} page_nation page_${next}_next pageNext">></a>`;
		 	pagination += `<a href="&page=${end}" data-page="${end}" class="${end} page_nation page_${end}_next">>></a>`;
		 	
		 	$(document).ready(function(){
		 		console.log($(`.page_${current}`).attr('class'));
				$(`.page_${current}`).addClass('pagingAction');
				$('.pageNumber').not(`.page_${current}`).removeClass('pagingAction');
		 	})
			
			$('.pagination').html(pagination);
		},
		error: function(xhr, status, error) {
			console.log(xhr);
	        console.log(status);
	        console.log(error);
		}
		
	});	

    /*const fullPages = Math.floor(total / itemsPerPage); // 전체 페이지 수
    const remainingItems = total % itemsPerPage; // 남은 항목 수*/
}


function popularInvestigation() {
	$.ajax({
		type: "POST",
		url: "popularInvestigation",
		dataType: "json",
		success: function(data) {
			str = "";
			for (items of data) {
				str += "<a href=\"main?idx=" + items.iidx + "&page=1\">"
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
			if(complete) {
				$('.Investigaionwrite').prop('disabled',true);
			}
		},
	});
}

$(document).ready(function() {
	$(document).on('click', '.page_nation', function() {
		var firstClass = $(this).data('page');
		var urlParams = new URLSearchParams(window.location.search);
		var currentPage = urlParams.get('page'); 
		
		// 만약 "page" 파라미터가 이미 있다면 해당 파라미터 제거
		if (currentPage !== null) {
		    urlParams.delete('page');
		}
		// 새로운 "page" 파라미터 추가
		urlParams.set('page', firstClass);
		
		// 새로운 URL 생성
		var newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + urlParams.toString();
		
		// 새로운 URL로 이동
		window.location.href = newUrl;
	});

	
	if (dataValueIdx == 0) {
		$('.current_list').removeClass("hidden");
	}
	getComplete();
	popularInvestigation();
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
			overflow: 'auto',
		});
		$(this).siblings('.b_content').css({
			height: 'auto',
			overflow: 'auto',
			display: 'inline-block'
		});
		$(this).css({
			display: 'none'
		});
		$(this).siblings('.close').css({
			display: 'inline-block'
		});
	});
	$(document).on('click', '.close', function() {
		$(this).parent('.contentBox').css({
			height: '50px',
			overflow: 'hidden',
		});
		$(this).siblings('.b_content').css({
			height: '50px',
			overflow: 'hidden',
			display: '-webkit-box'
		});
		$(this).css({
			display: 'none'
		});
		$(this).siblings('.more').css({
			display: 'inline-block'
		});
	});
	$(document).on('click', '.searchBtn', function() {
		selectVal = $('.searchselect').val();
		searchInput = $('#searchInput').val();
		loadList((currentPage2 * 5) , itemsPerPage, dataValueIdx,selectVal,searchInput);
		
	 	setTimeout(function () {
			var boardLen = Number($('.board_box').length)-1;
			updatePagination(currentPage, boardLen);
      	}, 20);
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
	
	
	$(document).ready(function() {
		boardList(dataValueIdx,selectVal,searchInput);
		loadList((currentPage2 * 5), itemsPerPage, dataValueIdx);
		
		var urlParams = new URLSearchParams(window.location.search);
		var currentIdx = urlParams.get('idx'); 
		if(currentIdx != null) {
			$('.ranking').css('display','none');
		} else {
			$('.ranking').css('display','block');
		}
	});
	 // 페이지 번호 클릭 이벤트
	  $('.pagination').on('click', 'a', function(e) {
	    e.preventDefault();
	    
	    loadList((currentPage2 * 5) , itemsPerPage, dataValueIdx,selectVal,searchInput);
	});

});