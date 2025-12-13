<?php
/* Template name: Archive Destinations */

use Cyan\Theme\Helpers\Templates;
use Cyan\Theme\Helpers\Icon;

get_header();

// Get all destinations
$destinations = get_terms([
    'taxonomy'   => 'destination',
    'hide_empty' => false,
]);

?>

<main id="archive-destinations">

    <!-- Breadcrumb -->
    <?php Templates::getPart('breadcrumb'); ?>

    <section class="container">

        <!-- Destinations List -->
        <div class="space-y-6">

            <?php foreach ($destinations as $destination) :

                // Get ACF fields for this destination
                $dest_collage_images = array(
                    get_field('product_destination_image_1', 'destination_' . $destination->term_id),
                    get_field('product_destination_image_2', 'destination_' . $destination->term_id),
                    get_field('product_destination_image_3', 'destination_' . $destination->term_id),
                );
                $dest_bg_image = get_field('product_destination_card_image', 'destination_' . $destination->term_id);
                $dest_description = term_description($destination->term_id);

                // Get active tours count
                $active_tours_count = 0;
                $args = array(
                    'post_type' => 'product',
                    'tax_query' => array(
                        array(
                            'taxonomy' => 'destination',
                            'field'    => 'term_id',
                            'terms'    => $destination->term_id,
                        ),
                    ),
                    'post_status' => 'publish',
                    'posts_per_page' => -1,
                );
                $destination_products = new WP_Query($args);
                $active_tours_count = $destination_products->found_posts;
                wp_reset_postdata();

                $destination_link = get_term_link($destination);
            ?>

                <!-- Destination Block -->
                <div class="destination-block relative flex flex-col-reverse gap-12 lg:grid grid-cols-1 lg:grid-cols-2 lg:gap-6 bg-white overflow-hidden shadow-item bg-cover bg-center p-5 md:p-10" style="background-image: url('<?php echo wp_get_attachment_image_url($dest_bg_image, 'full'); ?>');">

                    <div class="absolute inset-0 bg-black/30 z-0"></div>

                    <!-- Left Side - Info with Blurred Background -->
                    <div class="relative overflow-hidden z-10">

                        <!-- Content -->
                        <div class="relative z-10 flex flex-col justify-center h-full">

                            <!-- Destination Name -->
                            <h2 class="text-2xl md:text-3xl font-bold text-cynWhite mb-4">
                                <?php echo esc_html($destination->name); ?>
                            </h2>

                            <!-- Description -->
                            <?php if ($dest_description) : ?>
                                <div class="text-base md:text-xl font-bold text-cynWhite mb-3">
                                    <?php echo $dest_description; ?>
                                </div>
                            <?php endif; ?>

                            <!-- Buttons -->
                            <div class="flex items-start flex-col gap-6">
                                <!-- Active Tours Count -->
                                <div class="bg-white/40 backdrop-blur-xl px-3 py-1 rounded-lg shadow-md border border-cynWhite/40 text-base font-medium text-cynWhite flex items-center gap-4 [&_span]:pt-1">
                                    <span>تور فعال</span>
                                    <span><?php echo esc_html($active_tours_count); ?></span>
                                </div>

                                <!-- View Tours Button -->
                                <a href="<?php echo esc_url($destination_link); ?>"
                                    class="primary-btn">
                                    مشاهده تورها
                                </a>
                            </div>

                        </div>
                    </div>

                    <!-- Right Side - Image Collage (3 images) -->
                    <div class="grid grid-cols-3 gap-2 z-10">
                        <?php foreach ($dest_collage_images as $index => $image_id) : ?>
                            <?php if ($image_id) :
                                $image_url = wp_get_attachment_image_url($image_id, 'large');
                            ?>
                                <div class="h-[180px] md:h-80 overflow-hidden">
                                    <img src="<?php echo esc_url($image_url); ?>"
                                        alt="<?php echo esc_attr($destination->name); ?> - تصویر <?php echo $index + 1; ?>"
                                        class="w-full h-full object-cover hover:scale-110 transition-transform duration-300">
                                </div>
                            <?php else : ?>
                                <div class="h-44 md:h-80 bg-gray-200 flex items-center justify-center">
                                    <span class="text-gray-400 text-sm">لطفا تصویر <?php echo $index + 1; ?> را انتخاب نمایید!</span>
                                </div>
                            <?php endif; ?>
                        <?php endforeach; ?>
                    </div>

                </div>

            <?php endforeach; ?>
        </div>

    </section>


</main>

<?php get_footer(); ?>