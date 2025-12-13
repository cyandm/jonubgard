<?php

/**
 * Pagination - Show numbered pagination for catalog pages
 *
 * @package CyanTheme
 * @version 9.3.0
 */

if (!defined('ABSPATH')) {
	exit;
}

use Cyan\Theme\Helpers\Icon;

$total   = isset($total) ? $total : wc_get_loop_prop('total_pages');
$current = isset($current) ? $current : wc_get_loop_prop('current_page');
$base    = isset($base) ? $base : esc_url_raw(str_replace(999999999, '%#%', remove_query_arg('add-to-cart', get_pagenum_link(999999999, false))));
$format  = isset($format) ? $format : '';

if ($total <= 1) {
	return;
}
?>

<nav class="woocommerce-pagination flex justify-end max-sm:justify-center items-center gap-2 my-6 [&_a]:size-11 [&_span]:size-11" aria-label="<?php esc_attr_e('Product Pagination', 'woocommerce'); ?>">

	<!-- Previous Button -->
	<?php if ($current > 1) : ?>
		<a href="<?php echo esc_url(get_pagenum_link($current - 1)); ?>"
			class="pagination-btn bg-white hover:bg-cynOrange hover:text-cynWhite text-cynBlack p-2 rounded-2xl shadow-md transition-all duration-300 flex items-center justify-center min-w-[44px]">
			<i class="size-6 stroke-2">
				<?php Icon::print('Arrow-19'); ?>
			</i>
		</a>
	<?php else : ?>
		<span class="pagination-btn bg-white text-cynBlack/50 hover:text-cynWhite p-2 rounded-2xl shadow-md cursor-not-allowed flex items-center justify-center min-w-[44px]">
			<i class="size-6 stroke-2">
				<?php Icon::print('Arrow-19'); ?>
			</i>
		</span>
	<?php endif; ?>

	<!-- Page Numbers -->
	<?php
	// Smart pagination logic with dots
	$show_pages = 2; // Number of pages to show on each side of current
	$dots_shown_before = false;
	$dots_shown_after = false;

	for ($i = 1; $i <= $total; $i++) :
		// Always show first page, last page, and pages around current
		$show_this_page = (
			$i == 1 || // First page
			$i == $total || // Last page
			($i >= $current - $show_pages && $i <= $current + $show_pages) // Pages around current
		);

		if ($show_this_page) :
			// Reset dots flags when we show a page
			if ($i > $current) {
				$dots_shown_after = false;
			}
			if ($i < $current) {
				$dots_shown_before = false;
			}

			if ($i == $current) : ?>
				<span class="pagination-btn bg-cynOrange hover:bg-cynOrange/80 hover:text-cynWhite text-white p-2 rounded-2xl shadow-md font-semibold min-w-[44px] text-center pt-3">
					<?php echo $i; ?>
				</span>
			<?php else : ?>
				<a href="<?php echo esc_url(get_pagenum_link($i)); ?>"
					class="pagination-btn bg-white hover:bg-cynOrange hover:text-cynWhite text-cynBlack p-2 rounded-2xl shadow-md transition-all duration-300 font-medium min-w-[44px] text-center pt-3">
					<?php echo $i; ?>
				</a>
			<?php endif;
		else :
			// Show dots
			if ($i < $current && !$dots_shown_before) :
				$dots_shown_before = true; ?>
				<span class="pagination-dots text-cynBlack py-3 !w-6 text-center">...</span>
			<?php elseif ($i > $current && !$dots_shown_after) :
				$dots_shown_after = true; ?>
				<span class="pagination-dots text-cynBlack py-3 !w-6 text-center">...</span>
	<?php endif;
		endif;
	endfor;
	?>

	<!-- Next Button -->
	<?php if ($current < $total) : ?>
		<a href="<?php echo esc_url(get_pagenum_link($current + 1)); ?>"
			class="pagination-btn bg-white hover:bg-cynOrange hover:text-cynWhite text-cynBlack p-2 rounded-2xl shadow-md transition-all duration-300 flex items-center justify-center min-w-[44px]">
			<i class="size-6 stroke-2">
				<?php Icon::print('Arrow-27'); ?>
			</i>
		</a>
	<?php else : ?>
		<span class="pagination-btn bg-white text-cynBlack/50 p-2 rounded-2xl shadow-md cursor-not-allowed flex items-center justify-center min-w-[44px]">
			<i class="size-6 stroke-2">
				<?php Icon::print('Arrow-27'); ?>
			</i>
		</span>
	<?php endif; ?>

</nav>