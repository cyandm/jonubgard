<?php

/**
 * The Template for displaying product archives
 *
 * @package CyanTheme
 * @version 8.6.0
 */

defined('ABSPATH') || exit;

use Cyan\Theme\Helpers\Templates;
use Cyan\Theme\Helpers\Icon;

get_header();
?>

<main class="container">

	<?php
	/**
	 * Hook: woocommerce_before_main_content.
	 */
	do_action('woocommerce_before_main_content');
	?>

	<!-- Breadcrumb Section -->
	<?php Templates::getPart('breadcrumb'); ?>

	<!-- Header Bar with Title, Search, and Sort -->
	<div class="flex items-center justify-between gap-6 mb-5 max-md:flex-col max-md:gap-3">

		<h1 class="text-3xl md:text-5xl font-extrabold text-cynBlack">
			<?php woocommerce_page_title(); ?>
		</h1>

		<div class="flex gap-2">
			<form role="search" method="get" class="woocommerce-product-search shadow-item rounded-xl overflow-hidden" action="<?php echo esc_url(home_url('/')); ?>">
				<div class="bg-white flex items-center">

					<input type="search"
						id="woocommerce-product-search-field"
						class="flex-1 px-3 pb-2 pt-2.5 border-0 focus:outline-none text-gray-600 placeholder-gray-400"
						placeholder="جستجو کن"
						value="<?php echo get_search_query(); ?>"
						name="s" />

					<input type="hidden" name="post_type" value="product" />

					<div class="p-2">
						<button type="submit" class="secondary-btn rounded-xl text-white flex items-center justify-center !px-2.5 !py-1.5">
							<i class="size-6">
								<?php Icon::print('Search,-Loupe'); ?>
							</i>
						</button>
					</div>

				</div>

			</form>

			<!-- Sort Section (Left side) -->
			<div class="relative bg-white rounded-xl shadow-item px-5 py-3 flex items-center gap-3 cursor-pointer hover:bg-gray-50 transition-colors">
				<span class="text-gray-700 font-medium whitespace-nowrap">مرتب سازی</span>
				<svg class="w-5 h-5 text-gray-600 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
					<path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"></path>
					<path d="M20 16l-4 4-4-4h8z"></path>
				</svg>
				<!-- Hidden WooCommerce ordering form -->
				<div class="absolute inset-0 opacity-0">
					<?php woocommerce_catalog_ordering(); ?>
				</div>
			</div>

		</div>

	</div>

	<style>
		/* Custom styling for search and sort bar */
		.woocommerce-ordering {
			width: 100%;
			height: 100%;
		}

		.woocommerce-ordering select {
			cursor: pointer !important;
			width: 100% !important;
			height: 100% !important;
		}
	</style>

	<?php
	if (woocommerce_product_loop()) :

		/**
		 * Hook: woocommerce_before_shop_loop.
		 */
		do_action('woocommerce_before_shop_loop');
	?>

		<!-- Products Grid -->
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
			<?php
			if (wc_get_loop_prop('total')) {
				while (have_posts()) {
					the_post();

					/**
					 * Hook: woocommerce_shop_loop.
					 */
					do_action('woocommerce_shop_loop');

					// Load custom product card template
					Templates::getCard('product');
				}
			}
			?>
		</div>

		<?php
		/**
		 * Hook: woocommerce_after_shop_loop.
		 *
		 * @hooked woocommerce_pagination - 10
		 */
		do_action('woocommerce_after_shop_loop');
		?>

	<?php
	else :
		/**
		 * Hook: woocommerce_no_products_found.
		 */
		do_action('woocommerce_no_products_found');
	endif;

	/**
	 * Hook: woocommerce_after_main_content.
	 */
	do_action('woocommerce_after_main_content');
	?>

</main>

<?php
get_footer();
