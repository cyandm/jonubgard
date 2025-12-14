<?php

use Cyan\Theme\Helpers\Icon;

$home_page_id = get_option('page_on_front');

$home_your_camera_title = get_field('home_your_camera_title', $home_page_id);
$home_your_camera_content = get_field('home_your_camera_content', $home_page_id);
$home_your_camera_button = get_field('home_your_camera_button', $home_page_id);

$home_your_camera_images = [];
for ($i = 1; $i <= 3; $i++) {
    $home_your_camera_images[] = get_field('home_your_camera_image_' . $i, $home_page_id);
}

if (!$home_your_camera_title || !$home_your_camera_content || !$home_your_camera_button || !$home_your_camera_button['url'] || !$home_your_camera_button['title'] || !$home_your_camera_images[0] || !$home_your_camera_images[1] || !$home_your_camera_images[2]) return;

?>

<section class="my-14 flex flex-col gap-5 container">

    <div class="flex flex-col-reverse md:flex-row gap-4">

        <div class="w-full md:w-3/5 flex md:justify-center items-center">

            <div class="flex flex-col gap-2 md:gap-4 w-full">

                <div class="text-3xl font-extrabold md:text-5xl"><?php echo $home_your_camera_title; ?></div>

                <div class="text-base md:text-2xl font-medium text-cynBlack leading-8 md:leading-9"><?php echo $home_your_camera_content; ?></div>

                <a href="<?php echo $home_your_camera_button['url']; ?>" class="secondary-btn text-center md:w-fit text-cynWhite mt-2">
                    <?php echo $home_your_camera_button['title']; ?>
                </a>

            </div>

        </div>

        <div class="w-full md:w-3/5 grid grid-cols-5 grid-rows-7 h-[380px] md:h-[465px]">
            <?php
            foreach ($home_your_camera_images as $index => $image) :
                // First image: large (spans 2 columns and 2 rows) - top-left
                // Second image: top-right (1 column, 1 row)
                // Third image: bottom-right (1 column, 1 row)
                if ($index === 0) :
            ?>
                    <img src="<?php echo wp_get_attachment_image_url($image, 'full'); ?>" alt="<?php echo $home_your_camera_title; ?>" class="w-full h-full object-cover col-span-3 row-span-7 col-start-3 row-start-1">
                <?php elseif ($index === 1) : ?>
                    <img src="<?php echo wp_get_attachment_image_url($image, 'full'); ?>" alt="<?php echo $home_your_camera_title; ?>" class="w-full h-full object-cover col-span-2 row-span-4 col-start-1 row-start-1">
                <?php elseif ($index === 2) : ?>
                    <img src="<?php echo wp_get_attachment_image_url($image, 'full'); ?>" alt="<?php echo $home_your_camera_title; ?>" class="w-full h-full object-cover col-span-2 row-span-3 row-start-5">
                <?php endif; ?>
            <?php endforeach; ?>
        </div>

    </div>

</section>