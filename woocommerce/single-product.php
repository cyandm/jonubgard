<?php

/**
 * The Template for displaying all single products
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/single-product.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see         https://woocommerce.com/document/template-structure/
 * @package     WooCommerce\Templates
 * @version     1.6.4
 */
if (! defined('ABSPATH')) {
	exit; // Exit if accessed directly
}

use Cyan\Theme\Helpers\Icon;
use Cyan\Theme\Helpers\Templates;

// Get current product
$product = wc_get_product(get_the_ID());

// Check if product exists
if (!$product) {
	return;
}

// Get product average rating
$average_rating = $product->get_average_rating(); // e.g. 4.2
$review_count = $product->get_review_count(); // Number of reviews

// Set default rating if no reviews
if ($average_rating == 0) {
	$average_rating = 5; // Or any default value you want
}

// Calculate full and half stars
$full_stars = floor($average_rating); // Full stars
$half_star = ($average_rating - $full_stars) * 100; // Half star percentage
$empty_stars = 5 - ceil($average_rating); // Empty stars

// Get featured image as fallback for video covers
$featured_image_id = get_post_thumbnail_id(get_the_ID());

// travel_images and videos
$travel_images = array();

for ($i = 1; $i <= 30; $i++) {
	$file = get_field('travel_images_' . $i);
	$cover = get_field('travel_video_cover_' . $i);

	if (!empty($file)) {
		$mime_type = get_post_mime_type($file);
		$is_video = strpos($mime_type, 'video/') === 0;

		// Use cover if available, otherwise use featured image for videos
		$video_cover = null;
		if ($is_video) {
			if (!empty($cover)) {
				$video_cover = $cover;
			} elseif (!empty($featured_image_id)) {
				$video_cover = $featured_image_id;
			}
		}

		$travel_images[] = [
			'file' => $file,
			'is_video' => $is_video,
			'cover' => $video_cover
		];
	}
}

// Travel information
$travel_duration = get_field('travel_duration');
$travel_location = get_field('travel_location');
$travel_start = get_field('travel_start');
$travel_end = get_field('travel_end');
$travel_flight = get_field('travel_flight');
$travel_accommodation = get_field('travel_accommodation');
$travel_meals = get_field('travel_meals');
$travel_attraction_entry = get_field('travel_attraction_entry');
$travel_insurances = get_field('travel_insurances');

// price details
$travel_price = get_field('travel_price');
$travel_visa = get_field('travel_visa');
$travel_price_single = get_field('travel_price_single');

// all details
$travel_subtitle = get_field('travel_subtitle');
$travel_date = get_field('travel_date');
$travel_activities = get_field('travel_activities');
$travel_accommodation_details = get_field('travel_accommodation_details');
$travel_experiences = get_field('travel_experiences');
$travel_services = get_field('travel_services');
$travel_price_details = get_field('travel_price_details');

// tour information
$travel_hotel_stay = get_field('travel_hotel_stay');
$travel_breakfast = get_field('travel_breakfast');
$travel_transfers_included = get_field('travel_transfers_included');
$travel_tour_leader = get_field('travel_tour_leader');
$travel_insurance = get_field('travel_insurance');
$travel_triberka_village = get_field('travel_triberka_village');
$travel_dog_sledding = get_field('travel_dog_sledding');
$travel_glass_igloo = get_field('travel_glass_igloo');
$travel_included_tour = get_field('travel_included_tour');
$travel_included_meal = get_field('travel_included_meal');
$travel_night_walk = get_field('travel_night_walk');
$travel_excess_foreign_currency = get_field('travel_excess_foreign_currency');
$travel_weapons = get_field('travel_weapons');
$travel_pets_without_health_certificate = get_field('travel_pets_without_health_certificate');
$travel_drugs = get_field('travel_drugs');
$travel_psychoactive_meds = get_field('travel_psychoactive_meds');
$travel_optional_tour = get_field('travel_optional_tour');

// check list
$travel_checklist = get_field('travel_checklist');

// important notice
$travel_important_points = get_field('travel_important_points');

// قیمت محصول از WooCommerce
$product_price = $product->get_price();
$adult_price = !empty($product_price) ? floatval($product_price) : 0; // قیمت بزرگسال از WooCommerce
$child_price = 0; // کودکان رایگان هستند - فقط در سفارش ثبت می‌شوند
?>

<?php get_header(); ?>

<main class="single-travel relative">

	<?php Templates::getPart('breadcrumb') ?>

	<section class="travel-hero container mt-6 flex flex-col gap-3">

		<div class="flex justify-between">
			<h1 class="text-xl md:text-3xl font-bold md:pt-2.5 leading-8 md:leading-11"><?php the_title(); ?></h1>
			<button id="shareBtn" class="primary-btn hidden md:flex gap-1 justify-center items-center">
				<span class="size-7 -mt-1">
					<?php Icon::print('Share-1') ?>
				</span>
				<?php _e('اشتراک گذاری') ?>
			</button>
		</div>

		<div class="flex justify-between">

			<div class="flex flex-col gap-2">
				<span class="text-sm md:text-xl font-bold">
					<?= $travel_duration ?>
				</span>

				<span class="flex items-center justify-center gap-1 [&_svg]:size-6">
					<?php
					for ($i = 1; $i <= 5; $i++):
						// Calculate fill percentage for each star
						$fill_percentage = 0;

						if ($i <= $full_stars) {
							$fill_percentage = 100; // Full star
						} elseif ($i == $full_stars + 1) {
							$fill_percentage = $half_star; // Half star
						} else {
							$fill_percentage = 0; // Empty star
						}

						$gradient_id = 'starGradient' . $i;
					?>

						<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 18 18">
							<defs>
								<linearGradient id="<?php echo $gradient_id; ?>" x1="100%" y1="0%" x2="0%" y2="0%">
									<stop offset="<?php echo $fill_percentage; ?>%" stop-color="#EFA114" />
									<stop offset="<?php echo $fill_percentage; ?>%" stop-color="#E0E0E0" />
								</linearGradient>
							</defs>
							<path d="M16.963,6.786c-.088-.271-.323-.469-.605-.51l-4.62-.671L9.672,1.418c-.252-.512-1.093-.512-1.345,0l-2.066,4.186-4.62,.671c-.282,.041-.517,.239-.605,.51-.088,.271-.015,.57,.19,.769l3.343,3.258-.79,4.601c-.048,.282,.067,.566,.298,.734,.231,.167,.538,.189,.79,.057l4.132-2.173,4.132,2.173c.11,.058,.229,.086,.349,.086,.155,0,.31-.048,.441-.143,.231-.168,.347-.452,.298-.734l-.79-4.601,3.343-3.258c.205-.199,.278-.498,.19-.769Z" fill="url(#<?php echo $gradient_id; ?>)" />
						</svg>

					<?php endfor ?>
				</span>

				<p class="text-xs font-medium flex gap-1">
					<i class="size-5">
						<?php Icon::print('Marker,-Pin') ?>
					</i>
					<span class="fa">
						<?= $travel_location ?>
					</span>
				</p>
			</div>

			<button id="shareBtn" class="primary-btn flex md:hidden gap-1 justify-center items-center h-fit !py-2 !px-3">
				<span class="size-7">
					<?php Icon::print('Share-1') ?>
				</span>
			</button>

		</div>

	</section>

	<section class="travel-gallery container mt-4 mb-9 md:mb-14">
		<?php if (!empty($travel_images)): ?>
			<div class="flex flex-col lg:flex-row gap-3.5">
				<!-- Thumbnails Grid (Left Side) -->
				<div class="w-full lg:w-1/2 order-2">
					<!-- Grid for desktop, horizontal scroll for mobile/tablet -->
					<div class="flex flex-row gap-3 overflow-x-auto max-lg:pb-2 lg:grid lg:grid-cols-3 lg:overflow-x-visible max-lg:p-0.5 scrollbar" id="travel-thumbnails">

						<?php
						// Display first 8 thumbnails
						$thumbnails = array_slice($travel_images, 0, 8);
						foreach ($thumbnails as $index => $item):
							$is_video = $item['is_video'];
							$file_id = $item['file'];
							$cover_id = $item['cover'];
							$mime_type = get_post_mime_type($file_id);

							// Get thumbnail URL - use cover if video has cover, otherwise use file thumbnail or featured image
							if ($is_video && !empty($cover_id)) {
								$thumb_url = wp_get_attachment_image_url($cover_id, 'medium_large');
							} elseif ($is_video) {
								// Fallback to featured image if no cover
								$featured_image_id = get_post_thumbnail_id();
								if ($featured_image_id) {
									$thumb_url = wp_get_attachment_image_url($featured_image_id, 'medium_large');
								} else {
									$thumb_url = wp_get_attachment_image_url($file_id, 'medium_large');
								}
							} else {
								$thumb_url = wp_get_attachment_image_url($file_id, 'medium_large');
							}

							// Get full size URL for Fancybox
							$file_url = $is_video ? wp_get_attachment_url($file_id) : wp_get_attachment_image_url($file_id, 'full');
							$poster_url = '';
							$thumb_src = '';
							if ($is_video && !empty($cover_id)) {
								$poster_url = wp_get_attachment_image_url($cover_id, 'full');
								$thumb_src = wp_get_attachment_image_url($cover_id, 'medium_large');
							} elseif ($is_video) {
								// Fallback to featured image if no cover
								$featured_image_id = get_post_thumbnail_id();
								if ($featured_image_id) {
									$poster_url = wp_get_attachment_image_url($featured_image_id, 'full');
									$thumb_src = wp_get_attachment_image_url($featured_image_id, 'medium_large');
								}
							}
						?>

							<a href="<?php echo esc_url($file_url); ?>"
								data-fancybox="travel-gallery"
								data-type="<?php echo $is_video ? 'html5video' : 'image'; ?>"
								<?php if ($is_video): ?>
								data-src="<?php echo esc_url($file_url); ?>"
								data-format="<?php echo esc_attr($mime_type); ?>"
								<?php if (!empty($poster_url)): ?>
								data-poster="<?php echo esc_url($poster_url); ?>"
								<?php endif; ?>
								<?php if (!empty($thumb_src)): ?>
								data-thumb="<?php echo esc_url($thumb_src); ?>"
								<?php endif; ?>
								<?php endif; ?>
								class="relative aspect-[2/1.12] overflow-hidden cursor-pointer thumbnail-item block flex-shrink-0 max-lg:w-40 max-lg:aspect-square <?php echo $index === 0 ? 'active ring-2 ring-cynOrange' : ''; ?>"
								data-slide-index="<?php echo $index; ?>">

								<?php if ($is_video): ?>

									<img src="<?php echo esc_url($thumb_url); ?>" alt="Travel Gallery" class="w-full h-full object-cover">

									<div class="absolute inset-0 flex items-center justify-center bg-black/30">
										<i class="w-8 h-auto"><?php echo file_get_contents(THEME_DIR . '/assets/image/play.php') ?></i>
									</div>

								<?php else: ?>
									<img src="<?php echo esc_url($thumb_url); ?>" alt="Travel Gallery" class="w-full h-full object-cover">
								<?php endif; ?>

							</a>

						<?php endforeach; ?>

						<!-- Show "+X" if there are more items -->
						<?php
						$total_count = count($travel_images);
						if ($total_count > 8):
							$remaining_count = $total_count - 8;
							// Get the 9th item (index 8) for the link
							$next_item = $travel_images[8];
							$next_file_id = $next_item['file'];
							$next_is_video = $next_item['is_video'];
							$next_cover = $next_item['cover'];
							$next_mime_type = get_post_mime_type($next_file_id);
							$next_file_url = $next_is_video ? wp_get_attachment_url($next_file_id) : wp_get_attachment_image_url($next_file_id, 'full');
							$next_poster_url = '';
							$next_thumb_src = '';
							if ($next_is_video && !empty($next_cover)) {
								$next_poster_url = wp_get_attachment_image_url($next_cover, 'full');
								$next_thumb_src = wp_get_attachment_image_url($next_cover, 'medium_large');
							} elseif ($next_is_video) {
								// Fallback to featured image if no cover
								$featured_image_id = get_post_thumbnail_id();
								if ($featured_image_id) {
									$next_poster_url = wp_get_attachment_image_url($featured_image_id, 'full');
									$next_thumb_src = wp_get_attachment_image_url($featured_image_id, 'medium_large');
								}
							}
						?>

							<a href="<?php echo esc_url($next_file_url); ?>"
								data-fancybox="travel-gallery"
								data-type="<?php echo $next_is_video ? 'html5video' : 'image'; ?>"
								<?php if ($next_is_video): ?>
								data-src="<?php echo esc_url($next_file_url); ?>"
								data-format="<?php echo esc_attr($next_mime_type); ?>"
								<?php if (!empty($next_poster_url)): ?>
								data-poster="<?php echo esc_url($next_poster_url); ?>"
								<?php endif; ?>
								<?php if (!empty($next_thumb_src)): ?>
								data-thumb="<?php echo esc_url($next_thumb_src); ?>"
								<?php endif; ?>
								<?php endif; ?>
								class="aspect-[2/1.12] overflow-hidden cursor-pointer bg-cynWhite flex items-center justify-center thumbnail-more flex-shrink-0 max-lg:w-40"
								data-slide-index="8">
								<?php
								// Convert number to Persian digits
								$persian_digits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
								$english_digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
								$persian_count = str_replace($english_digits, $persian_digits, (string)$remaining_count);
								?>
								<span class="text-2xl font-medium text-cynBlack fa"><?php echo $persian_count; ?>+</span>
							</a>

						<?php endif; ?>
					</div>
				</div>

				<!-- Main Slider (Right Side) -->
				<div class="w-full lg:w-1/2 order-1 relative">
					<swiper-container id="travel-main-slider" slides-per-view="1" space-between="6" loop="false" navigation="true" navigation-next-el="#travelImageNext" navigation-prev-el="#travelImagePrev" class="relative">
						<?php foreach ($travel_images as $index => $item): ?>
							<?php
							$file_id = $item['file'];
							$mime_type = get_post_mime_type($file_id);
							$is_video = $item['is_video'];
							$cover = $item['cover'];
							?>
							<?php Templates::getCard('single-product', ['travel_image' => $file_id, 'mime_type' => $mime_type, 'is_video' => $is_video, 'cover' => $cover, 'index' => $index]) ?>
						<?php endforeach; ?>

					</swiper-container>

					<!-- Navigation Buttons -->

					<button id="travelImagePrev" class="bg-cynOrange p-2 w-fit rounded-full cursor-pointer absolute right-0.5 z-10 top-1/2 -translate-y-1/2">
						<i class="text-white size-4 stroke-2">
							<?php Icon::print('Arrow,-Right') ?>
						</i>
					</button>

					<button id="travelImageNext" class="bg-cynOrange p-2 w-fit rounded-full cursor-pointer absolute left-0.5 z-10 top-1/2 -translate-y-1/2">
						<i class="text-white size-4 stroke-2">
							<?php Icon::print('Left-1') ?>
						</i>
					</button>

				</div>
			</div>

			<!-- Hidden links for fancybox (all items) -->
			<div class="hidden">
				<?php foreach ($travel_images as $index => $item):
					$file_id = $item['file'];
					$is_video = $item['is_video'];
					$cover = $item['cover'];
					$mime_type = get_post_mime_type($file_id);
					$file_url = $is_video ? wp_get_attachment_url($file_id) : wp_get_attachment_image_url($file_id, 'full');
					$poster_url = '';
					$thumb_src = '';
					if ($is_video && !empty($cover)) {
						$poster_url = wp_get_attachment_image_url($cover, 'full');
						$thumb_src = wp_get_attachment_image_url($cover, 'medium_large');
					} elseif ($is_video) {
						// Fallback to featured image if no cover
						$featured_image_id = get_post_thumbnail_id();
						if ($featured_image_id) {
							$poster_url = wp_get_attachment_image_url($featured_image_id, 'full');
							$thumb_src = wp_get_attachment_image_url($featured_image_id, 'medium_large');
						}
					}
				?>
					<a href="<?php echo esc_url($file_url); ?>"
						data-fancybox="travel-gallery"
						data-type="<?php echo $is_video ? 'html5video' : 'image'; ?>"
						<?php if ($is_video): ?>
						data-src="<?php echo esc_url($file_url); ?>"
						data-format="<?php echo esc_attr($mime_type); ?>"
						<?php if (!empty($poster_url)): ?>
						data-poster="<?php echo esc_url($poster_url); ?>"
						<?php endif; ?>
						<?php if (!empty($thumb_src)): ?>
						data-thumb="<?php echo esc_url($thumb_src); ?>"
						<?php endif; ?>
						<?php endif; ?>></a>
				<?php endforeach; ?>
			</div>
		<?php endif; ?>
	</section>

	<section class="travel-info container my-9 md:my-14">

		<div class="bg-cynWhite shadow-[0px-4px-9px-0px-#00000024] flex flex-wrap justify-center rounded-3xl overflow-hidden [&_.info-card]:w-1/2 md:[&_.info-card]:w-1/3 lg:[&_.info-card]:w-1/5 lg:[&_.info-card]:w- [&_.info-card]:first:justify-center [&_.info-card]:items-center max-md:[&_.info-card]:min-h-24.5 lg:[&_.info-card]:min-h-[103px] xl:[&_.info-card]:min-h-auto [&_.info-card]:border-b [&_.info-card]:border-l [&_.info-card]:border-[#0000001A] [&_.info-card]:flex [&_.info-card]:last:border-l-0 md:[&_.info-card:nth-child(5)]:border-l-0 max-md:[&_.info-card:nth-child(9)]:!border-b-0 max-md:[&_.info-card:nth-child(10)]:border-b-0 max-md:[&_.info-card:nth-child(even)]:border-l-0 md:[&_.info-card:nth-child(n+6)]:border-b-0 [&_.info-card>span]:items-center [&_.text-info]:flex [&_.text-info]:flex-col [&_.text-info]:gap-1 max-md:[&_.text-info]:min-h-9 max-lg:[&_.info-card:nth-child(3)]:border-l-0 max-md:[&_.info-card:nth-child(3)]:!border-l max-lg:[&_.info-card:nth-child(5)]:!border-l max-lg:[&_.info-card:nth-child(6)]:border-l-0 max-lg:[&_.info-card:nth-child(6)]:!border-b max-lg:[&_.info-card:nth-child(7+8+9)]:!border-b max-lg:[&_.info-card:nth-child(10)]:border-0 max-lg:[&_.info-card:nth-child(7)]:!border-b max-lg:[&_.info-card:nth-child(8)]:!border-b max-lg:[&_.info-card:nth-child(9)]:!border-b max-lg:[&_.info-card:nth-child(9)]:!border-l-0 max-md:[&_.info-card:nth-child(9)]:!border-l">

			<div class="py-2.5 px-4 md:px-5 flex-col gap-2.5 !items-start info-card">

				<span class="flex gap-3">
					<i class="size-6"><?php Icon::print('Plane-Take-Off') ?></i>
					<div class="w-[1.5px] h-6 bg-[#EFA1143D] text-transparent"></div>
					<span class="fa text-sm font-semibold"><?= $travel_start ?></span>
				</span>

				<span class="flex gap-3">
					<i class="size-6"><?php Icon::print('Plane-Land') ?></i>
					<div class="w-[1.5px] h-6 bg-[#EFA1143D] text-transparent"></div>
					<span class="fa text-sm font-semibold"><?= $travel_end ?></span>
				</span>

			</div>

			<div class="p-4 md:p-5 info-card">

				<span class="flex gap-3">
					<i class="size-9"><?php Icon::print('plane') ?></i>
					<div class="w-[1.5px] h-6 bg-[#EFA1143D] text-transparent"></div>
					<div class="text-info">
						<span class="fa text-sm font-bold"><?php _e('نوع پرواز') ?></span>
						<span class="fa text-xs font-semibold"><?= $travel_flight ?></span>
					</div>
				</span>

			</div>

			<div class="p-4 md:p-5 info-card">

				<span class="flex gap-3">
					<i class="size-9"><?php Icon::print('Money,-Dollar') ?></i>
					<div class="w-[1.5px] h-6 bg-[#EFA1143D] text-transparent"></div>
					<div class="text-info">
						<span class="fa text-sm font-bold"><?php _e('هزینه تور') ?></span>
						<span class="fa text-xs font-semibold"><?= $travel_price ?></span>
					</div>
				</span>

			</div>

			<div class="p-4 md:p-5 info-card">

				<span class="flex gap-3">
					<i class="size-9"><?php Icon::print('User,Profile-8') ?></i>
					<div class="w-[1.5px] h-6 bg-[#EFA1143D] text-transparent"></div>
					<div class="text-info">
						<span class="fa text-sm font-bold"><?php _e('هزینه ویزا') ?></span>
						<span class="fa text-xs font-semibold"><?= $travel_visa ?></span>
					</div>
				</span>

			</div>

			<div class="p-4 md:p-5 info-card">

				<span class="flex gap-3">
					<i class="size-9"><?php Icon::print('Money,-Dollar') ?></i>
					<div class="w-[1.5px] h-6 bg-[#EFA1143D] text-transparent"></div>
					<div class="text-info">
						<span class="fa text-sm font-bold"><?php _e('هزینه تور سینگل') ?></span>
						<span class="fa text-xs font-semibold"><?= $travel_price_single ?></span>
					</div>
				</span>

			</div>

			<div class="p-4 md:p-5 info-card">

				<span class="flex gap-3">
					<i class="size-9"><?php Icon::print('Alarm,-Clock,-Time,-Timer-3') ?></i>
					<div class="w-[1.5px] h-6 bg-[#EFA1143D] text-transparent"></div>
					<div class="text-info">
						<span class="fa text-sm font-bold"><?php _e('مدت زمان سفر') ?></span>
						<span class="fa text-xs font-semibold"><?= $travel_duration ?></span>
					</div>
				</span>

			</div>

			<div class="p-4 md:p-5 info-card">

				<span class="flex gap-3">
					<i class="size-9"><?php Icon::print('hotel-modern-building') ?></i>
					<div class="w-[1.5px] h-6 bg-[#EFA1143D] text-transparent"></div>
					<div class="text-info">
						<span class="fa text-sm font-bold"><?php _e('اقامت') ?></span>
						<span class="fa text-xs font-semibold"><?= $travel_accommodation ?></span>
					</div>
				</span>

			</div>

			<div class="p-4 md:p-5 info-card">

				<span class="flex gap-3">
					<i class="size-9"><?php Icon::print('coffee-cup') ?></i>
					<div class="w-[1.5px] h-6 bg-[#EFA1143D] text-transparent"></div>
					<div class="text-info">
						<span class="fa text-sm font-bold"><?php _e('وعده های غذایی') ?></span>
						<span class="fa text-xs font-semibold"><?= $travel_meals ?></span>
					</div>
				</span>

			</div>

			<div class="p-4 md:p-5 info-card">

				<span class="flex gap-3">
					<i class="size-9"><?php Icon::print('Sun,-Sea,-Sunrise') ?></i>
					<div class="w-[1.5px] h-6 bg-[#EFA1143D] text-transparent"></div>
					<div class="text-info">
						<span class="fa text-sm font-bold"><?php _e('ورودی جاذبه ها') ?></span>
						<span class="fa text-xs font-semibold"><?= $travel_attraction_entry ?></span>
					</div>
				</span>

			</div>

			<div class="p-4 md:p-5 info-card">

				<span class="flex gap-3">
					<i class="size-9"><?php Icon::print('medical-cross-shield') ?></i>
					<div class="w-[1.5px] h-6 bg-[#EFA1143D] text-transparent"></div>
					<div class="text-info">
						<span class="fa text-sm font-bold"><?php _e('بیمه مسافرتی') ?></span>
						<span class="fa text-xs font-semibold"><?= $travel_insurances ?></span>
					</div>
				</span>

			</div>

		</div>

	</section>

	<section class="travel-tabs bg-[#2A2A2A0A] py-8">

		<div class="container flex gap-5 justify-between overflow-x-scroll scrollbar">

			<?php
			$tabs = [
				['id' => 'tab_1', 'label' => 'جزییات کلی'],
				['id' => 'tab_2', 'label' => 'اطلاعات تور'],
				['id' => 'tab_3', 'label' => 'پلن تور'],
				['id' => 'tab_4', 'label' => 'چک لیست'],
				['id' => 'tab_5', 'label' => 'نکات مهم'],
				['id' => 'tab_6', 'label' => 'نظرات'],
			];
			?>

			<?php foreach ($tabs as $index => $tab): ?>
				<div class="bg-[#FFFFFF33] hover:bg-cynOrange text-cynBlack hover:text-cynWhite [&.active]:bg-cynOrange [&.active]:text-cynWhite duration-300 rounded-2xl py-5 px-10 max-md:px-6 w-full flex justify-center items-center whitespace-nowrap <?= $index === 0 ? 'active' : '' ?>" data-tab="<?= esc_attr($tab['id']); ?>">
					<span class="fa text-xl font-semibold"><?= esc_html($tab['label']); ?></span>
				</div>
			<?php endforeach; ?>

		</div>

	</section>

	<section class="travel-tabs-content container mt-14 flex gap-3.5 overflow-x-hidden">

		<div class="w-full lg:w-2/3">

			<div class="tab-contents relative">

				<div id="tab_1" class="tab-content hidden [&.active]:flex active flex-col gap-3">
					<h2 class="text-2xl font-bold"><?php echo $travel_subtitle ?></h2>

					<div class="text-base font-semibold leading-8 flex flex-col">
						<span class="fa">
							<?php
							_e('تاریخ سفر:', 'jonubgard');
							echo ' ' . $travel_date;
							?>
						</span>

						<span class="fa">
							<?php
							_e('مدت:', 'jonubgard');
							echo ' ' . $travel_duration;
							?>
						</span>

						<span class="fa">
							<?php echo $travel_activities; ?>
						</span>

					</div>

					<div class="divider w-full py-2.5 text-xl font-semibold bg-[#E8E8E8] rounded-l-3xl">
						<span class="fa">
							<?php _e('اقامت', 'jonubgard') ?>
						</span>
					</div>

					<div class="text-base font-medium leading-8 flex flex-col">
						<span>
							<?php echo $travel_accommodation_details; ?>
						</span>
					</div>

					<div class="divider w-full py-2.5 text-xl font-semibold bg-[#E8E8E8] rounded-l-3xl">
						<span class="fa">
							<?php _e('گشت‌ها و تجربه‌های منحصربه‌فرد', 'jonubgard') ?>
						</span>
					</div>

					<div class="text-base font-medium leading-8 flex flex-col">
						<span>
							<?php echo $travel_experiences; ?>
						</span>
					</div>

					<div class="divider w-full py-2.5 text-xl font-semibold bg-[#E8E8E8] rounded-l-3xl">
						<span class="fa">
							<?php _e('خدمات تور', 'jonubgard') ?>
						</span>
					</div>

					<div class="text-sm font-medium leading-8 flex flex-col">
						<span>
							<?php echo $travel_services; ?>
						</span>
					</div>

					<div class="divider w-full py-2.5 text-xl font-semibold bg-[#E8E8E8] rounded-l-3xl">
						<span class="fa">
							<?php _e('هزینه تور', 'jonubgard') ?>
						</span>
					</div>

					<div class="text-base font-semibold leading-8 flex flex-col">
						<span>
							<?php echo $travel_price_details; ?>
						</span>
					</div>

				</div>

				<div id="tab_2" class="tab-content hidden [&.active]:flex flex-col gap-3">
					<h3 class="text-2xl font-bold"><?php _e('اطلاعات تور ( شامل / بجز)', 'jonubgard') ?></h3>

					<div class="w-full">

						<ul class="flex flex-row flex-wrap gap-3">
							<?php
							// Define all travel features with their labels
							$travel_features = [
								['var' => 'travel_hotel_stay', 'label' => 'اقامت هتل'],
								['var' => 'travel_breakfast', 'label' => 'صبحانه'],
								['var' => 'travel_transfers_included', 'label' => 'تمامی ترانسفرها'],
								['var' => 'travel_tour_leader', 'label' => 'لیدر همراه'],
								['var' => 'travel_insurance', 'label' => 'بیمه مسافرتی'],
								['var' => 'travel_triberka_village', 'label' => 'روستای تریبرکا'],
								['var' => 'travel_dog_sledding', 'label' => 'سورتمه سواری با سگ'],
								['var' => 'travel_glass_igloo', 'label' => 'ایگلوی شیشه‌ای'],
								['var' => 'travel_included_tour', 'label' => 'تور شامل'],
								['var' => 'travel_included_meal', 'label' => 'وعده غذایی شامل'],
								['var' => 'travel_night_walk', 'label' => 'پیاده‌روی شبانه'],
								['var' => 'travel_excess_foreign_currency', 'label' => 'ارز اضافی خارجی'],
								['var' => 'travel_weapons', 'label' => 'سلاح'],
								['var' => 'travel_pets_without_health_certificate', 'label' => 'حیوانات خانگی بدون گواهی سلامت'],
								['var' => 'travel_drugs', 'label' => 'مواد مخدر'],
								['var' => 'travel_psychoactive_meds', 'label' => 'داروهای روان‌گردان'],
								['var' => 'travel_optional_tour', 'label' => 'تور اختیاری'],
							];

							// Loop through features and display only if variable exists
							foreach ($travel_features as $index => $feature) :
								$var_name = $feature['var'];
								$var_value = isset($$var_name) ? $$var_name : '';

								// Skip if variable doesn't exist or is empty
								if (empty($var_value)) {
									continue;
								}

								$is_yes = ($var_value == 'yes');
								$icon_class = $is_yes ? 'text-cynOrange' : 'text-cynRed';
								$icon_name = $is_yes ? 'checkmark-circle-1' : 'Delete,-Disabled-1';
							?>

								<li class="flex gap-2.5 bg-cynWhite rounded-lg p-1.5 items-center w-[calc(50%-0.75rem)]">
									<i class="size-7 stroke-2 <?php echo $icon_class; ?>">
										<?php Icon::print($icon_name); ?>
									</i>
									<span class="font-semibold text-base fa"><?php _e($feature['label'], 'jonubgard'); ?></span>
								</li>

							<?php endforeach; ?>

						</ul>

					</div>

				</div>

				<div id="tab_3" class="tab-content hidden [&.active]:flex flex-col gap-3">
					<h3 class="text-2xl font-bold"><?php _e('پلن تور', 'jonubgard') ?></h3>

					<div class="w-full">
						<div class="accordion-container flex flex-col gap-3">
							<?php
							// Collect all travel days
							$travel_days = [];
							for ($i = 1; $i <= 20; $i++) {
								$travel_day_title = get_field('travel_day_' . $i . '_title');
								$travel_day_content = get_field('travel_day_' . $i . '_content');

								if (!empty($travel_day_title) || !empty($travel_day_content)) {
									$travel_days[] = [
										'title' => $travel_day_title,
										'content' => $travel_day_content,
										'index' => $i
									];
								}
							}

							// Display accordion items
							foreach ($travel_days as $day) :
							?>
								<div class="accordion-item bg-cynWhite rounded-lg overflow-hidden">
									<button class="accordion-button w-full flex items-center justify-between gap-3 p-3 text-right cursor-pointer" data-accordion-target="accordion-<?php echo $day['index']; ?>" aria-expanded="false">
										<span class="font-semibold text-base fa flex-1 text-right">
											<?php echo esc_html($day['title']); ?>
										</span>
										<i class="accordion-icon size-8 stroke-2 text-cynOrange transition-transform duration-300 flex-shrink-0">
											<?php Icon::print('Arrow-28'); ?>
										</i>
									</button>
									<div class="accordion-content grid transition-all duration-300 ease-in-out" data-accordion-content="accordion-<?php echo $day['index']; ?>" style="grid-template-rows: 0fr;">
										<div class="overflow-hidden">
											<div class="px-4 pb-3 pt-0 text-base font-medium leading-8">
												<?php echo wp_kses_post($day['content']); ?>
											</div>
										</div>
									</div>
								</div>
							<?php endforeach; ?>
						</div>
					</div>

				</div>

				<div id="tab_4" class="tab-content hidden [&.active]:flex flex-col gap-3">
					<h3 class="text-2xl font-bold"><?php _e('چک لیست', 'jonubgard') ?></h3>

					<div class="w-full">
						<div class="text-base font-semibold leading-8 [&>ul]:list-none [&>ul]:ps-0 [&>ul>li]:flex [&>ul>li]:items-center [&>ul>li]:gap-2.5 [&>ul>li]:fa [&>ul>li]:before:content-['●'] [&>ul>li]:before:text-cynOrange [&>ul>li]:before:text-2xl [&>ul>li]:before:leading-none [&>ul>li]:before:flex-shrink-0">
							<?php echo $travel_checklist; ?>
						</div>
					</div>
				</div>

				<div id="tab_5" class="tab-content hidden [&.active]:flex flex-col gap-3">
					<h3 class="text-2xl font-bold"><?php _e('نکات مهم', 'jonubgard') ?></h3>

					<div class="w-full">
						<div class="text-base font-semibold leading-8 [&>ul]:list-none [&>ul]:ps-0 [&>ul>li]:flex [&>ul>li]:items-center [&>ul>li]:gap-2.5 [&>ul>li]:fa [&>ul>li]:before:content-['●'] [&>ul>li]:before:text-cynOrange [&>ul>li]:before:text-2xl [&>ul>li]:before:leading-none [&>ul>li]:before:flex-shrink-0">
							<?php echo $travel_important_points; ?>
						</div>
					</div>
				</div>

				<div id="tab_6" class="tab-content hidden [&.active]:flex flex-col gap-3">
					<h3 class="text-2xl font-bold"><?php _e('دیدگاه ها', 'jonubgard') ?></h3>

					<div class="w-full">
						<div class="text-base font-semibold leading-8">

							<?php if (function_exists('comments_template')) {
								comments_template('/woocommerce/single-product-reviews.php');
							}
							?>

						</div>
					</div>
				</div>

			</div>

		</div>

		<div class="w-1/4 lg:w-1/3 relative max-lg:hidden">
			<div class="sticky top-4 pb-3">
				<div class="p-6 bg-cynWhite rounded-3xl shadow-item flex flex-col gap-3 justify-center items-center mb-3">
					<p class="text-xl font-bold"><?php _e('برای اطلاعات بیشتر تماس بگیرید', 'jonubgard') ?></p>
					<span class="text-base font-medium"><?php _e('هرروز از ۹ تا ۱۲ شب', 'jonubgard') ?></span>
					<a href="tel:<?php echo get_option('phone_number_support') ?>" class="w-full border border-cynOrange rounded-2xl py-3 px-2.5 text-xl font-medium text-cynOrange mt-5 flex justify-center items-center hover:bg-cynOrange hover:text-cynWhite transition-all duration-300"><?php _e('مشاوره رایگان', 'jonubgard') ?></a>
				</div>

				<form method="get" action="<?php echo esc_url($product->get_permalink()); ?>" class="p-6 bg-cynWhite rounded-3xl shadow-item flex flex-col gap-6 justify-center items-center [&>div]:w-full">
					<div class="flex flex-col gap-3 justify-center items-center">
						<p class="text-xl font-bold text-center"><?php _e('رزرو تور', 'jonubgard'); ?></p>
						<p class="text-base font-medium text-cynBlack text-center">
							<?php
							$subtitle_parts = array_filter([
								$travel_duration,
								//$travel_flight,
							]);
							echo esc_html(implode(' - ', $subtitle_parts));
							?>
						</p>
					</div>

					<!-- Hidden fields -->
					<input type="hidden" name="add-to-cart" value="<?php echo esc_attr($product->get_id()); ?>" />

					<!-- Adult Count -->
					<div class="flex items-center justify-between gap-3 p-3 border border-cynBorder rounded-2xl">
						<span class="fa text-base font-semibold text-cynBlack/60"><?php _e('تعداد بزرگسال', 'jonubgard'); ?></span>
						<div class="flex items-center gap-2 rounded-lg bg-[#FAFAF9] p-2">
							<button type="button" onclick="updateQuantity('adult', 1)" class="quantity-btn-plus-adult p-1.5 flex items-center justify-center rounded-lg bg-cynWhite hover:bg-cynOrange hover:text-cynWhite transition-colors duration-200 border border-[#F1F5F9]">
								<i class="size-4 text-cynBlack"><?php Icon::print('plus'); ?></i>
							</button>
							<input type="number" name="quantity" id="adult-quantity" value="1" min="1" max="20" class="w-6 text-center text-base font-semibold border-none outline-none bg-transparent fa" onchange="updatePrice()" />
							<button type="button" onclick="updateQuantity('adult', -1)" class="quantity-btn-minus-adult p-1.5 flex items-center justify-center rounded-lg bg-cynWhite hover:bg-cynOrange hover:text-cynWhite transition-colors duration-200 border border-[#F1F5F9]">
								<i class="size-4 text-cynBlack"><?php Icon::print('minus'); ?></i>
							</button>
						</div>
					</div>

					<!-- Child Count -->
					<div class="flex items-center justify-between gap-3 p-3 border border-cynBorder rounded-2xl">
						<span class="fa text-base font-semibold text-cynBlack/60"><?php _e('تعداد کودک', 'jonubgard'); ?></span>
						<div class="flex items-center gap-2 rounded-lg bg-[#FAFAF9] p-2">
							<button type="button" onclick="updateQuantity('child', 1)" class="quantity-btn-plus-child p-1.5 flex items-center justify-center rounded-lg bg-cynWhite hover:bg-cynOrange hover:text-cynWhite transition-colors duration-200 border border-[#F1F5F9]">
								<i class="size-4 text-cynBlack"><?php Icon::print('plus'); ?></i>
							</button>
							<input type="number" name="booking_child_count" id="child-quantity" value="0" min="0" max="20" class="w-6 text-center text-base font-semibold border-none outline-none bg-transparent fa" onchange="updatePrice()" />
							<button type="button" onclick="updateQuantity('child', -1)" class="quantity-btn-minus-child p-1.5 flex items-center justify-center rounded-lg bg-cynWhite hover:bg-cynOrange hover:text-cynWhite transition-colors duration-200 border border-[#F1F5F9]">
								<i class="size-4 text-cynBlack"><?php Icon::print('minus'); ?></i>
							</button>
						</div>
					</div>

					<!-- Guest Name -->
					<div class="w-full">
						<input type="text" name="booking_guest_name" id="guest-name" class="h-[72px] p-3 border border-cynBorder rounded-2xl w-full text-right text-base font-medium outline-none bg-transparent placeholder:text-[#9E9E9E]" required placeholder="<?php _e('نام مهمان', 'jonubgard'); ?>" />
					</div>

					<!-- Total Cost -->
					<div class="flex items-center justify-between gap-3">
						<span class="fa text-xl font-semibold text-cynBlack"><?php _e('مجموع هزینه :', 'jonubgard'); ?></span>
						<span id="total-cost" class="text-xl font-semibold text-cynBlack"><?php echo wc_price($adult_price); ?></span>
					</div>

					<!-- Book Now Button -->
					<button type="submit" class="secondary-btn w-full text-white">
						<?php _e('رزرو کنید', 'jonubgard'); ?>
					</button>
				</form>

				<!-- Hidden data for JavaScript -->
				<script type="application/json" id="booking-data">
					{
						"adultPrice": <?php echo esc_js($adult_price); ?>
					}
				</script>
			</div>
		</div>

	</section>

	<section class="fixed bottom-0 left-0 right-0 flex lg:hidden z-20">

		<a href="tel:<?php echo get_option('phone_number_support') ?>" class="w-1/2 bg-cynWhite border border-cynOrange py-3 text-xl font-medium text-cynOrange flex gap-1 justify-center items-center">
			<i class="size-6 -rotate-90 text-cynOrange stroke-2"><?php Icon::print('Phone,-Call-2'); ?></i>
			<span class="fa"><?php _e('مشاوره رایگان', 'jonubgard') ?></span>
		</a>

		<div class="w-1/2 text-white bg-cynOrange py-3 text-base font-medium flex justify-center items-center cursor-pointer" modal-opener data-modal-name="booking-modal">
			<?php _e('رزرو کنید', 'jonubgard'); ?>
		</div>

	</section>

	<section class="container flex justify-center items-center h-fit top-1/2 -translate-y-1/2 w-0 fixed inset-0 z-50 opacity-0 pointer-events-none data-[active='true']:!w-10/12 data-[active='true']:opacity-100 data-[active='true']:pointer-events-auto duration-500" modal data-modal-name="booking-modal" data-active="false">

		<form method="get" action="<?php echo esc_url($product->get_permalink()); ?>" class="w-full p-6 bg-cynWhite rounded-3xl shadow-item flex flex-col gap-6 justify-center items-center [&>div]:w-full relative">

			<div class="absolute top-3 right-3 w-fit cursor-pointer" modal-closer data-modal-name="booking-modal">
				<i class="size-10 text-cynRed [&_svg]:rotate-45"><?php Icon::print('Plus,-Add'); ?></i>
			</div>

			<div class="flex flex-col gap-3 justify-center items-center">
				<p class="text-xl font-bold text-center"><?php _e('رزرو تور', 'jonubgard'); ?></p>
				<p class="text-base font-medium text-cynBlack text-center">
					<?php
					$subtitle_parts = array_filter([
						$travel_duration,
						//$travel_flight,
					]);
					echo esc_html(implode(' - ', $subtitle_parts));
					?>
				</p>
			</div>

			<!-- Hidden fields -->
			<input type="hidden" name="add-to-cart" value="<?php echo esc_attr($product->get_id()); ?>" />

			<!-- Adult Count -->
			<div class="flex items-center justify-between gap-3 p-3 border border-cynBorder rounded-2xl">
				<span class="fa text-base font-semibold text-cynBlack/60"><?php _e('تعداد بزرگسال', 'jonubgard'); ?></span>
				<div class="flex items-center gap-2 rounded-lg bg-[#FAFAF9] p-2">
					<button type="button" onclick="updateQuantity('adult', 1)" class="quantity-btn-plus-adult p-1.5 flex items-center justify-center rounded-lg bg-cynWhite hover:bg-cynOrange hover:text-cynWhite transition-colors duration-200 border border-[#F1F5F9]">
						<i class="size-4 text-cynBlack"><?php Icon::print('plus'); ?></i>
					</button>
					<input type="number" name="quantity" id="adult-quantity" value="1" min="1" max="20" class="w-6 text-center text-base font-semibold border-none outline-none bg-transparent fa" onchange="updatePrice()" />
					<button type="button" onclick="updateQuantity('adult', -1)" class="quantity-btn-minus-adult p-1.5 flex items-center justify-center rounded-lg bg-cynWhite hover:bg-cynOrange hover:text-cynWhite transition-colors duration-200 border border-[#F1F5F9]">
						<i class="size-4 text-cynBlack"><?php Icon::print('minus'); ?></i>
					</button>
				</div>
			</div>

			<!-- Child Count -->
			<div class="flex items-center justify-between gap-3 p-3 border border-cynBorder rounded-2xl">
				<span class="fa text-base font-semibold text-cynBlack/60"><?php _e('تعداد کودک', 'jonubgard'); ?></span>
				<div class="flex items-center gap-2 rounded-lg bg-[#FAFAF9] p-2">
					<button type="button" onclick="updateQuantity('child', 1)" class="quantity-btn-plus-child p-1.5 flex items-center justify-center rounded-lg bg-cynWhite hover:bg-cynOrange hover:text-cynWhite transition-colors duration-200 border border-[#F1F5F9]">
						<i class="size-4 text-cynBlack"><?php Icon::print('plus'); ?></i>
					</button>
					<input type="number" name="booking_child_count" id="child-quantity" value="0" min="0" max="20" class="w-6 text-center text-base font-semibold border-none outline-none bg-transparent fa" onchange="updatePrice()" />
					<button type="button" onclick="updateQuantity('child', -1)" class="quantity-btn-minus-child p-1.5 flex items-center justify-center rounded-lg bg-cynWhite hover:bg-cynOrange hover:text-cynWhite transition-colors duration-200 border border-[#F1F5F9]">
						<i class="size-4 text-cynBlack"><?php Icon::print('minus'); ?></i>
					</button>
				</div>
			</div>

			<!-- Guest Name -->
			<div class="w-full">
				<input type="text" name="booking_guest_name" id="guest-name" class="h-[72px] p-3 border border-cynBorder rounded-2xl w-full text-right text-base font-medium outline-none bg-transparent placeholder:text-[#9E9E9E]" required placeholder="<?php _e('نام مهمان', 'jonubgard'); ?>" />
			</div>

			<!-- Total Cost -->
			<div class="flex items-center justify-between gap-3">
				<span class="fa text-xl font-semibold text-cynBlack"><?php _e('مجموع هزینه :', 'jonubgard'); ?></span>
				<span id="total-cost" class="text-xl font-semibold text-cynBlack"><?php echo wc_price($adult_price); ?></span>
			</div>

			<!-- Book Now Button -->
			<button type="submit" class="secondary-btn w-full text-white">
				<?php _e('رزرو کنید', 'jonubgard'); ?>
			</button>
		</form>

		<!-- Hidden data for JavaScript -->
		<script type="application/json" id="booking-data">
			{
				"adultPrice": <?php echo esc_js($adult_price); ?>
			}
		</script>

	</section>

</main>

<?php get_footer(); ?>