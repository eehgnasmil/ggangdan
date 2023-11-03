let selectDepartment = "";

window.onload = function() {
	$('.box-1').on('click', function() {
		var dataText = $(this).attr('data-text');
		selectDepartment = dataText;
		$('.container').css('grid-template-columns', '2.5fr 1fr 1fr');
		$('.box').css('filter', 'grayscale(100%) opacity(50%)');
		$('.box-1').css('filter', 'grayscale(0%) opacity(100%)');

		$('.box').removeClass('active');
		$(this).addClass('active');
	});

	$('.box-2').on('click', function() {
		var dataText = $(this).attr('data-text');
		selectDepartment = dataText;
		$('.container').css('grid-template-columns', '1fr 2.5fr 1fr');
		$('.box').css('filter', 'grayscale(100%) opacity(50%)');
		$('.box-2').css('filter', 'grayscale(0%) opacity(100%)');

		$('.box').removeClass('active');
		$(this).addClass('active');
	});

	$('.box-3').on('click', function() {
		var dataText = $(this).attr('data-text');
		selectDepartment = dataText;
		$('.container').css('grid-template-columns', '1fr 1fr 2.5fr');
		$('.box').css('filter', 'grayscale(100%) opacity(50%)');
		$('.box-3').css('filter', 'grayscale(0%) opacity(100%)');

		$('.box').removeClass('active');
		$(this).addClass('active');
	});
}
