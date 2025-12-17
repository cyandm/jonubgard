<?php

use Cyan\Theme\Helpers\Templates;

$home_page_id = get_option('page_on_front');

$eventsQuery = new WP_Query([
    'post_type' => 'event',
    'posts_per_page' => -1,
]);

if (!$eventsQuery->have_posts()) return;

$home_events_title = get_field('home_events_title', $home_page_id);
?>

<section class="my-14 flex flex-col gap-5 container">
    <div class="flex items-center">

        <h2 class="text-3xl md:text-5xl font-extrabold text-cynBlack max-md:text-center max-md:w-full">
            <?php echo $home_events_title ? $home_events_title : __('رویدادهای شگفت انگیز', 'jonubgard'); ?>
        </h2>

    </div>

    <div class="">
        <swiper-container slides-per-view="1" space-between="16" pagination="true" pagination-clickable="true" pagination-el=".swiper-pagination">
            <?php
            if ($eventsQuery->have_posts()) :
                while ($eventsQuery->have_posts()) :
                    $eventsQuery->the_post();
            ?>
                    <swiper-slide>
                        <?php Templates::getCard('event') ?>
                    </swiper-slide>
            <?php
                endwhile;
            endif;
            wp_reset_postdata();
            ?>
        </swiper-container>

        <div id="steps-pagination" class="swiper-pagination flex gap-2 mt-7 justify-center [&>.swiper-pagination-bullet]:rounded-full [&>.swiper-pagination-bullet]:bg-cynWhite [&>.swiper-pagination-bullet]:w-11 [&>.swiper-pagination-bullet]:h-[6px] [&>.swiper-pagination-bullet]:duration-500 [&>.swiper-pagination-bullet]:transition-all [&>.swiper-pagination-bullet.swiper-pagination-bullet-active]:bg-cynOrange [&>.swiper-pagination-bullet.swiper-pagination-bullet-active]:w-20"></div>

    </div>

</section>