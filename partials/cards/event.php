<?php

use Cyan\Theme\Helpers\Icon;

$event_date = get_field('event_date');
$event_button = get_field('event_button');
?>

<div class="flex flex-col-reverse md:flex-row gap-4 lg:gap-24">

    <div class="w-full md:w-3/5 flex justify-center items-center">

        <div class="flex flex-col gap-2 md:gap-4">

            <div class="text-2xl md:text-3xl font-bold"><?php the_title(); ?></div>

            <div class="text-base md:text-xl font-medium text-cynBlack leading-8 md:leading-9"><?php the_content(); ?></div>

            <div class="flex items-center gap-1 text-cynOrange">

                <i class="size-6">
                    <?php Icon::print('calendar-schedule-1-1'); ?>
                </i>
                <span class="text-base font-medium pt-1">
                    <?php echo $event_date; ?>
                </span>

            </div>

            <a href="<?php echo $event_button['url']; ?>" class="secondary-btn text-center md:w-fit text-cynWhite mt-2">
                <?php echo $event_button['title']; ?>
            </a>

        </div>

    </div>

    <div class="w-full md:w-2/5">
        <img src="<?php echo get_the_post_thumbnail_url('', 'full'); ?>" alt="<?php the_title(); ?>" class="w-full h-[380px] md:h-[465px] object-cover">
    </div>

</div>