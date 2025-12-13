<?php
/* Template Name: Archive Travelogue */

defined('ABSPATH') || exit;

use Cyan\Theme\Helpers\Templates;
use Cyan\Theme\Helpers\Icon;

// Get current page number
$paged = (get_query_var('paged')) ? get_query_var('paged') : 1;

// Query for latest posts section
$travelogue_posts_query = new WP_Query([
    'post_type' => 'travelogue',
    'posts_per_page' => 12, // Number of posts per page
    'post_status' => 'publish',
    'orderby' => 'date',
    'order' => 'DESC',
    'paged' => $paged
]);

get_header();
?>

<main class="archive-travelogue">

    <?php Templates::getPart('breadcrumb'); ?>

    <section class="container flex flex-col gap-3 md:gap-5">

        <h1 class="text-cynBlack text-3xl md:text-5xl font-extrabold"><?php _e('سفرنامه ها', 'jonubgard'); ?></h1>

        <?php
        if ($travelogue_posts_query->have_posts()) : ?>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                <?php while ($travelogue_posts_query->have_posts()) : $travelogue_posts_query->the_post(); ?>
                    <?php Templates::getCard('travelogue'); ?>
                <?php endwhile; ?>
            </div>

            <?php
            // Pagination
            $total_pages = $travelogue_posts_query->max_num_pages;
            $current_page = max(1, get_query_var('paged'));

            if ($total_pages > 1) :
            ?>
                <nav class="woocommerce-pagination flex justify-end max-sm:justify-center items-center gap-2 my-6 [&_a]:size-11 [&_span]:size-11" aria-label="<?php esc_attr_e('صفحه بندی سفرنامه‌ها', 'jonubgard'); ?>">

                    <!-- Previous Button -->
                    <?php if ($current_page > 1) : ?>
                        <a href="<?php echo esc_url(get_pagenum_link($current_page - 1)); ?>"
                            class="pagination-btn bg-white hover:bg-cynOrange hover:text-cynWhite text-cynBlack p-2 rounded-2xl shadow-md transition-all duration-300 flex items-center justify-center min-w-[44px]">
                            <i class="size-6 stroke-2">
                                <?php Icon::print('Arrow-19'); ?>
                            </i>
                        </a>
                    <?php else : ?>
                        <span class="pagination-btn bg-white text-cynBlack/50 hover:text-cynWhite p-2 rounded-2xl shadow-md cursor-not-allowed flex items-center justify-center min-w-[44px]">
                            <i class="size-6 stroke-2">
                                <?php Icon::print('Arrow-19'); ?>
                            </i>
                        </span>
                    <?php endif; ?>

                    <!-- Page Numbers -->
                    <?php
                    // Smart pagination logic with dots
                    $show_pages = 2; // Number of pages to show on each side of current
                    $dots_shown_before = false;
                    $dots_shown_after = false;

                    for ($i = 1; $i <= $total_pages; $i++) :
                        // Always show first page, last page, and pages around current
                        $show_this_page = (
                            $i == 1 || // First page
                            $i == $total_pages || // Last page
                            ($i >= $current_page - $show_pages && $i <= $current_page + $show_pages) // Pages around current
                        );

                        if ($show_this_page) :
                            // Reset dots flags when we show a page
                            if ($i > $current_page) {
                                $dots_shown_after = false;
                            }
                            if ($i < $current_page) {
                                $dots_shown_before = false;
                            }

                            if ($i == $current_page) : ?>
                                <span class="pagination-btn bg-cynOrange hover:bg-cynOrange/80 hover:text-cynWhite text-white p-2 rounded-2xl shadow-md font-semibold min-w-[44px] text-center pt-3">
                                    <?php echo $i; ?>
                                </span>
                            <?php else : ?>
                                <a href="<?php echo esc_url(get_pagenum_link($i)); ?>"
                                    class="pagination-btn bg-white hover:bg-cynOrange hover:text-cynWhite text-cynBlack p-2 rounded-2xl shadow-md transition-all duration-300 font-medium min-w-[44px] text-center pt-3">
                                    <?php echo $i; ?>
                                </a>
                            <?php endif;
                        else :
                            // Show dots
                            if ($i < $current_page && !$dots_shown_before) :
                                $dots_shown_before = true; ?>
                                <span class="pagination-dots text-cynBlack py-3 !w-6 text-center">...</span>
                            <?php elseif ($i > $current_page && !$dots_shown_after) :
                                $dots_shown_after = true; ?>
                                <span class="pagination-dots text-cynBlack py-3 !w-6 text-center">...</span>
                    <?php endif;
                        endif;
                    endfor;
                    ?>

                    <!-- Next Button -->
                    <?php if ($current_page < $total_pages) : ?>
                        <a href="<?php echo esc_url(get_pagenum_link($current_page + 1)); ?>"
                            class="pagination-btn bg-white hover:bg-cynOrange hover:text-cynWhite text-cynBlack p-2 rounded-2xl shadow-md transition-all duration-300 flex items-center justify-center min-w-[44px]">
                            <i class="size-6 stroke-2">
                                <?php Icon::print('Arrow-27'); ?>
                            </i>
                        </a>
                    <?php else : ?>
                        <span class="pagination-btn bg-white text-cynBlack/50 p-2 rounded-2xl shadow-md cursor-not-allowed flex items-center justify-center min-w-[44px]">
                            <i class="size-6 stroke-2">
                                <?php Icon::print('Arrow-27'); ?>
                            </i>
                        </span>
                    <?php endif; ?>

                </nav>
            <?php endif; ?>

            <?php wp_reset_postdata(); ?>
        <?php endif; ?>

    </section>

</main>

<?php get_footer();
