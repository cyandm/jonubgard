<?php

/**
 * Search Class
 * Handles the search results filtering
 * @package Cyan\Theme\Classes
 */

namespace Cyan\Theme\Classes;

class Search
{
    public static function init()
    {
        add_action('pre_get_posts', [__CLASS__, 'filterSearchResults']);
    }


    /**
     * Filter search results based on search-type parameter
     * 
     * @param \WP_Query $query The WordPress query object
     * @return void
     */
    public static function filterSearchResults($query)
    {
        /** @var \WP_Query $query */

        // Only modify the main query and search queries
        if (!$query->is_main_query() || !$query->is_search()) {
            return;
        }

        // Get the search type from URL parameter
        $search_type = isset($_GET['search-type']) ? sanitize_text_field($_GET['search-type']) : 'all';

        // If search type is 'all', don't filter (show all post types)
        if ($search_type === 'all') {
            return;
        }

        // Filter by post type based on search-type
        switch ($search_type) {
            case 'service':
                $query->set('post_type', 'service');
                break;
            case 'project':
                $query->set('post_type', 'project');
                break;
            case 'post':
                $query->set('post_type', 'post');
                break;
            case 'travelogue':
                $query->set('post_type', 'travelogue');
                break;
            case 'product':
                $query->set('post_type', 'product');
                break;
            default:
                // For any other value, show all post types
                break;
        }
    }
}
