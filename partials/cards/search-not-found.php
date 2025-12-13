<?php

use Cyan\Theme\Helpers\Icon;

/**
 * No search results found card
 * @package CyanTheme
 */

?>

<div class="py-16 px-6 text-center flex flex-col items-center justify-center gap-6">

    <div class="w-24 h-24 text-gray-300">
        <?php Icon::print('Search,-Loupe'); ?>
    </div>

    <div class="flex flex-col gap-3">
        <h2 class="text-2xl md:text-3xl font-bold text-cynBlack">
            <?php _e('نتیجه‌ای یافت نشد', 'jonubgard'); ?>
        </h2>

        <p class="text-base md:text-lg text-gray-600">
            <?php _e('متأسفانه نتیجه‌ای برای جستجوی شما یافت نشد. لطفاً با کلمات دیگری جستجو کنید.', 'jonubgard'); ?>
        </p>
    </div>

    <div class="flex gap-4 flex-wrap justify-center mt-4">
        <a href="<?php echo esc_url(home_url('/')); ?>" class="primary-btn">
            <?php _e('بازگشت به صفحه اصلی', 'jonubgard'); ?>
        </a>

        <?php if (function_exists('wc_get_page_permalink')) : ?>
            <a href="<?php echo esc_url(wc_get_page_permalink('shop')); ?>" class="secondary-btn text-white">
                <?php _e('مشاهده همه تورها', 'jonubgard'); ?>
            </a>
        <?php endif; ?>
    </div>

</div>