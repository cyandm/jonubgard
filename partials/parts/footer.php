<?php

use Cyan\Theme\Helpers\Templates;
use Cyan\Theme\Helpers\Icon;

$cyn_enamad_code = get_option('cyn_enamad_code');
$cyn_samandehi_code = get_option('cyn_samandehi_code');
$cyn_developer_code = get_option('cyn_developer_code');
$address_text = get_option('address_text');
$address_link = get_option('address_link');
$phone_number = get_option('phone_number');
$phone_number_support = get_option('phone_number_support');
$telegram_link = get_option('telegram_link');
$telegram_text = get_option('telegram_text');
$instagram_link = get_option('instagram_link');
$instagram_text = get_option('instagram_text');
$whatsapp_number = get_option('whatsapp_number');
$twitter_link = get_option('twitter_link');
$twitter_text = get_option('twitter_text');
$email_address = get_option('email_address');
$logo = get_option('logo');
?>

<?php Templates::getPart('backdrop'); ?>

<section class="container">

	<div class="container bg-white/40 shadow-item backdrop-blur-[54px] rounded-[40px] py-9 px-5 md:py-9 md:px-9 flex flex-col gap-8">

		<div class="flex gap-8 max-lg:flex-wrap overflow-hidden">

			<div class="flex flex-col gap-3 md:gap-9 lg:flex-1 max-lg:w-[calc(50%-2rem)] max-sm:w-full">
				<span class="text-xl font-semibold text-cynOrange whitespace-nowrap"><?php _e('دسترسی ها', 'jonubgard'); ?></span>

				<?php wp_nav_menu([
					'menu_id' => '',
					'menu_class' => "text-cynBlack/80 text-base font-normal flex flex-col gap-4 [&>li]:flex [&>li]:items-center [&>li]:gap-2 [&>li]:fa [&>li]:before:content-['●'] [&>li]:before:text-cynOrange [&>li]:before:text-xl [&>li]:before:leading-none [&_li]:whitespace-nowrap",
					'depth' => '',
					'theme_location' => 'quick-menu',
					'container' => 'ul'
				]); ?>

			</div>

			<div class="divider-vertical max-sm:!w-full max-sm:before:!w-[640px] max-sm:before:block max-sm:h-[1px] max-sm:before:!right-0"></div>

			<div class="flex flex-col gap-3 md:gap-9 lg:flex-1 max-lg:w-[calc(50%-2rem)] max-sm:w-full">
				<span class="text-xl font-semibold text-cynOrange whitespace-nowrap"><?php _e('سایر', 'jonubgard'); ?></span>

				<?php wp_nav_menu([
					'menu_id' => '',
					'menu_class' => "text-cynBlack/80 text-base font-normal flex flex-col gap-4 [&>li]:flex [&>li]:items-center [&>li]:gap-2 [&>li]:fa [&>li]:before:content-['●'] [&>li]:before:text-cynOrange [&>li]:before:text-xl [&>li]:before:leading-none [&_li]:whitespace-nowrap",
					'depth' => '',
					'theme_location' => 'more-menu',
					'container' => 'ul'
				]); ?>

			</div>

			<div class="divider-vertical max-lg:hidden max-sm:block max-sm:!w-full max-sm:before:!w-[640px] max-sm:before:block max-sm:h-[1px] max-sm:before:!right-0"></div>

			<div class="flex flex-col gap-3 md:gap-9 lg:flex-1 max-lg:w-[calc(50%-2rem)] max-sm:w-full">
				<span class="text-xl font-semibold text-cynOrange whitespace-nowrap"><?php _e('شبکه های اجتماعی', 'jonubgard'); ?></span>

				<div class="flex flex-col gap-4">

					<?php if ($whatsapp_number) : ?>
						<a href="<?php echo 'https://wa.me/' . $whatsapp_number ?>" class="bg-cynWhite rounded-xl text-cynBlack p-1 flex items-center gap-1">
							<i class="size-6 flex items-center justify-center text-[#22C55E] stroke-2">
								<?php Icon::print('Whatsup'); ?>
							</i>
							<span class="pt-1"><?php echo $whatsapp_number ?></span>
						</a>
					<?php endif; ?>

					<?php if ($twitter_link) : ?>
						<a href="<?php echo $twitter_link ?>" class="bg-cynWhite rounded-xl text-cynBlack p-1 flex items-center gap-1">
							<i class="size-6 flex items-center justify-center text-cynBlack stroke-2 p-0.5">
								<?php get_template_part('assets/image/x'); ?>
							</i>
							<span class="pt-1"><?php echo $twitter_text ?></span>
						</a>
					<?php endif; ?>

					<?php if ($telegram_link) : ?>
						<a href="<?php echo $telegram_link ?>" class="bg-cynWhite rounded-xl text-cynBlack p-1 flex items-center gap-1">
							<i class="size-6 flex items-center justify-center text-[#00BFE1] stroke-2">
								<?php Icon::print('Telegram'); ?>
							</i>
							<span class="pt-1"><?php echo $telegram_text ?></span>
						</a>
					<?php endif; ?>

					<?php if ($instagram_link) : ?>
						<a href="<?php echo $instagram_link ?>" class="bg-cynWhite rounded-xl text-cynBlack p-1 flex items-center gap-1">
							<i class="size-6 flex items-center justify-center text-[#DB2777] stroke-2">
								<?php Icon::print('Instagram'); ?>
							</i>
							<span class="pt-1"><?php echo $instagram_text ?></span>
						</a>
					<?php endif; ?>

				</div>
			</div>

			<div class="divider-vertical max-sm:!w-full max-sm:before:!w-[640px] max-sm:before:block max-sm:h-[1px] max-sm:before:!right-0"></div>

			<div class="flex flex-col gap-3 md:gap-9 lg:flex-2 max-lg:w-[calc(50%-2rem)] max-sm:w-full">
				<span class="text-xl font-semibold text-cynOrange whitespace-nowrap"><?php _e('راه‌های ارتباطی', 'jonubgard'); ?></span>

				<div class="flex flex-col gap-4">
					<a href="<?php echo $address_link; ?>" class="text-cynBlack/80 text-base font-normal flex items-start gap-1">
						<i class="size-6 flex text-cynOrange stroke-2">
							<?php Icon::print('Marker,-Pin'); ?>
						</i>
						<span class="pt-1"><?php echo $address_text; ?></span>
					</a>
					<a href="<?php echo $phone_number_support; ?>" class="text-cynBlack/80 text-base font-normal flex items-center gap-1">
						<i class="size-6 flex text-cynOrange stroke-2">
							<?php Icon::print('Phone,-Call-2'); ?>
						</i>
						<span class="pt-1"><?php echo $phone_number_support; ?></span>
					</a>
					<a href="<?php echo $email_address; ?>" class="text-cynBlack/80 text-base font-normal flex items-center gap-1">
						<i class="size-6 flex text-cynOrange stroke-2">
							<?php Icon::print('Web,-Finder,-Window'); ?>
						</i>
						<span class="pt-1"><?php echo $email_address; ?></span>
					</a>
				</div>

			</div>

		</div>

		<div class="h-[1px] bg-[#2a2a2a1f] w-full"></div>

		<div class="flex items-center justify-center gap-4">

			<div class="size-16">
				<?php echo $cyn_enamad_code; ?>
			</div>

			<div class="size-16">
				<?php echo $cyn_samandehi_code; ?>
			</div>

		</div>

		<span class="text-cynOrange text-base font-medium text-center">
			<?php echo $cyn_developer_code; ?>
		</span>

	</div>

</section>