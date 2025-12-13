<?php

use Cyan\Theme\Helpers\Icon;

// Get args passed from Templates::getCard
$args = get_query_var('args', []);
$postId = $args['post-id'] ?? get_the_ID();

if ($postId === 0) {
    throw new ErrorException('post id is invalid', 0, E_WARNING);
}

?>

<div class="py-6 | faq-card first:pt-0 last:pb-0"
    id="<?php echo "faq-$postId" ?>">
    <div class="faq-toggle | flex justify-between gap-2 items-center cursor-pointer [&_span]:text-cynBlack/60">
        <span class="text-xl font-semibold flex gap-2">
            <i class="not-italic"><?php echo '•' ?></i>
            <?php echo get_the_title($postId) ?>
        </span>

        <div class="icon size-8 fill-primary-50 stroke-primary-50 text-primary-50 transition-all [&_svg]:duration-300 rotate-45 text-zinc-800">
            <?php Icon::print('Delete,-Disabled'); ?>
        </div>
    </div>

    <div class="faq-expert | text-primary-40 text-body_s grid grid-rows-[0fr] transition-all duration-300">
        <div class="overflow-hidden">
            <div class="pt-4 [&_a]:text-[#172EF9] [&_a]:underline text-cynBlack/80 text-base font-medium">
                <?php echo get_the_content(null, false, $postId) ?>
            </div>
        </div>
    </div>
</div>