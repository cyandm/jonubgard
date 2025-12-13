<?php
$postId = $args['post-id'] ?? get_the_ID();
$gallery_group = 'gallery-' . $postId;

// Collect all gallery images (up to 30)
$gallery_images = [];
for ($i = 1; $i <= 30; $i++) {
    $image_id = get_field('gallery_img_' . $i, $postId);
    if ($image_id) {
        $gallery_images[] = $image_id;
    }
}

// Get first image URL for fancybox trigger
$first_image_url = !empty($gallery_images) ? wp_get_attachment_image_url($gallery_images[0], 'full') : '';
?>

<?php if (!empty($first_image_url)): ?>
    <a href="<?php echo esc_url($first_image_url); ?>"
        data-fancybox="<?php echo esc_attr($gallery_group); ?>"
        data-caption="<?php echo esc_attr(get_the_title($postId)); ?>"
        class="w-full flex flex-col gap-2 cursor-pointer bg-cynWhite p-5 rounded-3xl justify-center items-center shadow-item group hover:shadow-lg transition-all duration-300">

        <div class="flex flex-wrap gap-3">
            <?php
            // Show only first 4 images in card
            for ($i = 0; $i < min(4, count($gallery_images)); $i++):
                $image_id = $gallery_images[$i];
            ?>
                <?php echo wp_get_attachment_image($image_id, 'thumbnail', false, ['class' => 'aspect-square w-[calc(50%-6px)] object-cover group-hover:opacity-90 transition-opacity']); ?>
            <?php endfor; ?>
        </div>

        <p class="text-xl font-semibold text-cynBlack text-center pt-1 group-hover:text-cynOrange transition-colors">
            <?php echo esc_html(get_the_title($postId)); ?>
        </p>
    </a>
<?php else: ?>
    <div class="flex flex-wrap gap-3">
        <?php for ($i = 1; $i <= 4; $i++): ?>
            <?php echo wp_get_attachment_image(get_field('gallery_img_' . $i, $postId), 'thumbnail', false, ['class' => 'aspect-square w-[calc(50%-6px)] object-cover group-hover:opacity-90 transition-opacity']); ?>
        <?php endfor; ?>
    </div>
    <p class="text-xl font-semibold text-cynBlack text-center pt-1">
        <?php echo esc_html(get_the_title($postId)); ?>
    </p>
<?php endif; ?>

<!-- Hidden links for fancybox (all images) -->
<?php if (!empty($gallery_images) && count($gallery_images) > 1): ?>
    <div class="hidden">
        <?php
        // Start from index 1 because first image is already in the trigger link
        for ($i = 1; $i < count($gallery_images); $i++):
            $image_id = $gallery_images[$i];
            $image_url = wp_get_attachment_image_url($image_id, 'full');
            $image_caption = wp_get_attachment_caption($image_id) ?: get_the_title($postId);
        ?>
            <a href="<?php echo esc_url($image_url); ?>"
                data-fancybox="<?php echo esc_attr($gallery_group); ?>"
                data-caption="<?php echo esc_attr($image_caption); ?>">
            </a>
        <?php endfor; ?>
    </div>
<?php endif; ?>