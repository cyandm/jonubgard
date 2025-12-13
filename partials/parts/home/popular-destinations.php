<?php

use Cyan\Theme\Helpers\Templates;

$home_page_id = get_option('page_on_front');

$home_popular_destinations_title = get_field('home_popular_destinations_title', $home_page_id);
$home_popular_destinations_button = get_field('home_popular_destinations_button', $home_page_id);
$home_popular_destinations_list = get_field('home_popular_destinations_list', $home_page_id);

// Get popular destinations from ACF field, or fallback to all destinations
if ($home_popular_destinations_list && !empty($home_popular_destinations_list)) {
    // Get selected destinations by their IDs
    $popularDestinations = [];
    foreach ($home_popular_destinations_list as $destination_id) {
        $term = get_term($destination_id);
        if ($term && !is_wp_error($term)) {
            $popularDestinations[] = $term;
        }
    }
} else {
    // Fallback: get all destinations if no selection made
    $popularDestinations = get_terms([
        'taxonomy'   => 'destination',
        'hide_empty' => false,
    ]);
}

if (!$popularDestinations || empty($popularDestinations)) return;
?>

<section class="my-14 flex flex-col gap-5">

    <div class="container flex justify-between items-center">

        <h2 class="text-3xl md:text-5xl font-extrabold text-cynBlack max-md:text-center max-md:w-full">
            <?php echo $home_popular_destinations_title; ?>
        </h2>

        <?php if ($home_popular_destinations_button): ?>
            <a href="<?php echo esc_url($home_popular_destinations_button['url']); ?>" class="shadow-item primary-btn text-xl font-medium text-cynBlack hidden md:block">
                <?php echo $home_popular_destinations_button['title']; ?>
            </a>
        <?php endif; ?>

    </div>

    <div class="">
        <swiper-container slides-per-view="4.5" space-between="0" loop="true" centered-slides="true" initial-slide="1" breakpoints='{"0": {"slidesPerView": 1.5}, "500": {"slidesPerView": 2.1}, "768": {"slidesPerView": 2.5}, "1024": {"slidesPerView": 3.5}, "1280": {"slidesPerView": 4.5}}'>
            <?php
            if ($popularDestinations) :
                foreach ($popularDestinations as $destination) :
            ?>
                    <swiper-slide>
                        <?php Templates::getCard('destination', ['destination' => $destination]) ?>
                    </swiper-slide>
            <?php
                endforeach;
            endif;
            ?>
        </swiper-container>
    </div>

    <?php if ($home_popular_destinations_button): ?>
        <div class="container flex justify-center items-center">

            <a href="<?php echo esc_url($home_popular_destinations_button['url']); ?>" class="shadow-item primary-btn text-xl font-medium text-cynBlack block md:hidden w-full text-center">
                <?php echo $home_popular_destinations_button['title']; ?>
            </a>

        </div>
    <?php endif; ?>
</section>