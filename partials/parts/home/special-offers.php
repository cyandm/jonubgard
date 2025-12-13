<?php

use Cyan\Theme\Helpers\Templates;

$home_page_id = get_option('page_on_front');

$specialOffersQuery = new WP_Query([
    'post_type' => 'product',
    'posts_per_page' => 4,
    'tax_query' => [
        [
            'taxonomy' => 'product_cat',
            'field' => 'slug',
            'terms' => 'special-offers',
        ],
    ],
]);

if (!$specialOffersQuery->have_posts()) return;

$home_special_offers_title = get_field('home_special_offers_title', $home_page_id);
?>

<section class="my-14 flex flex-col gap-5 container">

    <div class="flex items-center">

        <h2 class="text-3xl md:text-5xl font-extrabold text-cynBlack max-md:text-center max-md:w-full">
            <?php echo $home_special_offers_title; ?>
        </h2>

    </div>

    <div class="">
        <swiper-container slides-per-view="4" space-between="0" breakpoints='{"0": {"slidesPerView": 1.4}, "520": {"slidesPerView": 1.6}, "640": {"slidesPerView": 2.2}, "768": {"slidesPerView": 2.5}, "1024": {"slidesPerView": 3.5}, "1280": {"slidesPerView": 4}}'>
            <?php
            if ($specialOffersQuery->have_posts()) :
                while ($specialOffersQuery->have_posts()) :
                    $specialOffersQuery->the_post();
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