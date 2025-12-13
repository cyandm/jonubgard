<?php

use Cyan\Theme\Helpers\Templates;

$new_posts = get_posts([
    'posts_per_page' => 4,
    'post__not_in' => [get_the_ID()]
]);
?>

<div class="w-full lg:w-1/4 relative max-lg:mt-14">

    <div class="flex flex-col gap-4 lg:sticky lg:top-4">

        <p class="text-2xl font-extrabold max-lg:text-center"><?php _e('شاید بپسندید', 'jonubgard'); ?></p>

        <div class="hidden lg:flex flex-col gap-4 [&_a]:last:hidden">
            <?php foreach ($new_posts as $post) :
                setup_postdata($post); ?>
                <?php Templates::getCard('blog'); ?>
            <?php endforeach;
            wp_reset_postdata(); ?>
        </div>

        <div class="lg:hidden">
            <swiper-container slides-per-view="4.5" space-between="0" loop="true" centered-slides="true" initial-slide="1" breakpoints='{"0": {"slidesPerView": 1.5}, "500": {"slidesPerView": 2.1}, "768": {"slidesPerView": 2.5}, "1024": {"slidesPerView": 3.5}, "1280": {"slidesPerView": 4.5}}'>
                <?php foreach ($new_posts as $post) :
                    setup_postdata($post); ?>
                    <swiper-slide>
                        <?php Templates::getCard('blog'); ?>
                    </swiper-slide>
                <?php endforeach;
                wp_reset_postdata(); ?>
            </swiper-container>
        </div>

    </div>

</div>