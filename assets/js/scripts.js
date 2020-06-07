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
	
	// SMOOTH SCROLL
	// Select all links with hashes
	$('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top - 50
				}, 1000);
	        return false;
			}
	    }
	});
	
})(jQuery);