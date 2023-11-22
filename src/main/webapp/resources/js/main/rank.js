var arr = ["깨갱..", "깽", "깡", "깨수깡", "깽스터"];

function allranklist() {
	$.ajax({
		type: "POST",
		url: "getallranklist",
		dataType: "json",
		success: function(data) {
			let str="";
			console.log(data)
			for(let i=0; i<5; i++){
				str += "<ul>";
				str += "<li>" + data[i].ranking + "</li>";
				str += "<li>" + data[i].lv + "</li>";
				str += "<li>" + data[i].codename + "</li>";
				str += "<li>" + data[i].department + "</li>";
				str += "<li>";
				str += arr[data[i].grade];
				str += "</li>";
				str += "</ul>";
			}
			$('.allranklist').html(str);
			
			let str2="";
			for(item of data){
				if(item.codename == codename){
					str2 += "<ul>";
					str2 += "<li>" + item.ranking + "</li>";
					str2 += "<li>" + item.lv + "</li>";
					str2 += "<li>" + item.codename + "</li>";
					str2 += "<li>" + item.department + "</li>";
					str2 += "<li>" + arr[item.grade]; + "</li>";
					str2 += "</ul>";
					break;
				}
			}
			$('.myrank').html(str2);
			
		},
	});
}
function departmentranklist(id) {
	$.ajax({
		type: "POST",
		url: "getdepartmentranklist",
		dataType: "json",
		data:{id:id},
		success: function(data) {
			let str="";
			for(let i=0; i<5; i++){
				str += "<ul>";
				str += "<li>" + data[i].ranking + "</li>";
				str += "<li>" + data[i].lv + "</li>";
				str += "<li>" + data[i].codename + "</li>";
				str += "<li>" + data[i].department + "</li>";
				str += "<li>";
				str += arr[data[i].grade];
				str += "</li>";
				str += "</ul>";
			}
			$('.departmentranklist').html(str);
			
			let str2="";
			for(item of data){
				if(item.codename == codename){
					str2 += "<ul>";
					str2 += "<li>" + item.ranking + "</li>";
					str2 += "<li>" + item.lv + "</li>";
					str2 += "<li>" + item.codename + "</li>";
					str2 += "<li>" + item.department + "</li>";
					str2 += "<li>" + arr[item.grade]; + "</li>";
					str2 += "</ul>";
					break;
				}
			}
			$('.myrank').html(str2);
		},
	});
}

function toggle(showId, hideId) {
	var showElement = document.getElementById(showId);
	var hideElement = document.getElementById(hideId);
	if(showId == 'allranklist'){
		allranklist(codename);
		
	} else {
		departmentranklist(codename)
	}
	if (showElement && hideElement) {
		showElement.style.display = 'block';
		showElement.style.background = '#333';
		hideElement.style.display = 'none';
	}
}



$(document).ready(function(){
	toggle('allranklist', 'departmentranklist')
})