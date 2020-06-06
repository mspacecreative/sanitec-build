<?php
$args = array(
	'post_type' => 'testimonials',
	'posts_per_page'=> -1,
);
	
$loop = new WP_Query( $args );
if ( $loop->have_posts() ) : ?>

<div class="et_pb_slider et_pb_bg_layout_light testimonialsSlider">
	<div class="et_pb_slides">
			
		<?php while ( $loop->have_posts() ) : $loop->the_post(); ?>
	
		<div class="et_pb_slide">
			<?php 
			$title = get_the_title();
			$content = apply_filters( 'the_content', get_the_content() );
			$company = get_field('company');
			if ( $title ) {
				echo '<h3>' . $title . '</h3>';
			}
			if ( $company ) {
				echo '<p>' . $company . '<p>';
			}
			if ( $content ) {
				echo $content;
			} ?>
		</div>
		
		<?php endwhile;
		
		else : ?>
		<p><?php esc_html_e( 'Sorry, there are no testimonials posted yet.' ); ?></p>

	</div>
</div>

<?php endif; wp_reset_query(); ?>
	