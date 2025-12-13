<?php

/**
 * Header
 * @package CyanThemeSetup
 */

use Cyan\Theme\Helpers\Icon;
?>

<section class="container">
	<div class="flex justify-between items-center max-lg:[&>div]:flex-1">

		<div class="mobile-menu flex lg:hidden gap-2">
			<div class="bg-cynWhite p-2.5 rounded-2xl" modal-opener data-modal-name="menu-modal">
				<span class="size-6 [&_svg]:scale-x-[-1] [&_svg]:transform stroke-2">
					<?php Icon::print('menu-burger-square-6') ?>
				</span>
			</div>

			<a href="<?= get_site_url() . '/?s=&search-type=all' ?>" class="lg:hidden block rounded-2xl bg-cynWhite p-2.5">
				<span class="size-6">
					<?php Icon::print('Search,-Loupe'); ?>
				</span>
			</a>
		</div>

		<div class="flex gap-10 items-center justify-center">

			<div class="logo">
				<?php the_custom_logo(); ?>
			</div>

			<div class="desktop-menu hidden lg:flex">
				<?php wp_nav_menu([
					'menu_id' => 'main-menu',
					'menu_class' => 'gap-8 text-xl font-semibold flex text-cynBlack [&_li]:pt-1 [&>li:hover]:text-cynOrange [&>li>ul>li:hover]:text-cynOrange [&_li]:duration-200 [&_li]:transition-all',
					'depth' => '3',
					'theme_location' => 'header-menu',
					'container' => 'ul'
				]); ?>
			</div>
		</div>

		<div class="flex justify-end gap-3">

			<a href="<?= get_site_url() . '/?s=&search-type=all' ?>" class="hidden lg:block primary-btn rounded-2xl bg-cynWhite !py-3 !px-5 border border-[#2A2A2A33]">
				<span class="size-6">
					<?php Icon::print('Search,-Loupe'); ?>
				</span>
			</a>

			<button class="primary-btn max-md:!text-xs max-md:!pt-4 max-md:!pb-3.5">
				<?php _e('ورود/ثبت نام', 'jonubgard'); ?>
			</button>
		</div>

	</div>
</section>