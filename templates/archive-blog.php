<?php
/* Template Name: Archive Blog */

defined('ABSPATH') || exit;

use Cyan\Theme\Helpers\Templates;

$week_selected_title = get_field('week_selected_title');
$week_selected_posts = get_field('week_selected_posts');
$latest_title = get_field('latest_title');
$travelogue_image_desktop = get_field('travelogue_image_desktop');
$travelogue_image_mobile = get_field('travelogue_image_mobile');
$travelogue_selected_title = get_field('travelogue_selected_title');
$travelogue_selected_posts = get_field('travelogue_selected_posts');
$educational_title = get_field('educational_title');
$lifestyles_title = get_field('lifestyles_title');

// Query for latest posts section
$latest_posts_query = new WP_Query([
    'post_type' => 'post',
    'posts_per_page' => 12,
    'post_status' => 'publish',
    'orderby' => 'date',
    'order' => 'DESC'
]);

// Query for travelogue posts section (from ACF or fallback to category)
if ($travelogue_selected_posts && !empty($travelogue_selected_posts)) {
    $travelogue_posts_query = null; // Will use ACF posts
} else {
    $travelogue_posts_query = new WP_Query([
        'post_type' => 'travelogue',
        'posts_per_page' => 12,
        'post_status' => 'publish',
    ]);
}

// Query for educational posts section
$educational_posts_query = new WP_Query([
    'post_type' => 'post',
    'posts_per_page' => 12,
    'post_status' => 'publish',
    'category_name' => 'educational', // Use category slug instead of category__in
]);

// Query for lifestyle posts section
$lifestyles_posts_query = new WP_Query([
    'post_type' => 'post',
    'posts_per_page' => 12,
    'post_status' => 'publish',
    'category_name' => 'lifestyles', // Use category slug instead of category__in
]);

get_header();
?>

<main class="archive-blog">

    <?php Templates::getPart('breadcrumb'); ?>

    <section class="container flex flex-col gap-3 md:gap-5">

        <p class="text-cynBlack text-3xl md:text-5xl max-md:text-center font-extrabold"><?php echo ($week_selected_title) ? $week_selected_title : __('منتخب هفته', 'jonubgard'); ?></p>

        <?php
        // If posts are selected, display them
        if ($week_selected_posts && !empty($week_selected_posts)) {
            $posts_to_show = $week_selected_posts;
        } else {
            // If no posts are selected, get the latest 3 posts
            $week_selected_query = new WP_Query([
                'post_type' => 'post',
                'posts_per_page' => 3,
                'post_status' => 'publish',
                'orderby' => 'date',
                'order' => 'DESC'
            ]);
            $posts_to_show = $week_selected_query->posts;
        }
        ?>

        <?php if ($posts_to_show && !empty($posts_to_show)) : ?>
            <div class="grid grid-cols-2 grid-rows-2 md:grid-cols-7 md:grid-rows-2">
                <?php
                $grid_classes = [
                    'col-span-2 md:col-span-3 md:row-span-2 md:col-start-5 md:row-start-1',
                    'row-start-2 md:col-span-2 md:row-span-2 md:col-start-3 md:row-start-1',
                    'row-start-2 md:col-span-2 md:row-span-2 md:col-start-1 md:row-start-1',
                ];
                $index = 0;
                foreach ($posts_to_show as $post) :
                    setup_postdata($post); // Setup global post data
                    $grid_class = isset($grid_classes[$index]) ? $grid_classes[$index] : '';
                ?>
                    <div class="<?php echo esc_attr($grid_class); ?>">
                        <?php Templates::getCard('blog'); ?>
                    </div>
                <?php
                    $index++;
                endforeach;

                // Always reset post data after setup_postdata
                wp_reset_postdata();
                ?>
            </div>
        <?php endif; ?>

    </section>

    <section class="flex flex-col gap-3 md:gap-5 my-14">

        <div class="container">
            <p class="text-cynBlack text-3xl md:text-5xl max-md:text-center font-extrabold"><?php echo ($latest_title) ? $latest_title : __('جدیدترین ها', 'jonubgard'); ?></p>
        </div>

        <swiper-container slides-per-view="4.5" space-between="0" loop="true" centered-slides="true" initial-slide="1" breakpoints='{"0": {"slidesPerView": 1.5}, "500": {"slidesPerView": 2.1}, "768": {"slidesPerView": 2.5}, "1024": {"slidesPerView": 3.5}, "1280": {"slidesPerView": 4.5}}'>
            <?php while ($latest_posts_query->have_posts()) : $latest_posts_query->the_post(); ?>

                <swiper-slide>
                    <?php Templates::getCard('blog'); ?>
                </swiper-slide>

            <?php endwhile; ?>
        </swiper-container>

    </section>

    <?php if ($travelogue_image_desktop || $travelogue_image_mobile) : ?>
        <section class="travelogue my-14">
            <div class="w-full">
                <a href="<?php echo $travelogue_image_link['url']; ?>">
                    <img src="<?php echo wp_get_attachment_image_url($travelogue_image_desktop, 'full'); ?>" alt="<?php esc_attr_e('بنر سفرنامه', 'jonubgard'); ?>" class="w-full h-full object-cover max-md:hidden">
                    <img src="<?php echo wp_get_attachment_image_url($travelogue_image_mobile, 'full'); ?>" alt="<?php esc_attr_e('بنر سفرنامه', 'jonubgard'); ?>" class="w-full h-full object-cover md:hidden">
                </a>
            </div>
        </section>
    <?php endif; ?>

    <section class="flex flex-col gap-3 md:gap-5 my-14">

        <div class="container">
            <p class="text-cynBlack text-3xl md:text-5xl max-md:text-center font-extrabold"><?php echo ($travelogue_selected_title) ? $travelogue_selected_title : __('سفرنامه ها', 'jonubgard'); ?></p>
        </div>

        <?php if ($travelogue_selected_posts && !empty($travelogue_selected_posts)) : ?>
            <swiper-container slides-per-view="4.5" space-between="0" loop="true" centered-slides="true" initial-slide="1" breakpoints='{"0": {"slidesPerView": 1.5}, "500": {"slidesPerView": 2.1}, "768": {"slidesPerView": 2.5}, "1024": {"slidesPerView": 3.5}, "1280": {"slidesPerView": 4.5}}'>
                <?php foreach ($travelogue_selected_posts as $post) :
                    setup_postdata($post); ?>
                    <swiper-slide>
                        <?php Templates::getCard('blog'); ?>
                    </swiper-slide>
                <?php endforeach; ?>
            </swiper-container>
            <?php wp_reset_postdata(); ?>
        <?php elseif ($travelogue_posts_query && $travelogue_posts_query->have_posts()) : ?>
            <swiper-container slides-per-view="4.5" space-between="0" loop="true" centered-slides="true" initial-slide="1" breakpoints='{"0": {"slidesPerView": 1.5}, "500": {"slidesPerView": 2.1}, "768": {"slidesPerView": 2.5}, "1024": {"slidesPerView": 3.5}, "1280": {"slidesPerView": 4.5}}'>
                <?php while ($travelogue_posts_query->have_posts()) : $travelogue_posts_query->the_post(); ?>
                    <swiper-slide>
                        <?php Templates::getCard('travelogue'); ?>
                    </swiper-slide>
                <?php endwhile; ?>
            </swiper-container>
            <?php wp_reset_postdata(); ?>
        <?php endif; ?>

    </section>

    <?php if ($educational_posts_query->have_posts()) : ?>
        <section class="flex flex-col gap-3 md:gap-5 my-14">

            <div class="container">
                <p class="text-cynBlack text-3xl md:text-5xl max-md:text-center font-extrabold"><?php echo ($educational_title) ? $educational_title : __('آموزشی ها', 'jonubgard'); ?></p>
            </div>

            <swiper-container slides-per-view="4.5" space-between="0" loop="true" centered-slides="true" initial-slide="1" breakpoints='{"0": {"slidesPerView": 1.5}, "500": {"slidesPerView": 2.1}, "768": {"slidesPerView": 2.5}, "1024": {"slidesPerView": 3.5}, "1280": {"slidesPerView": 4.5}}'>
                <?php while ($educational_posts_query->have_posts()) : $educational_posts_query->the_post(); ?>

                    <swiper-slide>
                        <?php Templates::getCard('blog'); ?>
                    </swiper-slide>

                <?php endwhile; ?>
            </swiper-container>
            <?php wp_reset_postdata(); ?>

        </section>
    <?php endif; ?>

    <?php if ($lifestyles_posts_query->have_posts()) : ?>
        <section class="flex flex-col gap-3 md:gap-5 my-14">

            <div class="container">
                <p class="text-cynBlack text-3xl md:text-5xl max-md:text-center font-extrabold"><?php echo ($lifestyles_title) ? $lifestyles_title : __('لایف استایل ها', 'jonubgard'); ?></p>
            </div>

            <swiper-container slides-per-view="4.5" space-between="0" loop="true" centered-slides="true" initial-slide="1" breakpoints='{"0": {"slidesPerView": 1.5}, "500": {"slidesPerView": 2.1}, "768": {"slidesPerView": 2.5}, "1024": {"slidesPerView": 3.5}, "1280": {"slidesPerView": 4.5}}'>
                <?php while ($lifestyles_posts_query->have_posts()) : $lifestyles_posts_query->the_post(); ?>

                    <swiper-slide>
                        <?php Templates::getCard('blog'); ?>
                    </swiper-slide>

                <?php endwhile; ?>
            </swiper-container>
            <?php wp_reset_postdata(); ?>

        </section>
    <?php endif; ?>

</main>

<?php get_footer();
