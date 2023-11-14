let totalMessageCount = 0;
let readMessageCount = 0;
function getmessage(boardidx) {
	$.ajax({
		url: "getmessage",
		type: "POST",
		data: { boardidx },
		dataType: "json",
		success: function(data) {
			let str = "";
			totalMessageCount = data.message.length;

			for (items of data.message) {

				var dateString = items.senddate;
				var parts = dateString.split(' ');

				var date = parts[0];
				var time = parts[1];

				if (items.codename != codename) {
					str += '<div class="usermessage">' +
						'<div class="messageinfo">' +
						'<span style="color: #FF9B9B;">' + items.department + '</span> <span>' + items.codename + '</span>' +
						'</div>' +
						'<div class="messagecontainer">' +
						'<div class="messageText">' + items.content + '</div>' +
						'<div class="writedate">' +
						'<span>' + date + '<br>' + time + '</span>' +
						'</div>' +
						'</div>' +
						'</div>';
				} else {
					str += '<div class="mymessage">' +
						'<div class="messageinfo" style="margin-left:70px;">' +
						'<span style="color: #FF9B9B;">' + items.department + '</span> <span>' + items.codename + '</span>' +
						'</div>' +
						'<div class="messagecontainer">' +
						'<div class="writedate" style="text-align: start; margin-left: 5px;">' +
						'<span>' + date + '<br>' + time + '</span>' +
						'</div>' +
						'<div class="messageText" style="background-color:#F5F0BB; color:black;">' + items.content + '</div>' +
						'</div>' +
						'</div>';
				}
				$('.message').html(str);
			}
		},
		error: function(xhr, status, error) {
			console.log(xhr, status, error);
		}
	})
}

function submitmessage(message, boardidx) {
	$.ajax({
		url: "insertmessage",
		type: "POST",
		data: { message, boardidx },
		dataType: "json",
		success: function(data) {
			$('.inputText').val(null);
			getmessage(boardidx);
		},
		error: function(xhr, status, error) {
			console.log(xhr, status, error);
		}
	})
}

$(document).ready(function() {
	getmessage(dataValueIdx);

	var container = $('.message'); // 스크롤할 컨테이너 요소 선택

/*	var interval = setInterval(function() {
		getmessage(dataValueIdx);
		container.scrollTop(container[0].scrollHeight);
		if(!$('.chattmain').hasClass('hidden')) {
			readMessageCount = totalMessageCount
		}
		
		if(totalMessageCount > readMessageCount ) {
			$('.MessageCount').removeClass('hidden');
			$('.notreadcount').text((totalMessageCount - readMessageCount));
		} else {
			$('.MessageCount').addClass('hidden');
		}
	}, 1000);*/

	$('.messagesubmit').on('click', function() {
		var message = $('.inputText').val();

		submitmessage(message, dataValueIdx);
	});

	$('.chatcontroller').on('click', function() {
		if ($('.chattmain').hasClass('hidden')) {
			$('.chattmain').removeClass('hidden');
			$('.MessageCount').addClass('hidden');
			container.scrollTop(container[0].scrollHeight);
			readMessageCount = totalMessageCount
		} else {
			$('.chattmain').addClass('hidden');
			readMessageCount = totalMessageCount
		}

	});
});