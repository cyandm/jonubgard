<?php

use Cyan\Theme\Helpers\Icon;

$postId = $args['post-id'] ?? get_the_ID();
$author_name = get_field('author_name_travelogue', $postId);
?>

<a href="<?php the_permalink(); ?>" class="relative block w-full h-96 overflow-hidden group" style="background-image: url('<?php the_post_thumbnail_url('full'); ?>'); background-size: cover; background-position: center;">

    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 group-hover:bg-black/30 duration-300 z-0"></div>

    <div class="flex flex-col justify-between h-full p-3 z-10 relative">

        <div class="flex gap-1 items-center text-cynWhite bg-white/40 backdrop-blur-xl p-1 text-xs font-semibold rounded-lg w-fit">
            <i class="size-5"><?php Icon::print('calendar-schedule-1-1') ?></i>
            <span class="fa"><?php echo get_the_date(); ?></span>
        </div>

        <div class="flex flex-col gap-2.5">

            <p class="text-cynWhite font-bold text-2xl pt-1 line-clamp-2"><?php the_title(); ?></p>

            <div class="flex gap-1 items-center text-cynWhite group-hover:text-cynOrange transition-all duration-300">
                <span class="text-base font-normal fa"><?php _e('بازدید', 'jonubgard'); ?></span>
                <i class="size-6"><?php Icon::print('Arrow-6') ?></i>
            </div>

            <div class="flex gap-1 items-center text-cynWhite bg-white/40 backdrop-blur-xl py-1 px-1.5 text-xs font-semibold rounded-lg w-fit">
                <i class="size-5"><?php Icon::print('User,Profile-11') ?></i>
                <span class="pt-1"><?php echo $author_name; ?></span>
            </div>

        </div>

    </div>

</a>