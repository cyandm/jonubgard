<?php

/**
 * Product Card Template
 * @package CyanTheme
 */

use Cyan\Theme\Helpers\Icon;

global $product;

if (!$product) {
    return;
}

// Get product data
$product_id = $product->get_id();
$product_price = wc_price($product->get_price());
$product_title = $product->get_name();
$product_link = get_permalink($product_id);
$product_image = get_the_post_thumbnail_url($product_id, 'full');
$product_stock = $product->get_stock_quantity();

// Get ACF fields (no defaults - only show if data exists)
$duration = get_field('travel_duration', $product_id);
$location = get_field('travel_location', $product_id);
$start_date = get_field('travel_start', $product_id);
$price_payment = get_field('travel_payment', $product_id);
$price_payment_discount = get_field('travel_payment_discount', $product_id);

?>

<a href="<?php echo esc_url($product_link); ?>" class="product-card flex overflow-hidden relative bg-cover bg-center bg-no-repeat group<?php echo !$product_image ? 'bg-gray-400' : ''; ?>" <?php echo $product_image ? 'style="background-image: url(\'' . esc_url($product_image) . '\');"' : ''; ?>>

    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 group-hover:bg-black/30 duration-300 z-0"></div>

    <!-- Image Section with All Content Overlaid -->
    <div class="relative bg-gradient-to-t from-black/80 via-black/30 to-transparent py-3 px-4 flex flex-col justify-between w-full min-h-[395px] md:min-h-[480px]">

        <div class="flex items-center justify-between">

            <?php if ($duration) : ?>
                <div class="bg-white/50 backdrop-blur-2xl border border-white/20 text-white px-2 py-1.5 rounded-lg flex items-center gap-1 text-sm font-semibold">
                    <span class="size-5 stroke-2">
                        <?php Icon::print('time-clock'); ?>
                    </span>
                    <span class="pt-1"><?php echo esc_html($duration); ?></span>
                </div>
            <?php endif; ?>

            <?php if ($product_stock && $product_stock <= 10) : ?>
                <div class="bg-cynRed/50 border border-cynRed/50 group-hover:bg-cynRed group-hover:text-cynWhite backdrop-blur-2xl text-[#FF9696] px-2 py-1.5 rounded-lg flex items-center gap-1.5 text-sm font-semibold transition-all duration-300">
                    <span class="size-5 stroke-2">
                        <?php Icon::print('User,Profile-2'); ?>
                    </span>
                    <span class="pt-1"><?php echo esc_html($product_stock); ?> <?php _e('نفر', 'jonubgard'); ?></span>
                </div>
            <?php endif; ?>

        </div>


        <div class="flex flex-col gap-1">

            <div class="text-white mb-3">

                <h3 class="text-lg font-medium mb-1 w-full">
                    <?php echo esc_html($product_title); ?>
                </h3>

                <div class="flex justify-between">

                    <?php if ($location) : ?>
                        <div class="flex items-center gap-1 text-sm">
                            <span class="size-5">
                                <?php Icon::print('Marker,-Pin'); ?>
                            </span>
                            <span class="pt-1"><?php echo esc_html($location); ?></span>
                        </div>
                    <?php endif; ?>

                    <?php if ($start_date) : ?>
                        <div class="flex items-center gap-1 text-sm font-semibold text-cynOrange">
                            <span class="size-5">
                                <?php Icon::print('calendar-schedule-1-1'); ?>
                            </span>
                            <span class="pt-1"><?php echo esc_html($start_date); ?></span>
                        </div>
                    <?php endif; ?>
                </div>

            </div>

            <?php if ($product_price) : ?>
                <div class="bg-cynWhite/50 font-semibold text-sm pt-1.5 border border-cynWhite/40 backdrop-blur-2xl text-cynWhite px-3 py-1 flex items-center justify-between rounded-md">
                    <span><?php _e('پیش پرداخت', 'jonubgard'); ?></span>
                    <?php echo $product_price; ?>
                </div>
            <?php endif; ?>

            <?php if ($price_payment || $price_payment_discount) : ?>

                <div class="<?php echo (!empty($price_payment_discount) ? 'bg-cynRed/50 border-cynRed/50 text-[#FF9696] group-hover:bg-cynRed' : 'bg-cynOrange/50 border-cynOrange/40 group-hover:bg-cynOrange'); ?> text-cynWhite border backdrop-blur-2xl px-3 py-1 flex items-center justify-between rounded-md transition-all duration-300">

                    <span class="font-medium text-sm pt-1"><?php _e('مبلغ کل', 'jonubgard'); ?></span>

                    <div class="flex flex-col">
                        <?php if ($price_payment) : ?>
                            <span class="font-medium <?php echo (!empty($price_payment_discount) ? 'line-through opacity-70' : ''); ?> text-sm pt-1"><?php echo esc_html($price_payment); ?> دلار</span>
                        <?php endif; ?>
                        <?php if ($price_payment_discount) : ?>
                            <span class="font-medium text-sm pt-1"><?php echo esc_html($price_payment_discount); ?> دلار</span>
                        <?php endif; ?>
                    </div>
                </div>
            <?php endif; ?>
        </div>

    </div>

</a>