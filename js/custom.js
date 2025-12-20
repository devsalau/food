(function($) {
	"use strict";

	/*
	|----------------------------------------------------------------------------
	| FOR PRELOADER
	|----------------------------------------------------------------------------
	*/
	$(window).load(function () {
	    $('.preloader').fadeOut('slow');
	});
	/*
	|----------------------------------------------------------------------------
	| FOR STICKY MENU
	|----------------------------------------------------------------------------
	*/
	$('.navbar-nav>li>a').on('click', function(){
	    $('.navbar-collapse').collapse('hide');
	});

    // add class in navbar
    $(window).on('scroll',function() {
        if ($(this).scrollTop() > 10){  
            $('.navbar').addClass("color-set");
        }
        else{
            $('.navbar').removeClass("color-set");
        }
    });
	
	/*
	|----------------------------------------------------------------------------
	| FOR WOW ANIMATION
	|----------------------------------------------------------------------------
	*/
	new WOW().init();
	
	/*
	|----------------------------------------------------------------------------
	| FOR Recipes SLIDER
	|----------------------------------------------------------------------------
	*/
	$('#screens-carousel').owlCarousel({
		items:4,
		loop:true,
		margin:30,
		autoplay:true,
		autoplayTimeout:3000,
		autoplayHoverPause:true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
			},
			480:{
				items:2,
			},
			600:{
				items:3,
			},
			1000:{
				items:4,
			}
		}
	})
	
	/*
	|----------------------------------------------------------------------------
	| FOR NEWSLETTER SUBSCRIBE
	|----------------------------------------------------------------------------
	*/
	$('#mc-form').ajaxChimp({
        url: 'https://xyz.us15.list-manage.com/subscribe/post?u=a26d8d38db8b11ffd3352f889&amp;id=d60b8b0444'
            /* Replace Your AjaxChimp Subscription Link */
    });
	
	/*
	|----------------------------------------------------------------------------
	| FOR TESTIMONIAL SLIDER
	|----------------------------------------------------------------------------
	*/
	$('#testimonial-slider').owlCarousel({
		items:3,
		loop:true,
		margin:30,
		dots:false,
		nav:true,
		autoplay:true,
		autoplayTimeout:3000,
		autoplayHoverPause:true,
		responsiveClass:true,
		responsive:{
			0: {
				items: 1,
			},
			600: {
				items: 2,
			},
			1000: {
				items: 3,
			}
		}
	})
	
	/*
	|----------------------------------------------------------------------------
	| FOR Recipes LIGHTBOX
	|----------------------------------------------------------------------------
	*/
    $('#screens-carousel a').nivoLightbox({
        effect: 'fadeScale'
	});
	
	
	
	

})(window.jQuery);