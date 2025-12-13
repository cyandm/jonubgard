<?php

use Cyan\Theme\Helpers\Templates;

$home_page_id = get_option('page_on_front');

$travelsQuery = new WP_Query([
    'post_type' => 'product',
    'posts_per_page' => 8,
]);

if (!$travelsQuery->have_posts()) return;

$home_new_travels_title = get_field('home_new_travels_title', $home_page_id);
$home_new_travels_button = get_field('home_new_travels_button', $home_page_id);
?>

<section class="my-14 flex flex-col gap-5">

    <div class="container flex justify-between items-center">

        <h2 class="text-3xl md:text-5xl font-extrabold text-cynBlack max-md:text-center max-md:w-full">
            <?php echo $home_new_travels_title; ?>
        </h2>

        <?php if ($home_new_travels_button): ?>
            <a href="<?php echo esc_url($home_new_travels_button['url']); ?>" class="shadow-item primary-btn text-xl font-medium text-cynBlack hidden md:block">
                <?php echo $home_new_travels_button['title']; ?>
            </a>
        <?php endif; ?>

    </div>

    <div class="">
        <swiper-container slides-per-view="4.5" space-between="0" loop="true" centered-slides="true" initial-slide="1" breakpoints='{"0": {"slidesPerView": 1.5}, "500": {"slidesPerView": 2.1}, "768": {"slidesPerView": 2.5}, "1024": {"slidesPerView": 3.5}, "1280": {"slidesPerView": 4.5}}'>
            <?php
            if ($travelsQuery->have_posts()) :
                while ($travelsQuery->have_posts()) :
                    $travelsQuery->the_post();
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

    <?php if ($home_new_travels_button): ?>
        <div class="container flex justify-center items-center">

            <a href="<?php echo esc_url($home_new_travels_button['url']); ?>" class="shadow-item primary-btn text-xl font-medium text-cynBlack block md:hidden w-full text-center">
                <?php echo $home_new_travels_button['title']; ?>
            </a>

        </div>
    <?php endif; ?>
</section>