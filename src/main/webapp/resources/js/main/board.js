function readURL(input) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();
		reader.onload = function(e) {
			document.getElementById('preview').src = e.target.result;
		};
		reader.readAsDataURL(input.files[0]);
	} else {
		document.getElementById('preview').src = "";
	}
}

function backbtn() {
	window.location.href = document.referrer
}

function checkFileType(input) {
	var file = input.files[0]; // 첫 번째 파일을 가져옵니다.
	if (file) {
		var allowedFileTypes = ["image/jpeg", "image/png", "image/gif"]; // 허용할 이미지 파일 유형 목록

		if (allowedFileTypes.includes(file.type)) {

		} else {
			// 허용되지 않는 파일 유형일 경우
			Swal.fire('파일 업로드 실패', '이미지 파일을 선택해주세요.', 'error');
			input.value = ""; // 파일 입력 필드 초기화
		}
	}
}

function writeCheck() {
	const form = document.getElementById('myForm');
	const titleValue = form.querySelector('[name="title"]').value;
	const contentValue = form.querySelector('[name="content"]').value;
	
	 if (titleValue.trim() === '' && contentValue.trim() === '') {
        Swal.fire('전송 실패', '제목과 내용을 입력해주세요.', 'error');
        event.preventDefault();
    } else if (titleValue.trim() === '') { 
    	Swal.fire('전송 실패', '제목을 입력해주세요.', 'error');
       event.preventDefault();
    } else if (contentValue.trim() === '') { 
    	Swal.fire('전송 실패', '내용을 입력해주세요.', 'error');
        event.preventDefault();
    } 
}