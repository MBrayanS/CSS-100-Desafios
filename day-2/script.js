$('.menu').bind('click',function(){
	$('.frame').toggleClass('active-animation')
	$('.frame').removeClass('no-animation')
	$(this).children('div').removeClass('no-animation')
}) 