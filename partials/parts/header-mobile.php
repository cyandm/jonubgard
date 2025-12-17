<?php

use Cyan\Theme\Helpers\Icon;

$address_link = get_option('address_link');
$phone_number = get_option('phone_number');
$telegram_link = get_option('telegram_link');
$telegram_text = get_option('telegram_text');
$instagram_link = get_option('instagram_link');
$instagram_text = get_option('instagram_text');
$whatsapp_link = get_option('whatsapp_link');
$twitter_link = get_option('twitter_link');
$twitter_text = get_option('twitter_text');
?>

<section class="mobile-menu-scroll h-screen bg-white p-5 w-0 fixed inset-0 z-50 opacity-0 pointer-events-none overflow-y-auto data-[active='true']:w-full data-[active='true']:opacity-100 data-[active='true']:pointer-events-auto duration-500" modal data-modal-name="menu-modal" data-active="false">

      <div class="flex justify-between items-center">

            <div class="size-8 flex justify-center items-center text-cynBlue" modal-closer data-modal-name="menu-modal">
                  <?php Icon::print('Arrow,-Forward'); ?>
            </div>

            <div><?php the_custom_logo() ?></div>

      </div>

      <div class="mt-2.5">

            <?php wp_nav_menu([
                  'menu_id' => 'mobile-menu',
                  'menu_class' => 'gap-0.5 [&>li]:border-t [&>li]:border-[#F4F4F6] [&>li]:first:border-t-0 flex-col text-cynBlack [&_li_a]:flex [&_li_a]:pb-2 [&_li_a]:pt-3 [&_li_a]:w-full text-xl font-semibold [&_li_ul_li_a]:pr-3',
                  'depth' => '3',
                  'theme_location' => 'header-menu',
                  'container' => 'ul'
            ]); ?>

      </div>

      <div class="flex gap-3 flex-col text-cynBlack text-sm font-medium mt-8 mb-12">

            <?php if ($phone_number || $telegram_link || $instagram_link || $whatsapp_link) : ?>

                  <p class="text-xl font-medium"><?php _e('شبکه های اجتماعی', 'jonubgard'); ?></p>

                  <div class="flex flex-col gap-4">

                        <?php if ($phone_number) : ?>
                              <a href="tel:<?php echo $phone_number ?>" class="bg-cynBG rounded-xl text-cynBlack p-2 flex items-center gap-1">
                                    <i class="size-6 flex items-center justify-center text-cynOrange stroke-2">
                                          <?php Icon::print('Phone,-Call'); ?>
                                    </i>
                                    <span class="pt-1"><?php echo $phone_number ?></span>
                              </a>
                        <?php endif; ?>

                        <?php if ($whatsapp_link) : ?>
                              <a href="<?php echo $whatsapp_link ?>" class="bg-cynBG rounded-xl text-cynBlack p-2 flex items-center gap-1">
                                    <i class="size-6 flex items-center justify-center text-[#22C55E] stroke-2">
                                          <?php Icon::print('Whatsup'); ?>
                                    </i>
                                    <span class="pt-1"><?php echo $whatsapp_link ?></span>
                              </a>
                        <?php endif; ?>

                        <?php if ($twitter_link) : ?>
                              <a href="<?php echo $twitter_link ?>" class="bg-cynBG rounded-xl text-cynBlack p-2 flex items-center gap-1">
                                    <i class="size-6 flex items-center justify-center text-cynBlack stroke-2 p-0.5">
                                          <?php get_template_part('assets/image/x'); ?>
                                    </i>
                                    <span class="pt-1"><?php echo $twitter_text ?></span>
                              </a>
                        <?php endif; ?>

                        <?php if ($telegram_link) : ?>
                              <a href="<?php echo $telegram_link ?>" class="bg-cynBG rounded-xl text-cynBlack p-2 flex items-center gap-1">
                                    <i class="size-6 flex items-center justify-center text-[#00BFE1] stroke-2">
                                          <?php Icon::print('Telegram'); ?>
                                    </i>
                                    <span class="pt-1"><?php echo $telegram_text ?></span>
                              </a>
                        <?php endif; ?>

                        <?php if ($instagram_link) : ?>
                              <a href="<?php echo $instagram_link ?>" class="bg-cynBG rounded-xl text-cynBlack p-2 flex items-center gap-1">
                                    <i class="size-6 flex items-center justify-center text-[#DB2777] stroke-2">
                                          <?php Icon::print('Instagram'); ?>
                                    </i>
                                    <span class="pt-1"><?php echo $instagram_text ?></span>
                              </a>
                        <?php endif; ?>

                  </div>
            <?php endif; ?>
      </div>

</section>