<?php

namespace Cyan\Theme\Classes;

class Search
{
    public static function init()
    {
        add_action('pre_get_posts', [__CLASS__, 'searchPage'], 999);

        // حذف فیلترهای مزاحم در صفحه جستجو
        add_action('pre_get_posts', [__CLASS__, 'remove_interfering_filters'], 1);

        add_filter('posts_join', [__CLASS__, 'search_join']);
        add_filter('posts_where', [__CLASS__, 'search_where']);
        add_filter('posts_distinct', [__CLASS__, 'search_distinct']);

        // اضافه کردن taxonomy terms به نتایج جستجو
        add_filter('the_posts', [__CLASS__, 'add_taxonomy_to_search'], 10, 2);

        // تمیز کردن SQL query از tax_query مزاحم
        add_filter('posts_clauses', [__CLASS__, 'clean_search_sql'], 999, 2);
    }

    /**
     * حذف فیلترهای مزاحمی که ممکنه روی جستجو تاثیر بذارن
     */
    public static function remove_interfering_filters(\WP_Query $query)
    {
        if (!$query->is_search() || !$query->is_main_query())
            return;

        // حذف فیلترهای WooCommerce
        remove_action('pre_get_posts', 'wc_products_in_term');

        // حذف tax_query که از جای دیگه اومده
        $query->set('tax_query', []);
    }

    public static function searchPage(\WP_Query $query)
    {
        if (!$query->is_search() || !$query->is_main_query())
            return;

        $search_type = isset($_GET['search-type']) ? sanitize_text_field($_GET['search-type']) : 'all';

        // حذف tax_query که ممکنه از جای دیگه اومده باشه
        $query->set('tax_query', []);

        switch ($search_type) {
            case 'travel':
                $query->set('post_type', 'product');
                break;

            case 'destination':
                // برای مقصدها فقط taxonomy را جستجو می‌کنیم
                $query->set('post_type', 'product');
                $query->set('post__in', [0]); // هیچ پستی نشان نده
                break;

            case 'post':
                $query->set('post_type', 'post');
                break;

            case 'all':
            default:
                $query->set('post_type', ['product', 'post']);
                break;
        }

        $query->set('posts_per_page', -1);
    }

    /**
     * اضافه کردن taxonomy terms به نتایج جستجو
     */
    public static function add_taxonomy_to_search($posts, $query)
    {
        if (!$query->is_search() || !$query->is_main_query())
            return $posts;

        $search_type = isset($_GET['search-type']) ? sanitize_text_field($_GET['search-type']) : 'all';
        $search_query = get_search_query();

        // اگر جستجوی all یا destination باشد
        if (in_array($search_type, ['all', 'destination'])) {

            // جستجو در taxonomy destination
            $terms = get_terms([
                'taxonomy' => 'destination',
                'hide_empty' => false,
                'search' => $search_query,
            ]);

            if (!empty($terms) && !is_wp_error($terms)) {
                // تبدیل terms به فرمت pseudo-post برای نمایش
                foreach ($terms as $term) {
                    $pseudo_post = new \stdClass();
                    $pseudo_post->ID = 'term_' . $term->term_id;
                    $pseudo_post->post_title = $term->name;
                    $pseudo_post->post_type = 'destination';
                    $pseudo_post->post_content = $term->description;
                    $pseudo_post->term_id = $term->term_id;
                    $pseudo_post->taxonomy = 'destination';
                    $pseudo_post->permalink = get_term_link($term);

                    if ($search_type === 'destination') {
                        $posts[] = $pseudo_post;
                    } else {
                        array_unshift($posts, $pseudo_post);
                    }
                }
            }
        }

        return $posts;
    }

    public static function search_join($join)
    {
        global $wpdb;

        if (is_search()) {
            $join .= ' LEFT JOIN ' . $wpdb->postmeta . ' english_name ON ' . $wpdb->posts . '.ID = english_name.post_id ';
        }

        return $join;
    }

    public static function search_where($where)
    {
        global $wpdb;

        if (is_search()) {
            $where = preg_replace(
                "/\(\s*" . $wpdb->posts . ".post_title\s+LIKE\s*(\'[^\']+\')\s*\)/",
                "(" . $wpdb->posts . ".post_title LIKE $1) OR (english_name.meta_value LIKE $1)",
                $where
            );
        }

        return $where;
    }

    public static function search_distinct($where)
    {
        if (is_search()) {
            return "DISTINCT";
        }

        return $where;
    }

    /**
     * تمیز کردن SQL از فیلترهای مزاحم taxonomy
     */
    public static function clean_search_sql($clauses, $query)
    {
        if (!$query->is_search() || !$query->is_main_query())
            return $clauses;

        global $wpdb;

        // حذف JOIN های مربوط به term_relationships
        $clauses['join'] = preg_replace(
            '/LEFT JOIN ' . $wpdb->term_relationships . ' ON[^W]+/',
            '',
            $clauses['join']
        );

        // حذف WHERE های مربوط به term_taxonomy_id
        $clauses['where'] = preg_replace(
            '/AND \( \s*' . $wpdb->term_relationships . '\.term_taxonomy_id IN \([^)]+\)\s*\)/',
            '',
            $clauses['where']
        );

        return $clauses;
    }
}
