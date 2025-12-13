<?php

/**
 * The template for displaying all pages
 *
 * @package CyanTheme
 */

get_header();
?>

<main id="main" class="site-main container my-10">

    <?php
    while (have_posts()) :
        the_post();
    ?>

        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
            <header class="entry-header mb-6">
                <?php the_title('<h1 class="entry-title text-3xl font-bold">', '</h1>'); ?>
            </header>

            <div class="entry-content prose max-w-none">
                <?php
                the_content();

                wp_link_pages(
                    array(
                        'before' => '<div class="page-links">' . esc_html__('Pages:', 'jonubgard'),
                        'after'  => '</div>',
                    )
                );
                ?>
            </div>
        </article>

    <?php
    endwhile;
    ?>

</main>

<?php get_footer(); ?>