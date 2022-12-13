$('.menu').bind('click',function(){
	$('.quadro').toggleClass('ativar-animacao')
	$('.quadro').removeClass('sem-animacao')
	$(this).children('div').removeClass('sem-animacao')
}) 