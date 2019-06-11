$(function(){

	// Скрипт на видио


	$('#hide-play, #close-modal').hide();

	$('#button-play').click(function(){
		$('#hide-play, #close-modal').show();
	});

	$(' #close-modal ').click(function(){
		$('#close-modal, #hide-play').hide();
	});

		
		$(function(){
    $('#close-modal').click(function(){      
        $('iframe').attr('src', $('iframe').attr('src'));
    	});
	});

    // Скрипт на слайдер
	 
  	$('.slide').slick({
  	
  		dots: true,
  		autoplaySpeed: 3000
  	
  	});


  	// Скрипт на плавный переход по сайту

	'use strict';

	$('a[href^="#"]').click(function(){
		let target = $(this).attr('href');
		$('html, body').animate(
			{
				scrollTop:$(target).offset().top
			},
			800	
		);
	});

		
	// Скрипт на фикс меню

	var offset = $('.menu').offset();

	 $(window).scroll( function(){

		 if( $(window).scrollTop() > offset.top ) {
			 $('.menu').addClass('fixedNav');
		 } else {
			 $('.menu').removeClass('fixedNav');
		}

	 });


});



