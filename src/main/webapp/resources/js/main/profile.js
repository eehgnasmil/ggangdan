/* var arr = []; */
var arr = ["깨갱..", "깽", "깡", "깨수깡", "깽스터"];

function getOne() {
	$.ajax({
		type: "POST",
		url: "getOne",
		dataType: "json",
		success: function(dto) {
			profileImage();
			$('.department').text(dto.department);
			$('.codename').text(dto.codename);
			for (let i = 0; i < arr.length; i++) {
				if (i == dto.grade) {
					$('.grade').text(arr[i]);
				}
			}

			$('.lv').text(dto.lv);
			$('.exp').css("width", ((dto.exp / (dto.lv * 100)).toFixed(2)) * 100 + "%");
		},
		error: function(xhr, status, error) {
			console.log(xhr, status, error);
		}
	});
};

function getProfileImage() {
	$.ajax({
		url: "getProfileImage",
		type: "POST",
		dataType: "json",
		success: function(data) {
			str = "";
			for (items of data.profileImage) {
				var imagePath = contextPath + '/resources/imgs/uploadImg/' + items.imgpath;
				str += '<img class="profileimgs" src="' + imagePath + '" alt="profile" data-value="' + items.idx + '">';
			}
			$('.profilImglist').html(str);
		},
		error: function(xhr, status, error) {
			console.log(xhr, status, error);
		}
	})
}

function uploadFile() {
	var fileInput = document.getElementById("fileInput");
	var allowedFileTypes = ["image/jpeg", "image/png", "image/gif"]; // 허용할 이미지 파일 유형 목록

	if (fileInput.files.length > 0) {
		if (allowedFileTypes.includes(fileInput.type)) {
			var file = fileInput.files[0];
			var formData = new FormData();
			formData.append("file", file);

			$.ajax({
				type: "POST",
				url: "uploadFile", // 컨트롤러의 URL
				data: formData,
				contentType: false,
				processData: false,
				success: function(response) {
					if (response == 1) {
						$('#fileInput').val("");
					}
				},
			});
			$('.fileName').text("원하는 프로필 사진을 첨부해주세요.");
			getProfileImage();
		} else {
			alert("이미지파일을 선택해주세요");
			$('.fileName').text("원하는 프로필 사진을 첨부해주세요.");
		}
	} else {
		alert("파일을 선택하세요.");
	}
}

function useImg(image) {
	$.ajax({
		type: "POST",
		url: "useImg", // 컨트롤러의 URL
		data: { image },
		success: function(dto) {
			profileImage();
		},
	});
}

function profileImage() {
	$.ajax({
		type: "POST",
		url: "profileImage", // 컨트롤러의 URL
		success: function(dto) {
			var imagePath = contextPath + '/resources/imgs/uploadImg/' + dto.imgpath;
			$('.profileimg').attr("src", imagePath);
		},
	});
}
$(document).ready(function() {
	getOne();

	$('.profileimg').on('click', function() {
		getProfileImage();
		if ($('.selectimg').hasClass('hidden')) {
			$('.selectimg').removeClass('hidden');
		} else {
			$('.selectimg').addClass('hidden');
		}
	});

	$('.imageUpload').on('click', function() {
		uploadFile();
		$('.selectimg').addClass('hidden');
	});

	$('#fileInput').on("change", function() {
		if (this.files.length > 0) {
			$('.fileName').text("선택한 이미지 : " + this.files[0].name);
		} else {
			$('.fileName').text("원하는 프로필 사진을 첨부해주세요.");
		}
	});

	$(document).on('click', '.profileimgs', function() {
		var image = this.getAttribute("src");
		useImg(image);
		$('.selectimg').addClass('hidden');
	});
});