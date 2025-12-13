<?php

/**
 * Comments template for blog posts
 * @package CyanTheme
 */

defined('ABSPATH') || exit;

use Cyan\Theme\Helpers\Icon;

if (!comments_open()) {
    return;
}

// Enqueue comment-reply script for threaded comments
if (is_singular() && comments_open() && get_option('thread_comments')) {
    wp_enqueue_script('comment-reply');
}

// Custom comment callback function
function jonubgard_blog_comment_callback($comment, $args, $depth)
{
    $GLOBALS['comment'] = $comment;
    $is_reply = $comment->comment_parent ? true : false;
?>

    <li <?php comment_class($is_reply ? 'mb-4' : 'mb-3'); ?> id="li-comment-<?php comment_ID(); ?>">
        <div id="comment-<?php comment_ID(); ?>" class="comment-container p-4 md:p-6 <?php echo $is_reply ? 'bg-cynBG [&_img]:size-8' : 'bg-cynWhite shadow-item'; ?> rounded-2xl">
            <div class="flex gap-3 items-start">
                <!-- Avatar -->
                <div class="flex-shrink-0">
                    <?php echo get_avatar($comment, $is_reply ? 32 : 48, '', '', array('class' => 'rounded-full w-12 h-12')); ?>
                </div>

                <!-- Comment Content -->
                <div class="flex-1">
                    <!-- Author Name and Reply Icon -->
                    <div class="flex items-center justify-between mb-2">
                        <div class="flex items-center gap-2">
                            <strong class="text-base font-semibold text-cynBlack"><?php comment_author(); ?></strong>
                            <!-- Reply Icon (only for main comments) -->
                            <?php if (!$is_reply) :
                                $reply_link = get_comment_reply_link(array_merge($args, array(
                                    'depth'     => $depth,
                                    'max_depth' => $args['max_depth'],
                                    'reply_text' => Icon::get('Reply,-Share,-Circle'),
                                    'before'    => '',
                                    'after'     => '',
                                    'add_below' => 'comment',
                                )));
                                if ($reply_link) {
                                    // Replace <a> tag classes
                                    $reply_link = str_replace('class="comment-reply-link"', 'class="comment-reply-link text-cynBlack/50 hover:text-cynOrange transition-colors size-5 inline-block"', $reply_link);
                                    echo $reply_link;
                                }
                            endif; ?>
                        </div>
                    </div>

                    <!-- Date and Time -->
                    <div class="text-sm text-gray-500 mb-2 fa">
                        <?php
                        $comment_date = get_comment_date('j F Y', $comment->comment_ID);
                        $comment_time = get_comment_time('H:i', false, true);
                        echo $comment_date . '، ' . $comment_time;
                        ?>
                    </div>

                    <!-- Comment Text -->
                    <div class="text-base text-cynBlack mb-2">
                        <?php comment_text(); ?>
                    </div>
                </div>
            </div>
            <!-- Don't close comment-container div yet - children will go inside -->
        <?php
    }

    // Function to close the comment tag properly
    function jonubgard_blog_comment_end_callback($comment, $args, $depth)
    {
        ?>
        </div><!-- Close comment-container -->
    </li>
<?php
    }

    $comment_count = get_comments_number();
?>

<div id="comments" class="blog-comments bg-cynWhite p-4 md:p-6 rounded-3xl shadow-item">
    <!-- Header -->
    <div class="mb-2 flex flex-col gap-2">

        <h3 class="text-2xl font-bold text-cynBlack">
            <?php _e('دیدگاه‌ها', 'jonubgard'); ?>
        </h3>

        <p class="text-xl font-semibold text-cynBlack/80">
            <?php
            if ($comment_count < 1) {
                echo __('بدون دیدگاه', 'jonubgard');
            } else {
                echo $comment_count . ' ' . __('دیدگاه', 'jonubgard');
            }
            ?> </p>

    </div>

    <!-- Comment Form -->
    <div id="review_form_wrapper" class="mb-8">
        <?php
        $commenter = wp_get_current_commenter();
        $comment_form = array(
            'title_reply' => '<span class="text-base font-semibold text-cynBlack/50">' . __('شماهم توی این بحث شرکت کنید', 'jonubgard') . '</span>',
            'title_reply_to' => '<span class="text-base font-semibold text-cynBlack/50">' . __('پاسخ به %s', 'jonubgard') . '</span>',
            'title_reply_before' => '<p class="mb-4">',
            'title_reply_after' => '</p>',
            'comment_notes_before' => '',
            'comment_notes_after' => '',
            'cancel_reply_before' => '<span class="mr-2">',
            'cancel_reply_after' => '</span>',
            'cancel_reply_link' => '<span class="text-sm text-cynOrange hover:underline cursor-pointer">' . __('لغو پاسخ', 'jonubgard') . '</span>',
            'label_submit' => __('ارسال دیدگاه', 'jonubgard'),
            'logged_in_as' => '',
            'comment_field' => '',
            'class_submit' => 'secondary-btn text-white flex items-center gap-0.5 font-medium',
            'submit_button' => '<button name="%1$s" type="submit" id="%2$s" class="%3$s"><span class="size-7">' . Icon::get('Send') . '</span>%4$s</button>',
            'class_form' => 'comment-form',
            'format' => 'html5',
        );

        $name_email_required = (bool) get_option('require_name_email', 1);
        $fields = array(
            'author' => array(
                'label' => __('نام شما', 'jonubgard'),
                'type' => 'text',
                'value' => $commenter['comment_author'],
                'required' => $name_email_required,
            ),
            'email' => array(
                'label' => __('ایمیل شما', 'jonubgard'),
                'type' => 'email',
                'value' => $commenter['comment_author_email'],
                'required' => $name_email_required,
            ),
        );

        $comment_form['fields'] = array();

        // Build name and email fields HTML
        $name_email_html = '';
        foreach ($fields as $key => $field) {
            $icon_name = $key === 'author' ? 'User,-Profile' : 'email-mail-letter';
            $icon_content = Icon::get($icon_name);
            $name_email_html .= '<div class="comment-form-' . esc_attr($key) . ' mb-4">';
            $name_email_html .= '<div class="relative">';
            if ($icon_content) {
                $name_email_html .= '<div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">';
                $name_email_html .= '<span class="size-7 text-gray-400">';
                $name_email_html .= $icon_content;
                $name_email_html .= '</span>';
                $name_email_html .= '</div>';
            }
            $name_email_html .= '<input id="' . esc_attr($key) . '" name="' . esc_attr($key) . '" type="' . esc_attr($field['type']) . '" value="' . esc_attr($field['value']) . '" placeholder="' . esc_attr($field['label']) . '" class="' . ($icon_content ? 'pr-11' : 'pr-3') . ' bg-white/50 rounded-2xl border border-cynBlack/20 text-base font-medium w-full py-3 text-cynBlack focus:outline-none focus:ring-2 focus:ring-cynOrange transition-all duration-200" ' . ($field['required'] ? 'required' : '') . ' />';
            $name_email_html .= '</div>';
            $name_email_html .= '</div>';
        }

        // Login required message
        if (get_option('comment_registration') && !is_user_logged_in()) {
            $comment_form['must_log_in'] = '<p class="must-log-in text-gray-500 mb-4">' . sprintf(__('برای ارسال دیدگاه باید %1$sوارد%2$s شوید.', 'jonubgard'), '<a href="' . esc_url(wp_login_url(get_permalink())) . '" class="text-cynOrange">', '</a>') . '</p>';
        }

        // Start comment_field with name and email fields first
        $message_icon = Icon::get('Chat,-Messages-1');
        $comment_form['comment_field'] = $name_email_html;

        // Then add comment textarea
        $comment_form['comment_field'] .= '<div class="comment-form-comment mb-4">';
        $comment_form['comment_field'] .= '<div class="relative">';
        if ($message_icon) {
            $comment_form['comment_field'] .= '<div class="absolute top-3 right-3 pointer-events-none">';
            $comment_form['comment_field'] .= '<span class="size-7 text-gray-400">';
            $comment_form['comment_field'] .= $message_icon;
            $comment_form['comment_field'] .= '</span>';
            $comment_form['comment_field'] .= '</div>';
        }
        $comment_form['comment_field'] .= '<textarea id="comment" name="comment" placeholder="' . esc_attr__('نظر شما', 'jonubgard') . '" rows="6" required class="bg-white/50 rounded-2xl border border-cynBlack/20 text-base font-medium w-full ' . ($message_icon ? 'pr-11' : 'pr-3') . ' py-3 text-cynBlack focus:outline-none focus:ring-2 focus:ring-cynOrange resize-none transition-all duration-200"></textarea>';
        $comment_form['comment_field'] .= '</div>';
        $comment_form['comment_field'] .= '</div>';

        comment_form($comment_form);
        ?>
    </div>

    <!-- Comments List -->
    <div id="comments-list" class="mt-8">
        <?php if (get_comments_number() > 0) : ?>
            <ol class="commentlist list-none p-0 m-0">
                <?php
                wp_list_comments(array(
                    'callback' => 'jonubgard_blog_comment_callback',
                    'end-callback' => 'jonubgard_blog_comment_end_callback',
                    'style'    => 'ol',
                    'avatar_size' => 48,
                    'max_depth' => 2, // Allow one level of replies
                    'per_page' => -1, // Show all comments
                ));
                ?>
            </ol>

            <?php
            if (get_comment_pages_count() > 1 && get_option('page_comments')) :
                echo '<nav class="comments-pagination mt-6">';
                paginate_comments_links(array(
                    'prev_text' => __('قبلی', 'jonubgard'),
                    'next_text' => __('بعدی', 'jonubgard'),
                    'type' => 'list',
                ));
                echo '</nav>';
            endif;
            ?>
        <?php endif; ?>
    </div>

    <div class="clear"></div>
</div>

<style>
    /* Styling for nested comment replies */
    .commentlist {
        list-style: none !important;
        padding: 0 !important;
        margin: 0 !important;
    }

    .commentlist>li {
        list-style: none !important;
    }

    /* Children list inside comment-container */
    .comment-container>.children {
        list-style: none !important;
        padding: 0 !important;
        margin: 0 !important;
        margin-top: 1rem !important;
        padding-right: 0 !important;
    }

    .comment-container>.children>li {
        list-style: none !important;
        margin-bottom: 1rem !important;
    }

    .comment-container>.children>li:last-child {
        margin-bottom: 0 !important;
    }

    /* Smooth transition for respond form */
    #respond {
        transition: all 0.3s ease;
    }
</style>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        // Smooth scroll to comment form when replying
        document.addEventListener('click', function(e) {
            if (e.target.closest('.comment-reply-link')) {
                setTimeout(function() {
                    const respond = document.getElementById('respond');
                    if (respond) {
                        respond.scrollIntoView({
                            behavior: 'smooth',
                            block: 'center'
                        });
                    }
                }, 100);
            }
        });
    });
</script>