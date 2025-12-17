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
					'menu_class' => 'gap-8 text-xl font-semibold flex text-cynBlack [&_li]:pt-1 [&>li:hover]:text-cynOrange [&>li>ul>li:hover]:text-cynOrange [&_li]:duration-200 [&_li]:transition-all [&_li_a_svg]:transition-all [&_li_a_svg]:duration-200 [&_li:hover_svg]:rotate-180 [&_li:hover_svg]:text-cynOrange',
					'depth' => '3',
					'theme_location' => 'header-menu',
					'container' => 'ul'
				]); ?>
			</div>
		</div>

		<div class="flex justify-end gap-3">

			<a href="<?= get_site_url() . '/?s=&search-type=all' ?>" class="hidden lg:block primary-btn rounded-2xl bg-cynWhite !py-3 !px-5 border border-cynBlack/20">
				<span class="size-6">
					<?php Icon::print('Search,-Loupe'); ?>
				</span>
			</a>

			<div class="relative flex justify-center group" id="login-btn">
				<a href="<?= !is_user_logged_in() ? get_site_url() . '/login' : '#' ?>" class="flex items-center justify-center gap-1 min-w-28 md:min-w-36 text-cynBlack bg-white py-2 ps-4 pe-3 md:ps-6 md:pe-3 rounded-2xl text-xs md:text-xl font-medium max-md:!py-2 shadow-item border border-transparent group-hover:border-cynOrange transition-all duration-300">

					<span class="pt-0.5 whitespace-nowrap"><?= is_user_logged_in() ? esc_html(wp_get_current_user()->display_name) : __('ورود / ثبت نام', 'jonubgard'); ?></span>

					<i class="size-6 text-cynBlack group-hover:text-cynOrange group-hover:rotate-180 transition-all duration-300">
						<?php
						if (is_user_logged_in()) {
							Icon::print('Arrow-28');
						}
						?>
					</i>
				</a>

				<?php if (is_user_logged_in()) : ?>
					<div class="absolute top-12 md:top-14 left-0 right-0 w-full p-4 bg-cynWhite text-cynBlack rounded-3xl shadow-item pointer-events-none group-hover:pointer-events-auto invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300">

						<?php wp_nav_menu([
							'menu_id' => 'login-menu',
							'menu_class' => 'flex flex-col gap-2 text-xs font-semibold text-cynBlack [&_li]:first:border-t-0 [&_li]:border-t [&_li]:border-[#F4F4F6] [&_li]:py-2 [&>li>a:hover]:text-cynOrange [&_li_a]:duration-200 [&_li_a]:transition-all',
							'depth' => '3',
							'theme_location' => 'login-menu',
							'container' => 'ul'
						]); ?>

					</div>
				<?php endif; ?>

			</div>


		</div>

	</div>

</section>