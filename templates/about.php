<?php /* Template Name: about */ ?>

<?php

use Cyan\Theme\Helpers\Templates;

$about_hero_image_desktop = get_field('about_hero_image_desktop');
$about_hero_image_mobile = get_field('about_hero_image_mobile');
$about_gallery_title = get_field('about_gallery_title');
$about_content_title = get_field('about_content_title');
$about_content_image = get_field('about_content_image');
$about_content_text = get_field('about_content_text');
$about_content_image_url = wp_get_attachment_url($about_content_image);

$gallery_query = new WP_Query(array(
    'post_type' => 'gallery',
    'posts_per_page' => -1,
));

get_header(); ?>

<main>

    <section class="hero -mt-[var(--header-height)] ">
        <?php echo wp_get_attachment_image($about_hero_image_desktop, 'full', false, ['class' => 'w-full object-cover max-md:hidden']) ?>
        <?php echo wp_get_attachment_image($about_hero_image_mobile, 'full', false, ['class' => 'w-full object-cover md:hidden']) ?>
    </section>

    <?php if ($gallery_query->have_posts()): ?>

        <section class="flex flex-col gap-4 my-14">

            <p class="text-3xl md:text-5xl font-extrabold text-cynBlack text-center"><?php $about_gallery_title ? $about_gallery_title : _e('گالری تصاویر', 'jonubgard'); ?></p>

            <swiper-container slides-per-view="5.5" space-between="12" loop="true" centered-slides="true" initial-slide="1" breakpoints='{"0": {"slidesPerView": 1.5}, "500": {"slidesPerView": 2.1}, "768": {"slidesPerView": 2.5}, "1024": {"slidesPerView": 3.5}, "1280": {"slidesPerView": 5.5}}'>

                <?php while ($gallery_query->have_posts()): $gallery_query->the_post(); ?>

                    <swiper-slide class="py-2">
                        <?php Templates::getCard('gallery', ['post-id' => get_the_ID()]) ?>
                    </swiper-slide>

                <?php endwhile; ?>

            </swiper-container>

        </section>

    <?php endif; ?>


    <?php if ($about_content_title && $about_content_text && $about_content_image_url): ?>

        <section class="container my-14">

            <div class="flex max-lg:flex-col-reverse gap-11">

                <div class="w-full lg:w-1/2 flex flex-col gap-3 lg:gap-5 font-medium text-xl leading-9 text-cynBlack">
                    <p class="font-extrabold text-3xl md:text-5xl text-cynBlack"><?php echo $about_content_title; ?></p>
                    <?php echo $about_content_text; ?>
                </div>

                <div class="w-full lg:w-1/2 bg-no-repeat bg-cover bg-center min-h-60 md:min-h-[380px]" style="background-image: url('<?php echo $about_content_image_url ?>');"></div>

            </div>

        </section>

    <?php endif; ?>

    <?php Templates::getPart('faq') ?>

</main>



<?php get_footer(); ?>