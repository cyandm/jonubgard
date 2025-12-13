<?php

namespace Cyan\Theme\Classes;

use Cyan\Theme\Helpers\Templates;

class Meta
{
    public static function init()
    {
        add_action('add_meta_boxes', [__CLASS__, 'add_form_meta_box']);
        add_action('add_meta_boxes', [__CLASS__, 'add_travelogue_meta_box']);
        add_filter('manage_contact_form_posts_columns', [__CLASS__, 'form_table_head']);
        add_action('manage_contact_form_posts_custom_column', [__CLASS__, 'form_table_column'], 10, 2);
        add_filter('manage_written_travelogues_posts_columns', [__CLASS__, 'travelogue_table_head']);
        add_action('manage_written_travelogues_posts_custom_column', [__CLASS__, 'travelogue_table_column'], 10, 2);
    }

    public static function add_form_meta_box()
    {
        global $post;
        if ($post->post_type !== "contact_form")
            return;


        add_meta_box('form_information', 'اطلاعات فرم', function () {
            $meta_group = [

                [
                    'name' => '_name',
                    'label' => 'نام:',
                ],

                [
                    'name' => '_phone',
                    'label' => 'تلفن همراه:',
                ],

                [
                    'name' => '_message',
                    'label' => 'سوال:',
                ],
            ];

            include get_template_directory() . '/partials/parts/metabox.php';
        }, null, 'advanced', 'high');
    }

    public static function form_table_head($columns)
    {
        $columns['name'] = __('نام', 'cyn-dm');
        $columns['phone'] = __('تلفن همراه', 'cyn-dm');
        $columns['message'] = __('سوال', 'cyn-dm');
        return $columns;
    }

    public static function form_table_column($column_name, $post_id)
    {
        if ($column_name == 'name') {

            echo get_post_meta($post_id, '_name', true);
        }

        if ($column_name == 'phone') {
            echo get_post_meta($post_id, '_phone', true);
        }

        if ($column_name == 'message') {
            echo get_post_meta($post_id, '_message', true);
        }
    }

    public static function add_travelogue_meta_box()
    {
        global $post;
        if ($post->post_type !== "written_travelogues")
            return;

        add_meta_box('travelogue_information', 'اطلاعات سفرنامه', function () {
            global $post;
            $meta_group = [
                [
                    'name' => '_name',
                    'label' => 'نام:',
                ],
                [
                    'name' => '_email',
                    'label' => 'ایمیل:',
                ],
                [
                    'name' => '_phone',
                    'label' => 'تلفن همراه:',
                ],
                [
                    'name' => '_travelogue_destination',
                    'label' => 'مقصد:',
                ],
                [
                    'name' => '_message',
                    'label' => 'سفرنامه:',
                ],
            ];

            include get_template_directory() . '/partials/parts/metabox.php';

            // Display uploaded images
            $image_ids = get_post_meta($post->ID, '_travelogue_images', true);
            if (!empty($image_ids) && is_array($image_ids)) {
                echo '<div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd;">';
                echo '<h3 style="margin-bottom: 15px; font-size: 16px; font-weight: 600;">عکس‌های ارسال شده:</h3>';
                echo '<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 15px;">';
                foreach ($image_ids as $image_id) {
                    $image_url = wp_get_attachment_image_url($image_id, 'medium');
                    $image_full_url = wp_get_attachment_image_url($image_id, 'full');
                    if ($image_url) {
                        echo '<div style="position: relative;">';
                        echo '<a href="' . esc_url($image_full_url) . '" target="_blank" style="display: block;">';
                        echo '<img src="' . esc_url($image_url) . '" alt="Travelogue Image" style="width: 100%; height: 150px; object-fit: cover; border-radius: 4px; border: 1px solid #ddd;" />';
                        echo '</a>';
                        echo '<a href="' . admin_url('post.php?post=' . $image_id . '&action=edit') . '" target="_blank" style="display: block; margin-top: 5px; font-size: 12px; color: #0073aa; text-decoration: none;">ویرایش در مدیا</a>';
                        echo '</div>';
                    }
                }
                echo '</div>';
                echo '</div>';
            }
        }, null, 'advanced', 'high');
    }

    public static function travelogue_table_head($columns)
    {
        $columns['name'] = __('نام', 'cyn-dm');
        $columns['email'] = __('ایمیل', 'cyn-dm');
        $columns['phone'] = __('تلفن همراه', 'cyn-dm');
        $columns['destination'] = __('مقصد', 'cyn-dm');
        $columns['message'] = __('سفرنامه', 'cyn-dm');
        $columns['images'] = __('عکس‌ها', 'cyn-dm');
        return $columns;
    }

    public static function travelogue_table_column($column_name, $post_id)
    {
        if ($column_name == 'name') {
            echo get_post_meta($post_id, '_name', true);
        }

        if ($column_name == 'email') {
            echo get_post_meta($post_id, '_email', true);
        }

        if ($column_name == 'phone') {
            echo get_post_meta($post_id, '_phone', true);
        }

        if ($column_name == 'destination') {
            echo get_post_meta($post_id, '_travelogue_destination', true);
        }

        if ($column_name == 'images') {
            $image_ids = get_post_meta($post_id, '_travelogue_images', true);
            if (!empty($image_ids) && is_array($image_ids)) {
                $count = count($image_ids);
                echo '<span style="color: #0073aa;">' . $count . ' عکس</span>';
                if ($count > 0) {
                    $first_image_url = wp_get_attachment_image_url($image_ids[0], 'thumbnail');
                    if ($first_image_url) {
                        echo '<br><img src="' . esc_url($first_image_url) . '" style="width: 50px; height: 50px; object-fit: cover; margin-top: 5px; border-radius: 4px;" />';
                    }
                }
            } else {
                echo '<span style="color: #999;">-</span>';
            }
        }

        if ($column_name == 'message') {
            echo get_post_meta($post_id, '_message', true);
        }
    }
}
