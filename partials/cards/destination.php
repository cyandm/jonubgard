<?php

/**
 * Destination Card Template
 * @package CyanTheme
 * 
 * Supports multiple taxonomies: 'destination' and 'experience'
 * 
 * Args:
 * - destination: (required) Term object
 * - variant: (optional) 'default' | 'experience' - Controls display variant
 * - show_tour_count: (optional) true/false - Show/hide tour count (default: true)
 */

// Get args passed from Templates::getCard
$args = get_query_var('args', []);
$destination = $args['destination'] ?? null;
$variant = $args['variant'] ?? 'default';
$show_tour_count = $args['show_tour_count'] ?? true;

if (!$destination) {
    return;
}

// Get term data
$term_id = $destination->term_id;
$term_name = $destination->name;
$term_taxonomy = $destination->taxonomy ?? 'destination';
$term_link = get_term_link($destination);

// Get image based on taxonomy
$term_image = null;
if ($term_taxonomy === 'destination') {
    $term_image = get_field('product_destination_card_image', 'destination_' . $term_id);
} elseif ($term_taxonomy === 'experience') {
    // Try experience image field, fallback to destination field name
    $term_image = get_field('product_destination_card_image', 'experience_' . $term_id);
    if (!$term_image) {
        $term_image = get_field('product_experience_card_image', 'experience_' . $term_id);
    }
}

// Get active tours count (only if show_tour_count is true)
$active_tours_count = 0;
if ($show_tour_count) {
    $args_query = array(
        'post_type' => 'product',
        'tax_query' => array(
            array(
                'taxonomy' => $term_taxonomy,
                'field'    => 'term_id',
                'terms'    => $term_id,
            ),
        ),
        'post_status' => 'publish',
        'posts_per_page' => -1,
    );
    $term_products = new WP_Query($args_query);
    $active_tours_count = $term_products->found_posts;
    wp_reset_postdata();
}

$image_url = $term_image ? wp_get_attachment_image_url($term_image, 'full') : '';

?>

<a href="<?php echo esc_url($term_link); ?>" class="destination-card flex overflow-hidden relative bg-cover bg-center bg-no-repeat group<?php echo !$image_url ? 'bg-gray-400' : ''; ?>" <?php echo $image_url ? 'style="background-image: url(\'' . esc_url($image_url) . '\');"' : ''; ?>>

    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 group-hover:bg-black/30 duration-300 z-0"></div>

    <!-- Image Section with Overlay -->
    <div class="w-full h-[395px] flex flex-col gap-3 justify-end px-4.5 py-3 z-10 relative">

        <!-- Term Name at Bottom Right (above overlay) -->
        <div class="text-white text-xl md:text-2xl font-bold">
            <?php echo esc_html($term_name); ?>
        </div>

        <!-- Bottom Overlay with Tour Info (only if show_tour_count is true) -->
        <?php if ($show_tour_count): ?>
            <div class="bg-cynWhite/50 font-semibold text-sm [&_span]:pt-1 [&_span]:text-xs [&_span]:font-medium border border-cynWhite/40 backdrop-blur-2xl text-cynWhite px-3 py-1 flex items-center justify-between rounded-md">

                <!-- Left: Active Tours Count -->
                <span>
                    <?php _e('تور فعال', 'jonubgard'); ?>
                </span>

                <span>
                    <?php echo esc_html($active_tours_count); ?>
                </span>

            </div>
        <?php endif; ?>

    </div>

</a>