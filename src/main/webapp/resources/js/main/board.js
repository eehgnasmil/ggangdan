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

function backbtn(){
	 window.location.href = document.referrer
}

function checkFileType(input) {
    var file = input.files[0]; // 첫 번째 파일을 가져옵니다.
    if (file) {
        var allowedFileTypes = ["image/jpeg", "image/png", "image/gif"]; // 허용할 이미지 파일 유형 목록

        if (allowedFileTypes.includes(file.type)) {
           
        } else {
            // 허용되지 않는 파일 유형일 경우
            alert("이미지 파일 이외의 파일은 업로드할 수 없습니다.");
            input.value = ""; // 파일 입력 필드 초기화
        }
    }
}