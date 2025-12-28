<?php
/*
Template Name: 404
Description: A template for displaying a 404 error page.
*/
?>

<?php get_header(); ?>

<main class="container mx-auto px-4">
	<section class="mt-24 text-center">


		<div class="flex justify-center">
			<img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/image/404.svg" class="w-full max-w-xs sm:max-w-md">
		</div>


		<p class="text-xl sm:text-2xl font-semibold text-cynBlack mt-6">
			<?php _e('متاسفانه صفحه مورد نظر یافت نشد', 'jonubgard'); ?>
		</p>


		<div class="mt-8 flex justify-center">
			<a href="/"
				class="w-full max-w-xs sm:w-auto py-3 px-10 bg-cynOrange rounded-[20px] text-white text-center block">
				<?php _e('بازگشت به صفحه اصلی', 'jonubgard'); ?>
			</a>
		</div>

	</section>
</main>

<?php get_footer(); ?>