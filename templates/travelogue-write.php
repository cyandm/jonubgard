<?php /* Template Name: Travelogue Write */ ?>

<?php

use Cyan\Theme\Helpers\Templates;
use Cyan\Theme\Helpers\Icon;

$travelogue_query = new WP_Query([
    'post_type' => 'travelogue',
    'posts_per_page' => 4
]);

$travelogue_write_title = get_field('travelogue_write_title');
$travelogue_write_subtitle = get_field('travelogue_write_subtitle');

get_header(); ?>

<main class="travelogue-write">

    <?php Templates::getPart('breadcrumb'); ?>

    <section class="container flex gap-6 flex-col-reverse lg:flex-row">

        <?php Templates::getPart('sidebar-travelogue'); ?>

        <div class="w-full lg:w-3/4 bg-cynWhite rounded-3xl shadow-item p-6">

            <div class="flex flex-col gap-3">

                <h1 class="text-2xl font-bold text-cynBlack leading-9"><?= $travelogue_write_title ? $travelogue_write_title : get_the_title(); ?></h1>

                <div class="flex flex-col gap-4">

                    <p class="text-cynBlack/50 text-base font-semibold leading-9">
                        <?= $travelogue_write_subtitle ? $travelogue_write_subtitle : __('اینجا داستان خودت رو از سفری که داشتی با بقیه به اشتراک بزار ', 'jonubgard'); ?>
                    </p>

                    <form hx-post="<?php echo rest_url('cyn/v1/travelogue_form') ?>" hx-target=".result" hx-swap="innerHTML" hx-encoding="multipart/form-data" hx-on::after-request="const resultEl = document.querySelector('.result'); resultEl.style.display = 'block'; resultEl.style.opacity = '1'; resultEl.textContent = '<?php _e('با موفقیت ارسال شد', 'jonubgard'); ?>'; setTimeout(() => { resultEl.style.transition = 'opacity 0.5s ease-out'; resultEl.style.opacity = '0'; setTimeout(() => { resultEl.style.display = 'none'; }, 500); }, 5000);" action="" method="post" id="travelogue_form" class="flex flex-col gap-4 w-full [&_label]:w-full [&_input]:w-full [&_textarea]:w-full">

                        <label for="fullname" class="relative">
                            <div class="size-6 text-cynBlack/60 absolute start-3 top-1/2 -translate-y-1/2">
                                <?php icon::print('User,-Profile-7'); ?>
                            </div>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="<?php _e('نام شما'); ?>"
                                required
                                class="focus:outline-none w-full font-medium text-base ps-10 pt-3 pb-2 bg-white rounded-2xl border border-cynBlack/20" />
                        </label>

                        <label for="email" class="relative">
                            <div class="size-6 text-cynBlack/60 absolute start-3 top-1/2 -translate-y-1/2">
                                <?php icon::print('email-mail-letter'); ?>
                            </div>
                            <input type="email" id="email" name="email" placeholder="<?php _e('ایمیل شما'); ?>" class="focus:outline-none w-full font-medium text-base ps-10 pt-3 pb-2 bg-white rounded-2xl border border-cynBlack/20" />
                        </label>

                        <label for="phone" class="relative">
                            <div class="size-6 text-cynBlack/60 absolute start-3 top-1/2 -translate-y-1/2">
                                <?php icon::print('Phone,-Call-11'); ?>
                            </div>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="<?php _e('شماره تماس'); ?>"
                                pattern="[0-9]{11}"
                                required
                                dir="rtl"
                                class="focus:outline-none w-full font-medium text-base ps-10 pt-3 pb-2 bg-white rounded-2xl border border-cynBlack/20" />

                        </label>

                        <label for="travelogue_destination" class="relative">
                            <div class="size-6 text-cynBlack/60 absolute start-3 top-1/2 -translate-y-1/2">
                                <?php icon::print('Plane,-Trip,-International'); ?>
                            </div>
                            <input type="text" id="travelogue_destination" name="travelogue_destination" placeholder="<?php _e('مقصدتون'); ?>" class="focus:outline-none w-full font-medium text-base ps-10 pt-3 pb-2 bg-white rounded-2xl border border-cynBlack/20" />
                        </label>

                        <label for="message" class="relative">
                            <div class="size-6 text-cynBlack/60 absolute start-3 top-3">
                                <?php icon::print('Chat,-Messages-1'); ?>
                            </div>
                            <textarea name="message" id="message" rows="8" maxlength="65525" placeholder="<?php _e('سفرنامه'); ?>" required class="focus:outline-none w-full text-cynTextGray resize-y m-0 align-bottom ps-10 pt-3 pb-2 bg-white rounded-2xl border border-cynBlack/20"></textarea>
                        </label>

                        <div class="relative">
                            <input type="file" id="images" name="images[]" accept="image/png,image/jpeg,image/jpg,image/webp,image/heic" multiple data-select-text="<?php echo esc_attr__('انتخاب عکس', 'jonubgard'); ?>" data-files-selected-text="<?php echo esc_attr__('فایل انتخاب شده', 'jonubgard'); ?>" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                            <label for="images" class="relative flex items-center font-medium bg-white ps-3 py-2 gap-1 rounded-2xl border border-cynBlack/20 cursor-pointer hover:border-cynOrange transition-colors">
                                <div class="size-6 text-cynBlack/60">
                                    <?php icon::print('copy-image-select'); ?>
                                </div>
                                <span class="text-base text-cynBlack/60 flex-1 pt-1" id="file-label"><?php _e('انتخاب عکس', 'jonubgard'); ?></span>
                            </label>
                        </div>

                        <p class="text-cynBlack/60 text-sm block"><?php _e('می‌توانید چند عکس انتخاب کنید (فرمت‌های مجاز: PNG, JPG, JPEG, WEBP, HEIC)', 'jonubgard'); ?></p>

                        <!-- Image Preview Container -->
                        <div id="image-preview-container" class="hidden grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3"></div>

                        <div class="flex justify-end">
                            <button type="submit" class="secondary-btn text-white flex justify-center items-center gap-1 !text-base !font-semibold">
                                <span class="size-6 stroke-[1.5]">
                                    <?php icon::print('Send') ?>
                                </span>
                                <span class="pt-1">
                                    <?php _e('ارسال سفرنامه'); ?>
                                </span>
                            </button>
                        </div>

                    </form>

                    <div class="result bg-green-500 text-white text-base font-semibold rounded-2xl p-3 shadow-item fixed top-4 right-4 z-10 pt-4" style="display:none; opacity: 0; transition: opacity 0.5s ease-out;"></div>

                </div>

            </div>

    </section>

</main>

<?php get_footer();
