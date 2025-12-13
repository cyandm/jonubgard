<?php

use Cyan\Theme\Helpers\Icon;
use Cyan\Theme\Helpers\Templates;

defined('ABSPATH') || exit;

global $wp_query;

$search_type = empty($_GET['search-type']) ? 'all' : $_GET['search-type'];

?>

<?php get_header() ?>

<?php Templates::getPart('breadcrumb'); ?>

<main id="search-page" class="flex flex-col gap-6">

      <section class="bg-cynWhite py-10">

            <div id="searchPostType" class="container">

                  <form id="search-form" class="flex justify-between items-center max-md:flex-col max-md:gap-6">

                        <div class="relative max-md:w-full">

                              <div class="absolute inset-0 top-1/2 -translate-y-1/2 flex items-center ps-3.5 pointer-events-none text-cynOrange size-9">
                                    <?php Icon::print('Search,-Loupe'); ?>
                              </div>

                              <input type="text"
                                    id="email-address-icon"
                                    name="s"
                                    value="<?php the_search_query() ?>"
                                    class="text-cynBlack text-base font-medium rounded-2xl border border-cynBorder focus:outline-none focus:ring-cynBlack focus:border-cynBlack block w-full ps-10 p-3 pt-3.5 transition-all duration-200 md:min-w-64"
                                    placeholder="<?php _e('دنبال چی میگردی؟', 'jonubgard'); ?>">
                        </div>

                        <div class="flex justify-between items-center gap-6 max-sm:flex-col max-sm:items-start max-sm:w-full text-base font-medium">

                              <div class="pt-1">
                                    <?php _e('جستجو در', 'jonubgard'); ?> :
                              </div>

                              <div class="flex gap-4 max-md:justify-between max-sm:w-full">
                                    <div class="flex justify-center items-center gap-1">
                                          <input class="custom filter blog_input w-6 h-6 "
                                                value="all"
                                                type="radio"
                                                name="search-type"
                                                id="search-all"
                                                <?php echo $search_type === 'all' ? 'checked' : '' ?>>
                                          <label for="product" class="pt-1"><?php _e('همه', 'jonubgard'); ?></label>
                                    </div>

                                    <div class="flex justify-center items-center gap-1 fa">
                                          <input class="custom filter blog_input w-6 h-6"
                                                value="product"
                                                type="radio"
                                                name="search-type"
                                                id="search-product"
                                                <?php echo $search_type === 'product' ? 'checked' : '' ?>>
                                          <label for="product" class="pt-1"><?php _e('تورها', 'jonubgard'); ?></label>
                                    </div>

                                    <div class="flex justify-center items-center gap-1 fa">
                                          <input class="custom filter blog_input w-6 h-6"
                                                value="destination"
                                                type="radio"
                                                name="search-type"
                                                id="search-destination"
                                                <?php echo $search_type === 'destination' ? 'checked' : '' ?>>
                                          <label for="destination" class="pt-1"><?php _e('مقصدها', 'jonubgard'); ?></label>
                                    </div>
                                    <div class="flex justify-center items-center gap-1 fa">
                                          <input class="custom filter blog_input w-6 h-6"
                                                value="post"
                                                type="radio"
                                                name="search-type"
                                                id="search-blog"
                                                <?php echo $search_type === 'post' ? 'checked' : '' ?>>
                                          <label for="blog" class="pt-1"><?php _e('بلاگ', 'jonubgard'); ?></label>
                                    </div>

                              </div>
                        </div>

                        <div class="h-[1px] bg-cynBorder w-full md:hidden"></div>

                        <?php if (! empty($_GET['s'])) : ?>
                              <div class="flex items-center gap-1 text-base font-medium text-cynBlack">
                                    <span class="pt-1"><?php echo $wp_query->post_count; ?></span>
                                    <span class="pt-1"><?php _e('نتیجه', 'jonubgard'); ?></span>
                              </div>
                        <?php endif ?>
                  </form>

            </div>

      </section>

      <section class="container">
            <?php if (! empty($_GET['s'])) : ?>

                  <?php if (have_posts()) : ?>

                        <div id="searchPostsWrapper" class="space-y-4">
                              <?php while (have_posts()) :
                                    the_post()
                              ?>
                                    <div class="">
                                          <?php Templates::getCard('search') ?>
                                    </div>
                              <?php endwhile; ?>
                        </div>

                  <?php
                  else:
                        Templates::getCard('search-not-found');
                  endif;
                  ?>

            <?php endif; ?>
      </section>

</main>





<?php get_footer() ?>