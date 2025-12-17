<?php

use Cyan\Theme\Helpers\Icon;

$home_page_id = get_option('page_on_front');
$home_future_events_title = get_field('home_future_events_title', $home_page_id);
$home_future_events_image = get_field('home_future_events_image', $home_page_id);

?>

<section class="my-14 h-[460px] md:h-[480px] flex items-end md:items-center" style="background-image: url('<?php echo wp_get_attachment_image_url($home_future_events_image, 'full'); ?>'); background-size: cover; background-position: center; background-repeat: no-repeat;">

    <div class="container flex flex-col gap-4 justify-center max-md:mb-8">
        <p class="text-3xl md:text-5xl font-bold text-cynWhite md:w-[580px] max-md:text-center max-md:w-full leading-12 md:leading-16">
            <?php echo $home_future_events_title ? $home_future_events_title : __('میخوای از تور ها و رویدادهای آینده با خبرشی؟', 'jonubgard'); ?>
        </p>

        <form method="post" class="shadow-item rounded-2xl overflow-hidden md:w-[436px] bg-white/80 flex items-center border border-cynBlack/20">

            <div class="pr-4 pl-1">
                <i class="size-7 text-cynBlack">
                    <?php Icon::print('Plane,-Check,-Travel'); ?>
                </i>
            </div>

            <input type="tel"
                id="contact-number-field"
                class="flex-1 pb-2 pt-2.5 border-0 focus:outline-none text-cynBlack placeholder-cynBlack/50"
                placeholder="<?php _e('شماره تماس', 'jonubgard'); ?>"
                name="contact_number" />

            <div class="p-2">
                <button type="submit" class="secondary-btn !rounded-xl text-white !text-sm !font-medium !px-8 !py-1.5">
                    <?php _e('عضویت', 'jonubgard'); ?>
                </button>
            </div>
        </form>
    </div>

</section>