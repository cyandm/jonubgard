<?php

use Cyan\Theme\Helpers\Icon;

$args = get_query_var('args', array());
$travel_image = $args['travel_image'] ?? '';
$mime_type = $args['mime_type'] ?? '';
$is_video = $args['is_video'] ?? false;
$cover = $args['cover'] ?? null;
?>

<swiper-slide class="w-full md:aspect-video aspect-[1/1.1]">
    <?php
    $file_url = $is_video ? wp_get_attachment_url($travel_image) : wp_get_attachment_image_url($travel_image, 'full');
    $poster_url = '';
    $thumb_src = '';
    if ($is_video && !empty($cover)) {
        $poster_url = wp_get_attachment_image_url($cover, 'full');
        $thumb_src = wp_get_attachment_image_url($cover, 'medium_large');
    } elseif ($is_video) {
        // Fallback to featured image if no cover
        $featured_image_id = get_post_thumbnail_id();
        if ($featured_image_id) {
            $poster_url = wp_get_attachment_image_url($featured_image_id, 'full');
            $thumb_src = wp_get_attachment_image_url($featured_image_id, 'medium_large');
        }
    }
    ?>
    <a href="<?php echo esc_url($file_url); ?>"
        data-fancybox="travel-gallery"
        data-type="<?php echo $is_video ? 'html5video' : 'image'; ?>"
        <?php if ($is_video): ?>
        data-src="<?php echo esc_url($file_url); ?>"
        data-format="<?php echo esc_attr($mime_type); ?>"
        <?php if (!empty($poster_url)): ?>
        data-poster="<?php echo esc_url($poster_url); ?>"
        <?php endif; ?>
        <?php if (!empty($thumb_src)): ?>
        data-thumb="<?php echo esc_url($thumb_src); ?>"
        <?php endif; ?>
        <?php endif; ?>
        class="block w-full h-full">
        <?php if ($is_video): ?>
            <div class="relative w-full h-full overflow-hidden">
                <video class="w-full h-full object-cover" preload="metadata">
                    <source src="<?php echo wp_get_attachment_url($travel_image) ?>" type="<?php echo esc_attr($mime_type) ?>">
                    <?php _e('مرورگر شما از پخش ویدیو پشتیبانی نمی‌کند.', 'jonubgard') ?>
                </video>

                <!-- Video Cover Image -->
                <?php if (!empty($cover)): ?>
                    <img src="<?php echo wp_get_attachment_image_url($cover, 'full') ?>"
                        alt="Video Cover"
                        class="absolute inset-0 w-full h-full object-cover video-cover">
                <?php endif; ?>

                <!-- Play Button Overlay -->
                <div class="absolute inset-0 flex items-center justify-center bg-black/30 video-play-overlay cursor-pointer group hover:bg-black/40 transition-all duration-300">
                    <i class="w-16 h-auto"><?php echo file_get_contents(THEME_DIR . '/assets/image/play.php') ?></i>
                </div>
            </div>
        <?php else: ?>
            <img src="<?php echo wp_get_attachment_image_url($travel_image, 'full') ?>" alt="Travel Gallery" class="w-full h-full object-cover">
        <?php endif; ?>
    </a>
</swiper-slide>