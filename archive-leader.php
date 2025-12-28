<?php

use Cyan\Theme\Helpers\Templates;

$leader_query = new WP_Query([
    'post_type' => 'leader',
    'posts_per_page' => -1
]);

get_header(); ?>

<main class="archive-leader">

    <?php Templates::getPart('breadcrumb') ?>

    <section class="container mb-3 md:mb-5">

        <h1 class="text-3xl md:text-5xl font-extrabold text-cynBlack max-md:text-center"><?php _e('تورلیدرهای جنوبگرد', 'jonubgard'); ?></h1>

    </section>

    <?php if ($leader_query->have_posts()) :
        while ($leader_query->have_posts()) : $leader_query->the_post(); ?>

            <section class="container text-cynBlack flex items-center gap-3 max-md:flex-col-reverse mb-6 md:mb-4">

                <div class="flex flex-col w-full md:w-3/5 justify-center gap-3 md:gap-5">
                    <p class="text-cynBlack text-2xl sm:text-3xl font-extrabold"><?php the_title(); ?></p>
                    <div class="text-cynBlack text-base sm:text-xl font-medium"><?php the_content() ?></div>
                </div>

                <div class="w-full md:w-2/5">
                    <?php if (has_post_thumbnail()): ?>
                        <img src="<?php the_post_thumbnail_url(); ?>"
                            class="w-full h-[390px] sm:h-[482px] object-cover"
                            alt="<?php the_title(); ?>">
                    <?php endif; ?>
                </div>

            </section>


            <?php
            // Collect all leader images
            $leader_images = [];
            for ($i = 1; $i <= 12; $i++) {
                $image_id = get_field('leader_img_' . $i);
                if ($image_id) {
                    $leader_images[] = $image_id;
                }
            }

            $leader_group = 'leader-' . get_the_ID();
            ?>

            <?php if (!empty($leader_images)): ?>
                <section class="mb-14">

                    <div class="container text-cynBlack font-extrabold text-3xl mb-4"><?php _e('تصاویر', 'jonubgard'); ?></div>

                    <swiper-container slides-per-view="4.5" space-between="0" loop="true" centered-slides="true" initial-slide="1" breakpoints='{"0": {"slidesPerView": 1.5}, "500": {"slidesPerView": 2.1}, "768": {"slidesPerView": 2.5}, "1024": {"slidesPerView": 3.5}, "1280": {"slidesPerView": 4.5}}'>

                        <?php foreach ($leader_images as $index => $image_id):
                            $image_url = wp_get_attachment_image_url($image_id, 'full');
                            $image_thumb = wp_get_attachment_image_url($image_id, 'medium_large');
                            $image_caption = wp_get_attachment_caption($image_id) ?: get_the_title();
                        ?>
                            <swiper-slide>
                                <a href="<?php echo esc_url($image_url); ?>"
                                    data-fancybox="<?php echo esc_attr($leader_group); ?>"
                                    data-caption="<?php echo esc_attr($image_caption); ?>"
                                    class="block cursor-pointer group">
                                    <img src="<?php echo esc_url($image_thumb); ?>"
                                        class="w-full h-[370px] object-cover group-hover:opacity-90 transition-opacity"
                                        alt="<?php echo esc_attr($image_caption); ?>">
                                </a>
                            </swiper-slide>
                        <?php endforeach; ?>

                    </swiper-container>

                </section>
            <?php endif; ?>

        <?php endwhile;
        wp_reset_postdata();
    else: ?>
        <p class="text-cynBlack text-center text-2xl font-medium"><?php _e('هیچ تور لیدری پیدا نشد.', 'jonubgard'); ?></p>
    <?php endif; ?>

</main>


<?php get_footer(); ?>