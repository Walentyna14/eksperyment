var main = function(){
	var NavY = $('nav').offset().top;
	var stickyNav = function(){
		var ScrollY = $(window).scrollTop();
		if (ScrollY >= NavY) { 
			$('nav').addClass('sticky');
		} else
		{
			$('nav').removeClass('sticky'); 
		}
	};
	$(window).scroll(function() {
		stickyNav();
	});
	
	$('.submenu').hide();
	
	$('.head-menu').click(function() {
		if($(this).siblings(".submenu").css('display')=='none')
		{
			$('.submenu').hide();
			$(this).siblings(".submenu").toggle();
		}else 
		{
			$('.submenu').hide();
		}
	});

	$(window).resize(function(){
		var a = $('.wrap').height();
		if(a>=50)
		{
			$('.wrap').css('top', '5px');
			$('.up').css('top', '9px');
		}
		else
		{
			$('.wrap').css('top', '17px');
			$('.up').css('top', '33px');
		}
	});

	$('#main').click(function() {
		$(".submenu").hide();
	});
	
	$('.button').click(function() {
		$('.recenzje').toggle();
		$('.opisy').toggle();
		$('.button').removeClass('black');
		$(this).addClass('black');
	});

}	

$(document).ready(main);