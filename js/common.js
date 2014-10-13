head.ready(function() {

	$('.fancybox').fancybox();

	var fullpage_el = $('#fullpage');
	if (fullpage_el.length) {
		$('#fullpage').fullpage({
			onLeave: function(index, nextIndex, direction){
				//after leaving section 1
				if(index == '1' && direction =='down'){
					setTimeout(function(){
						$('.parallax').addClass('is-scroll-down');
					}, 250);
				};
				if(index == '2' && direction =='up'){
					setTimeout(function(){
						$('.parallax').removeClass('is-scroll-down');
					}, 350);
				};
			}
		});
	};

	// popup
	$('.js-popup-open').on('click', function(event) {
		event.preventDefault();
		var popup  = $('#'+ $(this).attr('href'));
		var popupContent = popup.find('.js-popup-content');
		var popupClose   = popup.find('.js-popup-close');

		popup.fadeIn(200);
		setTimeout( function(){
			popupContent.addClass('is-visible');
		}, 200);
	});

	$('.js-popup-close').on('click', function(event) {
		event.preventDefault();
		var popupContent = $(this).parents('.js-popup-content')
		var popup = $(this).parents('.js-popup');
		popupContent.removeClass('is-visible');
		setTimeout(function(){
			popup.fadeOut(200);
		}, 200);
	});

	$('.js-popup').on('click', function(event) {
		event.stopPropagation();
	});


	// gallery sort
	$('.gallery__sort').on('click', function(event) {
		event.preventDefault();
		$('.gallery__sort-more').slideToggle();
	});

});