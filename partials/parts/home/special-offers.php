<?php

use Cyan\Theme\Helpers\Templates;

$home_page_id = get_option('page_on_front');

$home_special_offers_title  = get_field('home_special_offers_title', $home_page_id);
$home_special_offers_select = get_field('home_special_offers_select', $home_page_id);

// Expecting an array of post objects selected in ACF; if empty, skip section
if (empty($home_special_offers_select)) {
    return;
}

// Ensure $home_special_offers_select is an array
if (!is_array($home_special_offers_select)) {
    $home_special_offers_select = [$home_special_offers_select];
}

// Extract post IDs from the selected posts
$selected_post_ids = array_map(function ($post) {
    return is_object($post) ? $post->ID : $post;
}, $home_special_offers_select);

$specialOffersQuery = new WP_Query([
    'post_type'      => 'product',
    'post__in'       => $selected_post_ids,
    'orderby'        => 'post__in', // Preserve ACF selection order
    'posts_per_page' => -1,
]);

if (!$specialOffersQuery->have_posts()) {
    return;
}
?>

<section class="my-14 flex flex-col gap-5 container">

    <div class="flex items-center">

        <h2 class="text-3xl md:text-5xl font-extrabold text-cynBlack max-md:text-center max-md:w-full">
            <?php echo $home_special_offers_title ? $home_special_offers_title : __('پیشنهادات ویژه', 'jonubgard'); ?>
        </h2>

    </div>

    <div class="">
        <swiper-container slides-per-view="4" space-between="0" breakpoints='{"0": {"slidesPerView": 1.4}, "520": {"slidesPerView": 1.6}, "640": {"slidesPerView": 2.2}, "768": {"slidesPerView": 2.5}, "1024": {"slidesPerView": 3.5}, "1280": {"slidesPerView": 4}}'>
            <?php
            if ($specialOffersQuery->have_posts()) :
                while ($specialOffersQuery->have_posts()) :
                    $specialOffersQuery->the_post();
                    global $product;
                    $product = wc_get_product(get_the_ID());
            ?>
                    <swiper-slide>
                        <?php Templates::getCard('product') ?>
                    </swiper-slide>
            <?php
                endwhile;
            endif;
            wp_reset_postdata();
            ?>
        </swiper-container>
    </div>

</section>