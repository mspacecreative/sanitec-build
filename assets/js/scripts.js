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
				'visibility' : 'hidden',
			});
			$('.hamburger').css({
				'opacity' : '0',
				'visibility' : 'hidden',
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
			'visibility' : 'visible',
		});
		$('.hamburger').css({
			'opacity' : '1',
			'visibility' : 'visible',
		});
	});
	
	// SMOOTH SCROLL
	// Select all links with hashes
	$('.mobile-nav a[href*=\\#]').click(function() {
		$('body, .hamburger, #page-container').toggleClass('is-active');
	});
	
	// EXIT MODAL ON ESCAPE
	$(document).keydown(function(event) { 
		if (event.keyCode == 27) { 
			$('.bio').fadeOut();
			
			$('#main-header').css({
				'opacity' : '1',
				'visibility' : 'visible',
			});
		}
	});
	
})(jQuery);