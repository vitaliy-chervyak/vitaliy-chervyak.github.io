
	// Скрипт на плавный переход по сайту

$(function(){

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



// Скрипт на Фикс меню


 var offset = $('.nav').offset();

	 $(window).scroll( function(){

		 if( $(window).scrollTop() > offset.top ) {
			 $('.nav').addClass('fixedNav');
		 } else {
			 $('.nav').removeClass('fixedNav');
		}

	 });


	 // Скрипт на слайдер

	  $('#slide').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]
    });

	   // появление еще одного блока галереи при нажатии кнопки VIEW ALL

	$('#about-button').click(function(){
		let content = '<div class="about-row-left flex-nowrap flex-main flex-aitem-center "><div class="about-text flex-main flex-column flex-aitem-end left-about"><h3>JULY 2015<div class="about-text-bottom"></h3><h3>Our Humble Beginnings</h3><div class="about-text-bottom"><p>Prion iaculis purus consequat sem <br>cure digni ssim. Donec porttitora enturm suscipit aenean rhoncus posuere odio in tincidunt. Proin iaculis consequat sem cure digni ssim. Donec porttitora entum suscipit.</p></div></div><div class="about-img"><img src="img/Imageabout.jpg" alt="Лето-2010"></div></div>';
		   $('#about-content').append(content);
		   $(this).remove();

	});

});