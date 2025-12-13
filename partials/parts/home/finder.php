<?php

use Cyan\Theme\Helpers\Icon;

// Get all destination terms
$destinations = get_terms([
    'taxonomy' => 'destination',
    'hide_empty' => true,
]);

?>

<section class="container mb-14 -mt-36 z-10 relative">

    <div class="rounded-[40px] border border-white/20 bg-white/40 shadow-item backdrop-blur-[54px] py-6 px-4 md:py-9 md:px-16">

        <form method="get" action="<?php echo esc_url(home_url('/')); ?>" id="finder-form" class="flex justify-center items-center gap-4 md:gap-5 flex-col">

            <div class="flex justify-center items-center gap-4 md:gap-6 w-full max-md:flex-col">

                <!-- مقصدها -->
                <div class="flex items-center w-1/2 max-md:w-full border border-black/20 bg-white/50 rounded-4xl pl-4 relative">
                    <i class="size-6 text-cynBlack absolute start-4 top-1/2 -translate-y-1/2">
                        <?php Icon::print('Map,-Point,-Pin'); ?>
                    </i>
                    <select
                        name="destination"
                        id="destination"
                        class="w-full rounded-4xl focus-visible:outline-0 px-5 pb-4 pt-4.5 ps-12 text-cynBlack/80"
                        required>
                        <option value="" selected disabled><?php _e('مقصدها', 'jonubgard'); ?></option>
                        <?php if (!empty($destinations) && !is_wp_error($destinations)) : ?>
                            <?php foreach ($destinations as $destination) : ?>
                                <option value="<?php echo esc_attr($destination->term_id); ?>">
                                    <?php echo esc_html($destination->name); ?>
                                </option>
                            <?php endforeach; ?>
                        <?php endif; ?>
                    </select>
                </div>

                <!-- تعداد همسفر -->
                <div class="flex items-center w-1/2 max-md:w-full border border-black/20 bg-white/50 rounded-4xl pl-4 relative">
                    <i class="size-6 text-cynBlack absolute start-4 top-1/2 -translate-y-1/2">
                        <?php Icon::print('User,-Profile'); ?>
                    </i>
                    <input
                        type="number"
                        name="passengers"
                        id="passengers"
                        min="1"
                        class="w-full rounded-4xl focus-visible:outline-0 px-5 pb-4 pt-4.5 ps-12 text-cynBlack/80"
                        placeholder="<?php _e('تعداد همسفر', 'jonubgard'); ?>"
                        required />
                </div>

            </div>

            <div class="max-md:w-full">
                <button type="submit" class="secondary-btn max-md:w-full text-white w-[650px]">
                    <?php _e('جستجو کن', 'jonubgard'); ?>
                </button>
            </div>

            <!-- Hidden field to redirect to shop -->
            <input type="hidden" name="post_type" value="product" />

            <!-- Error message container -->
            <div id="finder-error" class="hidden text-red-600 text-center mt-4"></div>

        </form>

    </div>

</section>