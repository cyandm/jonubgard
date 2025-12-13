<?php

use Cyan\Theme\Helpers\Templates;

// Get args passed from Templates::getPart
$args = get_query_var('args', []);
$term_ids = $args['term_ids'] ?? [];

$query_args = [
    'post_type' => 'faq',
    'fields' => 'ids',
    'tax_query' => [
        [
            'taxonomy' => 'faq_cat',
            'field' => 'term_id',
            'terms' => $term_ids,
        ]
    ]
];

$faq_group = get_posts($query_args);

if (empty($faq_group))
    return;

?>

<div class="py-9 px-6 border border-white/20 divide-y divide-[#F6EEE0]">

    <?php foreach ($faq_group as $index => $faq_id) : ?>
        <?php Templates::getCard('faq', ['post-id' => $faq_id]) ?>
    <?php endforeach; ?>
</div>