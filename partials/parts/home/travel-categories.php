<?php

use Cyan\Theme\Helpers\Templates;

$home_page_id = get_option('page_on_front');

$home_travel_goal_title = get_field('home_travel_goal_title', $home_page_id);

// Get all product categories except 'uncategorized'
$uncategorized_term = get_term_by('slug', 'uncategorized', 'product_cat');
$exclude_ids = $uncategorized_term ? [$uncategorized_term->term_id] : [];

$travelProductCategories = get_terms([
    'taxonomy'   => 'product_cat',
    'exclude'    => $exclude_ids,
    'hide_empty' => false,
]);

// Filter destinations that have related product categories
$travelProductCategoriesList = [];
if ($travelProductCategories && !is_wp_error($travelProductCategories)) {
    foreach ($travelProductCategories as $travelProductCategory) {
        $travelProductCategoriesList[] = $travelProductCategory;
    }
}

if (!$travelProductCategoriesList || empty($travelProductCategoriesList)) return;
?>

<section class="my-14 flex flex-col gap-5 container">

    <div class="flex items-center">

        <h2 class="text-3xl md:text-5xl font-extrabold text-cynBlack max-md:text-center max-md:w-full">
            <?php echo $home_travel_goal_title; ?>
        </h2>

    </div>

    <div class="grid grid-cols-2 grid-rows-6 gap-0 md:grid-cols-8 md:grid-rows-6">
        <?php
        if ($travelProductCategoriesList) :
            $grid_classes = [
                'row-span-2 md:col-span-2 md:row-span-3',
                'row-span-2 md:col-span-2 md:row-span-3 md:col-start-3',
                'col-span-2 row-span-2 row-start-3 md:col-span-2 md:row-span-3 md:col-start-1 md:row-start-4',
                'row-span-2 row-start-5 md:col-span-2 md:row-span-3 md:col-start-3 md:row-start-4',
                'row-span-2 row-start-5 md:col-span-4 md:row-span-6 md:col-start-5 md:row-start-1 [&_a]:!h-full [&_a>div]:!h-full',
            ];
            $index = 0;
            foreach ($travelProductCategoriesList as $travelProductCategory) :
                $grid_class = isset($grid_classes[$index]) ? $grid_classes[$index] : '';
        ?>
                <div class="<?php echo esc_attr($grid_class); ?>">
                    <?php Templates::getCard('destination', ['destination' => $travelProductCategory]) ?>
                </div>
        <?php
                $index++;
            endforeach;
        endif;
        ?>
    </div>

</section>