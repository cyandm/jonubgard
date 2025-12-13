<?php

use Cyan\Theme\Helpers\Templates;

$home_page_id = get_option('page_on_front');

$faq_title = get_field('home_faq_title', $home_page_id);
$faq_button = get_field('home_faq_button', $home_page_id);
$faq_button_link = get_option('phone_number_support');

$faq_cats = get_terms([
    'taxonomy' => 'faq_cat',
    'hide_empty' => true
]);

if (!$faq_cats || empty($faq_cats)) return;
?>

<section class="my-14 flex flex-col" id="faq">

    <div class="container flex justify-between items-center">

        <h2 class="text-3xl md:text-5xl font-extrabold text-cynBlack max-md:text-center max-md:w-full">
            <?php echo $faq_title; ?>
        </h2>

        <a href="<?php echo esc_url($faq_button['url'] ?? (!empty($faq_button_link) ? 'tel:' . $faq_button_link : '/contact-us')); ?>" class="shadow-item secondary-btn text-xl font-medium text-cynWhite hidden md:block">
            <?php echo _e('تماس با ما', 'jonubgard'); ?>
        </a>

    </div>

    <div class="flex flex-col">
        <div class="flex xl:justify-center items-center gap-2 overflow-x-scroll scrollbar py-5 max-lg:px-2 max-lg:ms-6 max-md:ms-2.5">
            <?php foreach ($faq_cats as $index => $category) : ?>
                <div class="fade-in-down"
                    anim-delay="<?php echo $index * 0.3 ?>">
                    <div id="<?php echo "faq-cat-" . $category->term_id ?>"
                        class="faq-handler | bg-cynWhite text-cynBlack cursor-pointer hover:bg-cynOrange hover:text-cynWhite text-base font-medium duration-300 rounded-2xl py-3 px-4 max-md:px-2 w-full flex justify-center items-center whitespace-nowrap shadow-item">
                        <?php echo $category->name ?>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>

        <div class="container">
            <div class="col-span-5 max-md:col-span-6 shadow-item bg-white/40 rounded-4xl overflow-hidden">
                <div class="fade-in-down"
                    anim-delay="0.8">
                    <?php foreach ($faq_cats as $index => $category) : ?>
                        <div class="faq-panel grid grid-rows-[0fr] transition-all duration-700"
                            controlled-by="<?php echo "faq-cat-" . $category->term_id ?>">
                            <div class="overflow-hidden">
                                <?php Templates::getPart('faq-group', ['term_ids' => [$category->term_id]]); ?>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>

    </div>

    <div class="container flex justify-center items-center md:hidden mt-3">

        <a href="<?php echo esc_url($faq_button['url'] ?? (!empty($faq_button_link) ? 'tel:' . $faq_button_link : '/contact-us')); ?>" class="shadow-item secondary-btn text-xl font-medium text-cynWhite w-full text-center">
            <?php _e('تماس با ما', 'jonubgard'); ?>
        </a>

    </div>
</section>