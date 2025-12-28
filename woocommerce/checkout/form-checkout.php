<?php

/**
 * Checkout Form
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/checkout/form-checkout.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see https://woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 9.4.0
 */

if (! defined('ABSPATH')) {
	exit;
}

use Cyan\Theme\Helpers\Icon;

// Check if guest checkout is disabled and user is not logged in
$guest_checkout_enabled = get_option('woocommerce_enable_guest_checkout', 'yes');
$is_logged_in = is_user_logged_in();
$show_login_modal = ($guest_checkout_enabled !== 'yes' && ! $is_logged_in);

do_action('woocommerce_before_checkout_form', $checkout);

// If checkout registration is disabled and not logged in, the user cannot checkout.
// However, if we're showing a login modal, don't return early so the modal can be displayed
if (! $checkout->is_registration_enabled() && $checkout->is_registration_required() && ! is_user_logged_in() && ! $show_login_modal) {
	echo esc_html(apply_filters('woocommerce_checkout_must_be_logged_in_message', __('You must be logged in to checkout.', 'woocommerce')));
	return;
}

?>

<form name="checkout" method="post" class="checkout woocommerce-checkout" action="<?php echo esc_url(wc_get_checkout_url()); ?>" enctype="multipart/form-data" aria-label="<?php echo esc_attr__('Checkout', 'woocommerce'); ?>">

	<?php if ($checkout->get_checkout_fields()) : ?>

		<?php do_action('woocommerce_checkout_before_customer_details'); ?>

		<div class="col2-set" id="customer_details">
			<div class="col-1">
				<?php do_action('woocommerce_checkout_billing'); ?>
			</div>

			<div class="col-2">
				<?php do_action('woocommerce_checkout_shipping'); ?>
			</div>
		</div>

		<?php do_action('woocommerce_checkout_after_customer_details'); ?>

	<?php endif; ?>

	<?php do_action('woocommerce_checkout_before_order_review_heading'); ?>

	<?php do_action('woocommerce_checkout_before_order_review'); ?>

	<div id="order_review" class="woocommerce-checkout-review-order">
		<h3 id="order_review_heading"><?php esc_html_e('Your order', 'woocommerce'); ?></h3>
		<?php do_action('woocommerce_checkout_order_review'); ?>
	</div>

	<?php do_action('woocommerce_checkout_after_order_review'); ?>

</form>

<?php do_action('woocommerce_after_checkout_form', $checkout); ?>

<?php
$login_url = get_site_url() . '/login';
// Get referer URL or fallback to shop page
$referer_url = wp_get_referer();
if (!$referer_url) {
	$referer_url = wc_get_page_permalink('shop') ?: home_url();
}
?>

<?php if ($show_login_modal) : ?>
	<!-- Login Required Modal -->
	<section class="container flex justify-center items-center h-fit top-1/2 -translate-y-1/2 w-0 fixed inset-0 z-50 opacity-0 pointer-events-none md:data-[active='true']:!w-10/12 data-[active='true']:opacity-100 data-[active='true']:pointer-events-auto duration-500" modal data-modal-name="login-required-modal" data-active="false">

		<div class="w-full p-4 md:p-6 bg-cynWhite rounded-3xl shadow-item flex flex-col gap-6 justify-center items-center relative max-w-md">

			<div class="flex flex-col gap-3 justify-center items-center">
				<p class="text-xl font-bold text-center"><?php _e('ورود به حساب کاربری', 'jonubgard'); ?></p>
				<p class="text-base font-medium text-cynBlack text-center">
					<?php _e('برای ادامه ی فرایند رزرو ابتدا وارد حساب کاربری خود شوید', 'jonubgard'); ?>
				</p>
			</div>

			<div class="flex gap-3 justify-center w-full">

				<a href="<?php echo esc_url($referer_url); ?>" class="w-full border border-cynOrange rounded-2xl py-3 px-2.5 text-xl font-medium text-cynOrange flex justify-center items-center hover:bg-cynOrange hover:text-cynWhite transition-all duration-300">
					<?php _e('انصراف', 'jonubgard'); ?>
				</a>

				<a href="<?php echo esc_url($login_url); ?>" class="secondary-btn w-full text-white text-center">
					<?php _e('ورود / ثبت نام', 'jonubgard'); ?>
				</a>

			</div>

		</div>

		<!-- Checkout data for JavaScript -->
		<script type="application/json" id="checkout-login-data">
			{
				"guestCheckoutEnabled": <?php echo $guest_checkout_enabled === 'yes' ? 'true' : 'false'; ?>,
				"isLoggedIn": <?php echo $is_logged_in ? 'true' : 'false'; ?>,
				"showModal": <?php echo $show_login_modal ? 'true' : 'false'; ?>
			}
		</script>

	</section>
<?php endif; ?>