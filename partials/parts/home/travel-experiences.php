<?php

use Cyan\Theme\Helpers\Templates;

$home_page_id = get_option('page_on_front');

$home_travel_goal_title = get_field('home_travel_goal_title', $home_page_id);

// Get all destinations
$travelExperiences = get_terms([
    'taxonomy'   => 'experience',
    'hide_empty' => false,
]);

// Filter destinations that have related experiences
$travelExperiencesList = [];
if ($travelExperiences && !is_wp_error($travelExperiences)) {
    foreach ($travelExperiences as $travelExperience) {
        $travelExperiencesList[] = $travelExperience;
    }
}

if (!$travelExperiencesList || empty($travelExperiencesList)) return;
?>

<section class="my-14 flex flex-col gap-5 container">

    <div class="flex items-center">

        <h2 class="text-3xl md:text-5xl font-extrabold text-cynBlack max-md:text-center max-md:w-full">
            <?php echo $home_travel_goal_title; ?>
        </h2>

    </div>

    <div class="grid grid-cols-2 grid-rows-6 gap-0 md:grid-cols-8 md:grid-rows-6">
        <?php
        if ($travelExperiencesList) :
            $grid_classes = [
                'row-span-2 md:col-span-2 md:row-span-3',
                'row-span-2 md:col-span-2 md:row-span-3 md:col-start-3',
                'col-span-2 row-span-2 row-start-3 md:col-span-2 md:row-span-3 md:col-start-1 md:row-start-4',
                'row-span-2 row-start-5 md:col-span-2 md:row-span-3 md:col-start-3 md:row-start-4',
                'row-span-2 row-start-5 md:col-span-4 md:row-span-6 md:col-start-5 md:row-start-1 [&_a]:!h-full [&_a>div]:!h-full',
            ];
            $index = 0;
            foreach ($travelExperiencesList as $travelExperience) :
                $grid_class = isset($grid_classes[$index]) ? $grid_classes[$index] : '';
        ?>
                <div class="<?php echo esc_attr($grid_class); ?>">
                    <?php Templates::getCard('destination', ['destination' => $travelExperience]) ?>
                </div>
        <?php
                $index++;
            endforeach;
        endif;
        ?>
    </div>

</section>