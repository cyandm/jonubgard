<?php

/**
 * The template for displaying single blog posts
 * 
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 * @package CyanTheme
 */

use Cyan\Theme\Helpers\Templates;
use Cyan\Theme\Helpers\Icon;
?>
<?php get_header(); ?>
<main class="single-post">

    <?php Templates::getPart('breadcrumb'); ?>

    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>

            <section class="container flex gap-3.5 flex-col-reverse lg:flex-row">

                <?php Templates::getPart('sidebar-blog'); ?>

                <div class="w-full lg:w-3/4">

                    <div class="flex flex-col gap-2 mb-5">

                        <div class="text-cynBlack/50 text-sm font-medium flex gap-2 items-center"><?php the_category('|'); ?></div>

                        <span class="text-2xl md:text-3xl font-extrabold text-cynBlack leading-9"><?php the_title(); ?></span>

                        <img src="<?= get_template_directory_uri(); ?>/assets/image/zigzag.svg" alt="zigzag" class="w-32">

                        <div class="flex gap-4 items-center mt-2">

                            <div class="flex flex-row gap-1 items-center justify-center">

                                <?= get_avatar('', '', '', '', ['class' => 'size-6 rounded-full']); ?>
                                <span class="text-cynBlack/50 text-xs font-semibold pt-1"><?php the_author(); ?></span>

                            </div>

                            <div class="flex flex-row gap-1 items-center justify-center">

                                <i class="size-6 text-cynBlack/50">
                                    <?php Icon::print('calendar-schedule-1-1') ?>
                                </i>
                                <span class="text-cynBlack/50 text-xs font-semibold pt-1"><?= get_the_date(); ?></span>

                            </div>

                        </div>

                        <div class="flex justify-between p-6 rounded-3xl bg-cynWhite shadow-item mt-2 items-center">

                            <div class="flex items-center">
                                <i class="size-6 text-cynBlack" id="shareBtn">
                                    <?php Icon::print('Share-2') ?>
                                </i>
                            </div>

                            <div class="flex items-center gap-2">

                                <span class="text-cynBlack text-sm font-semibold pt-1"><?= get_comments_number(); ?></span>

                                <i class="size-6 text-cynBlack">
                                    <?php Icon::print('Chat,-Messages,-Bubble-6') ?>
                                </i>

                            </div>

                        </div>
                    </div>

                    <div class="single-post-content">

                        <div class="w-full">
                            <?php the_post_thumbnail('full', ['class' => 'w-full h-[494px] object-cover object-center']) ?>
                        </div>

                        <div class="text-cynBlack [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:my-4 [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:my-4 [&_h4]:text-xl [&_h4]:font-medium [&_h4]:my-4 [&_p]:text-base [&_p]:font-medium [&_p]:leading-8 [&_p]:my-4 [&_img]:w-full [&_img]:max-h-96 [&_img]:object-cover [&_blockquote]:bg-[#D1E3FF] [&_blockquote]:px-2 [&_blockquote]:my-4">
                            <?php the_content(); ?>
                        </div>

                    </div>

                    <!-- Comments Section -->
                    <?php if (comments_open() || get_comments_number()) : ?>
                        <div class="comments-section">
                            <?php Templates::getPart('comments-blog'); ?>
                        </div>
                    <?php endif; ?>

                </div>

            </section>

    <?php endwhile;
    endif; ?>

</main>

<?php get_footer();
