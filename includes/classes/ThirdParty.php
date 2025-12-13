<?php

/**
 * Third Party Plugins
 * if you want to add a new third party plugin, add it here
 * @package Cyan\Theme\Classes
 */

namespace Cyan\Theme\Classes;

class ThirdParty
{

	public static function init()
	{
		self::acf();
		self::woocommerce();
	}

	private static function includePluginFunctions()
	{
		if (! function_exists('is_plugin_active')) {
			require_once ABSPATH . 'wp-admin/includes/plugin.php';
		}
	}

	public static function acf()
	{

		self::includePluginFunctions();

		//check acf plugin activated
		if (! is_plugin_active('advanced-custom-fields/acf.php')) {
			add_action('admin_notices', function () {
				echo '<div class="notice notice-error">';
				echo '<p>' . esc_html__(THEME_NAME . ': The ACF plugin is not active. Please install and activate the ACF plugin to enable additional features.', 'cyn-theme') . '</p>';
				echo '</div>';
			});
			return;
		}

		ACF::init();
	}

	public static function woocommerce()
	{
		self::includePluginFunctions();

		// Check WooCommerce plugin activated
		if (!is_plugin_active('woocommerce/woocommerce.php')) {
			return;
		}

		// Save booking data to cart item
		add_filter('woocommerce_add_cart_item_data', [__CLASS__, 'addBookingDataToCart'], 10, 3);

		// Display booking data in cart and checkout
		add_filter('woocommerce_get_item_data', [__CLASS__, 'displayBookingDataInCart'], 10, 2);

		// Save booking data to order item
		add_action('woocommerce_checkout_create_order_line_item', [__CLASS__, 'saveBookingDataToOrder'], 10, 4);

		// Redirect to checkout after adding to cart (if booking data exists)
		add_filter('woocommerce_add_to_cart_redirect', [__CLASS__, 'redirectToCheckout'], 10, 1);

		add_action('init', function () {
			remove_action('woocommerce_before_main_content', 'woocommerce_breadcrumb', 20);
			remove_action('woocommerce_before_shop_loop', 'woocommerce_result_count', 20);
			remove_action('woocommerce_before_shop_loop', 'woocommerce_catalog_ordering', 30);
		});
	}

	/**
	 * Add booking data to cart item
	 */
	public static function addBookingDataToCart($cart_item_data, $product_id, $variation_id)
	{
		// Get booking data from URL parameters (GET) or form data (POST)
		$request_data = array_merge($_GET, $_POST);

		if (isset($request_data['quantity'])) {
			$cart_item_data['booking_adult_count'] = sanitize_text_field($request_data['quantity']);
		}
		if (isset($request_data['booking_child_count'])) {
			$cart_item_data['booking_child_count'] = sanitize_text_field($request_data['booking_child_count']);
		}
		if (isset($request_data['booking_guest_name'])) {
			$cart_item_data['booking_guest_name'] = sanitize_text_field($request_data['booking_guest_name']);
		}

		return $cart_item_data;
	}

	/**
	 * Display booking data in cart and checkout
	 */
	public static function displayBookingDataInCart($item_data, $cart_item)
	{
		if (isset($cart_item['booking_adult_count'])) {
			$item_data[] = [
				'key' => __('تعداد بزرگسال', 'jonubgard'),
				'value' => $cart_item['booking_adult_count'],
			];
		}
		if (isset($cart_item['booking_child_count']) && $cart_item['booking_child_count'] > 0) {
			$item_data[] = [
				'key' => __('تعداد کودک', 'jonubgard'),
				'value' => $cart_item['booking_child_count'],
			];
		}
		if (isset($cart_item['booking_guest_name']) && !empty($cart_item['booking_guest_name'])) {
			$item_data[] = [
				'key' => __('نام مهمان', 'jonubgard'),
				'value' => $cart_item['booking_guest_name'],
			];
		}

		return $item_data;
	}

	/**
	 * Save booking data to order item
	 */
	public static function saveBookingDataToOrder($item, $cart_item_key, $values, $order)
	{
		if (isset($values['booking_adult_count'])) {
			$item->add_meta_data(__('تعداد بزرگسال', 'jonubgard'), $values['booking_adult_count']);
		}
		if (isset($values['booking_child_count']) && $values['booking_child_count'] > 0) {
			$item->add_meta_data(__('تعداد کودک', 'jonubgard'), $values['booking_child_count']);
		}
		if (isset($values['booking_guest_name']) && !empty($values['booking_guest_name'])) {
			$item->add_meta_data(__('نام مهمان', 'jonubgard'), $values['booking_guest_name']);
		}
	}

	/**
	 * Redirect to checkout after adding booking to cart
	 */
	public static function redirectToCheckout($url)
	{
		// If booking data exists in request, redirect to checkout
		$request_data = array_merge($_GET, $_POST);
		if (isset($request_data['booking_child_count']) || isset($request_data['booking_guest_name'])) {
			return wc_get_checkout_url();
		}

		return $url;
	}
}
