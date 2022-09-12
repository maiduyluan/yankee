$(function() {

	//WOW init
	new WOW().init();

	setInterval(function(){
		$('.content-slide .row2')
	}, 3000)
	// ------------------------------------------------------WOW-------------------------------//

	$('.res-dropdown').slideUp() //ĐÓNG HẾT TẤT CẢ CÁC THẺ KHI RELOAD

	$('.res-nav-item i').on('click', function(event) {		//BẮT SỰ KIỆN CHO NÚT MŨI TÊN
		event.preventDefault();

		var temp = $(this).attr('v') 		//ĐẶT BIẾN TẠM LƯU VỊ TRÍ HIỆN TẠI ĐANG CLICK

		$('.res-nav-item').each(function(i){ 	//CHẠY VÒNG LẶP PHẦN TỬ CHA ĐỂ BẮT VỊ TRÍ DIV HIỆN TẠI
			if(temp == i) {				//SO SÁNH VỚI VỊ TRÍ HIỆN TẠI
				$(this).next('.res-dropdown').slideToggle()  //BẰNG NHAU THÌ SHOW RA DIV ẨN
			}														// STT BẮT ĐẦU TỪ 0
		})

		$(this).toggleClass('changeicon')

	});

	// -------------------------------------------DROP DOWN------------------------------------- //

	$('.res-nav-btn').on('click',  function(event) {
		event.preventDefault();
		$(this).toggleClass('changeicon')
		$('.menu-right').toggleClass('showup')
	});

	$('.res-cancel-btn').on('click', function(event) {
		event.preventDefault();
		$('.menu-right').removeClass('showup')
	});

	//-------------------------------------------HIỂN THỊ MENU RESPONSIVE ----------------------//


	$('.slidding').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		infinite: true,
		prevArrow: $('.prev-btn'),
		nextArrow: $('.next-btn')
	})






	$('.team8').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		responsive: [
		{
			breakpoint:770,
			settings: {
				slidesToShow:2,
				slidesToScroll:2,
				infinite:true
			}
		},

		{
			breakpoint:420,
			settings: {
				slidesToShow:1,
				slidesToScroll:1,
				infinite:true
			}
		}

		]
	})


	// -----------------------------------------SLICK-------------------------------------------//
	
	$(window).scroll(function(event) {
		var l = $('body').scrollTop()
			
			if( l >= 100) {
				$('.header').addClass('lock')
			} else {
				$('.header').removeClass('lock')
			}
	});


	// ---------------------------------------------NAVBAR LOCK -----------------------------------//

	$('.number').counterUp({
		time: 1500
	})


	$('.numb-process').counterUp({
		time: 3000
	})

	// --------------------------------------------------------------------CounterUP----------------------------------------------------------------//

	$('.all-works-btn').click(function(event) {
		$('.all-line').addClass('active')
		$('.asd').addClass('action')
	});

	$('.app-btn').click(function(event) {
		$('.all-line').removeClass('active')
		$('.col6-2').removeClass('action')
		$('.app-line').addClass('active')
	});

	$('.design-btn').click(function(event) {
		$('.all-line').removeClass('active')
		$('.design-line').addClass('active')
	});

	$('.game-btn').click(function(event) {
		$('.all-line').addClass('active')
		$('.asd').addClass('action')
	});

	$('.web-btn').click(function(event) {
		$('.all-line').removeClass('active')
		$('.web-line').addClass('active')
	});

	//-------------------------------------------------------Filter Portfolio-----------------------------------------------------------------//

});
