<?php 

// TESTIMONIALS LOOP
function testimonialsLoop() {
	ob_start();
		get_template_part('includes/loops/loop-testimonials');
	return ob_get_clean();
}
add_shortcode( 'testimonials', 'testimonialsLoop' );

// HIDDEN SERVICES BLURBS
function serviceBlurb($atts, $content = null) {
    return '<span class="serviceBlurb">' . do_shortcode($content) . '</span>';
}
add_shortcode('service_blurb', 'serviceBlurb'); 