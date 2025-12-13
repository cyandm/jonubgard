<?php

use Cyan\Theme\Helpers\Templates;

$home_page_id = get_option('page_on_front');

$home_blogs_title = get_field('home_blogs_title', $home_page_id);
$home_blogs_button = get_field('home_blogs_button', $home_page_id);

$blogsQuery = new WP_Query([
    'post_type' => 'post',
    'posts_per_page' => 3,
]);

if (!$blogsQuery->have_posts()) return;

?>

<section class="container my-14 flex flex-col gap-5">

    <div class="flex justify-between items-center">

        <h2 class="text-3xl md:text-5xl font-extrabold text-cynBlack max-md:text-center max-md:w-full">
            <?php echo $home_blogs_title; ?>
        </h2>

        <?php if ($home_blogs_button): ?>
            <a href="<?php echo esc_url($home_blogs_button['url']); ?>" class="shadow-item primary-btn text-xl font-medium text-cynBlack hidden md:block">
                <?php echo $home_blogs_button['title']; ?>
            </a>
        <?php endif; ?>

    </div>

    <?php if ($blogsQuery->have_posts()): ?>
        <div class="grid grid-cols-2 grid-rows-2 md:grid-cols-7 md:grid-rows-2">
            <?php
            $grid_classes = [
                'col-span-2 md:col-span-3 md:row-span-2 md:col-start-5 md:row-start-1',
                'row-start-2 md:col-span-2 md:row-span-2 md:col-start-3 md:row-start-1',
                'row-start-2 md:col-span-2 md:row-span-2 md:col-start-1 md:row-start-1',
            ];
            $index = 0;
            while ($blogsQuery->have_posts()):
                $blogsQuery->the_post();
                $grid_class = isset($grid_classes[$index]) ? $grid_classes[$index] : '';
            ?>
                <div class="<?php echo esc_attr($grid_class); ?>">
                    <?php Templates::getCard('blog') ?>
                </div>
            <?php
                $index++;
            endwhile;
            wp_reset_postdata();
            ?>
        </div>
    <?php endif; ?>

    <?php if ($home_blogs_button): ?>
        <div class="flex justify-center items-center md:hidden">

            <a href="<?php echo esc_url($home_blogs_button['url']); ?>" class="shadow-item secondary-btn text-xl font-medium text-cynWhite w-full text-center">
                <?php echo $home_blogs_button['title']; ?>
            </a>

        </div>
    <?php endif; ?>
</section>