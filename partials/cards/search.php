<?php
// بررسی اینکه آیا این یک taxonomy term است یا post معمولی

$is_term = isset($post->taxonomy) && $post->taxonomy === 'destination';

if ($is_term) {
    // نمایش taxonomy term
    $url = $post->permalink;
    $title = $post->post_title;
    $type_label = 'مقصد';
}else if ($post->post_type == 'product') {
    // نمایش product
    $url = get_permalink($post->ID);
    $title = $post->post_title;
    $type_label = 'سفر';
} else {
    // نمایش post معمولی
    $url = get_permalink();
    $title = get_the_title();
    $type_label = get_post_type_object(get_post_type())->labels->singular_name;
}
?>

<a href="<?php echo esc_url($url); ?>" class="bg-white shadow-it rounded-3xl p-6 w-full flex flex-col gap-2">

    <div class="text-base md:text-2xl font-medium leading-9 text-cynBlack">
        <?php echo esc_html($title); ?>
    </div>

    <span class="text-cynBlack/60 text-xs md:text-base font-semibold">
        <?php echo esc_html($type_label); ?>
    </span>

</a>