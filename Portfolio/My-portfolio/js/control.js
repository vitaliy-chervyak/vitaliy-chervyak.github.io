$(function(){




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

});



