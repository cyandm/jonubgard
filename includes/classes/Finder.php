<?php

/**
 * Finder Class
 * Handles the product finder form submission and filtering
 * @package Cyan\Theme\Classes
 */

namespace Cyan\Theme\Classes;

class Finder
{
    public static function init()
    {
        add_action('template_redirect', [__CLASS__, 'handleFinderForm']);
        add_action('pre_get_posts', [__CLASS__, 'filterByDestinationAndStock'], 20);
    }

    /**
     * Handle finder form submission
     */
    public static function handleFinderForm()
    {
        // Only process if both destination and passengers are set
        if (!isset($_GET['destination']) || !isset($_GET['passengers']) || !isset($_GET['post_type']) || $_GET['post_type'] !== 'product') {
            return;
        }

        $destination_id = intval($_GET['destination']);
        $passengers = intval($_GET['passengers']);

        // Validate inputs
        if ($destination_id <= 0 || $passengers <= 0) {
            return;
        }

        // Check if products exist with this destination and stock
        $products = self::getAvailableProducts($destination_id, $passengers);

        if (empty($products)) {
            // No products found - show error message
            add_action('wp_footer', function () {
                echo '<script>
                    if (document.getElementById("finder-error")) {
                        document.getElementById("finder-error").textContent = "سفری برای شما یافت نشد";
                        document.getElementById("finder-error").classList.remove("hidden");
                    }
                </script>';
            });
            return;
        }

        // Products found - redirect to shop with filters
        $shop_url = wc_get_page_permalink('shop');
        if (!$shop_url) {
            $shop_url = get_post_type_archive_link('product');
        }

        $redirect_url = add_query_arg([
            'destination' => $destination_id,
            'passengers' => $passengers,
        ], $shop_url);

        wp_redirect($redirect_url);
        exit;
    }

    /**
     * Filter products by destination and stock in pre_get_posts
     */
    public static function filterByDestinationAndStock($query)
    {
        // Only run on main query, not admin, and only on product archives
        if (is_admin() || !$query->is_main_query()) {
            return;
        }

        // Check if this is a product-related page
        $is_product_page = is_post_type_archive('product') || is_shop() || is_tax('destination');

        if (!$is_product_page) {
            return;
        }

        // Get parameters
        $destination_id = isset($_GET['destination']) ? intval($_GET['destination']) : 0;
        $passengers = isset($_GET['passengers']) ? intval($_GET['passengers']) : 0;

        // If on destination taxonomy archive, get term ID from current term
        if (is_tax('destination') && $destination_id <= 0) {
            $term = get_queried_object();
            if ($term && isset($term->term_id)) {
                $destination_id = $term->term_id;
            }
        }

        // If no valid parameters, return
        if ($destination_id <= 0 || $passengers <= 0) {
            return;
        }

        // Get available product IDs that match destination and stock criteria
        $available_product_ids = self::getAvailableProducts($destination_id, $passengers);

        if (empty($available_product_ids)) {
            // No products found - set post__in to non-existent ID to show no results
            $query->set('post__in', [0]);

            // Add message for no results
            add_action('woocommerce_before_shop_loop', function () use ($passengers, $destination_id) {
                $destination = get_term($destination_id, 'destination');
                $destination_name = $destination && !is_wp_error($destination) ? $destination->name : '';

                echo '<div class="container text-center py-8 mb-8">';
                echo '<p class="text-xl text-cynBlack font-semibold">' . esc_html__('سفری برای شما یافت نشد', 'jonubgard') . '</p>';
                if ($destination_name) {
                    echo '<p class="text-base text-cynBlack/70 mt-2">' . sprintf(esc_html__('برای مقصد %s با %d همسفر', 'jonubgard'), esc_html($destination_name), $passengers) . '</p>';
                }
                echo '</div>';
            }, 5);

            return;
        }

        // Set post__in to only include available products
        $query->set('post__in', $available_product_ids);

        // Ensure we're still filtering by destination taxonomy if not on taxonomy archive
        if (!is_tax('destination')) {
            $tax_query = $query->get('tax_query') ?: [];
            if (!is_array($tax_query)) {
                $tax_query = [];
            }

            $tax_query[] = [
                'taxonomy' => 'destination',
                'field' => 'term_id',
                'terms' => $destination_id,
            ];

            $query->set('tax_query', $tax_query);
        }
    }

    /**
     * Get available products by destination and stock quantity
     * 
     * @param int $destination_id Destination term ID
     * @param int $passengers Number of passengers (minimum stock required)
     * @return array Array of product IDs that match criteria
     */
    private static function getAvailableProducts($destination_id, $passengers)
    {
        // Query all products with the destination
        $args = [
            'post_type' => 'product',
            'post_status' => 'publish',
            'posts_per_page' => -1,
            'fields' => 'ids',
            'tax_query' => [
                [
                    'taxonomy' => 'destination',
                    'field' => 'term_id',
                    'terms' => $destination_id,
                ],
            ],
        ];

        $query = new \WP_Query($args);
        $product_ids = $query->posts;
        wp_reset_postdata();

        if (empty($product_ids)) {
            return [];
        }

        // Filter by stock availability
        $available_products = [];

        foreach ($product_ids as $product_id) {
            $product = wc_get_product($product_id);

            if (!$product || !$product->is_in_stock()) {
                continue;
            }

            // Check stock quantity
            if ($product->managing_stock()) {
                $stock_quantity = $product->get_stock_quantity();

                // Stock must be numeric and >= passengers
                if (is_numeric($stock_quantity) && $stock_quantity >= $passengers) {
                    $available_products[] = $product_id;
                }
            } else {
                // Not managing stock - include if in stock
                $available_products[] = $product_id;
            }
        }

        return $available_products;
    }
}
