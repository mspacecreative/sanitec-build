(function($) {
	
	// BIO LIGHTBOX
	$('.readBio').click(function(e) {
		e.preventDefault();
		$(this).parent().siblings('.bio').fadeIn();
		$(this).siblings('.closeButton').fadeIn();
		$('body').toggleClass('open');
		
		if ( $('body').hasClass('open') ) {
			$('#main-header').css({
				'opacity' : '0',
			});
		}
	});
	
	$('.servicesContainer').find('.serviceTitle h3').click(function() {
		$(this).next().slideToggle();
		$('.serviceBlurb').not( $(this).next() ).slideUp();
		$(this).toggleClass('open');
		$('.serviceTitle h3').not( $(this) ).removeClass('open');
	});
	
	$('.bio > .et_pb_text_inner').prepend('<span class="closeButton"><img src="../../wp-content/themes/sanitec/assets/img/icons/close-white.png"></span>');
	
	$('.closeButton').click(function() {
		$(this).parent().parent().fadeOut();
		$('body').removeClass('open');
		$('#main-header').css({
			'opacity' : '1',
		});
	});
	
	/*
	var serviceBlurb = $('.serviceBlurb'),
		serviceInnerHeight = $('.serviceBlurb > .et_pb_text_inner').height(),
		blurbTotalHeight = serviceBlurb.height(serviceInnerHeight),
		containerHeight = $('#services').height(),
		changeInHeight = blurbTotalHeight + containerHeight;
		if ( $('body').hasClass('open') ) {
			$('#services').css({
				'height' : '567px',
			});
		}*/
	
})(jQuery);