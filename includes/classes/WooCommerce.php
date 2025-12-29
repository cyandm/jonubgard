<?php

/**
 * WooCommerce Customizations
 * Custom modifications for WooCommerce checkout and other features
 * @package Cyan\Theme\Classes
 */

namespace Cyan\Theme\Classes;

class WooCommerce
{

    public static function init()
    {
        // Remove specific checkout fields
        add_filter('woocommerce_checkout_fields', [__CLASS__, 'removeCheckoutFields'], 9999);

        // Make phone field required
        add_filter('woocommerce_checkout_fields', [__CLASS__, 'makePhoneRequired'], 9999);

        // Add placeholders to fields
        add_filter('woocommerce_checkout_fields', [__CLASS__, 'addPlaceholders'], 9999);

        // Customize coupon success messages
        add_filter('woocommerce_coupon_message', [__CLASS__, 'customizeCouponMessages'], 10, 3);

        // Customize coupon error messages
        add_filter('woocommerce_coupon_error', [__CLASS__, 'customizeCouponErrors'], 10, 3);
    }

    /**
     * Remove specific fields from checkout form
     * First makes them non-required, then removes them
     * 
     * @param array $fields Checkout fields
     * @return array Modified checkout fields
     */
    public static function removeCheckoutFields($fields)
    {
        // Fields to remove
        $fields_to_remove = [
            'billing_address_1',
            'billing_address_2',
            'billing_city',
            'billing_state',
            'billing_email',
        ];

        // First, make fields non-required to avoid validation errors
        foreach ($fields_to_remove as $field_key) {
            if (isset($fields['billing'][$field_key])) {
                $fields['billing'][$field_key]['required'] = false;
            }
        }

        // Then remove the fields
        foreach ($fields_to_remove as $field_key) {
            if (isset($fields['billing'][$field_key])) {
                unset($fields['billing'][$field_key]);
            }
        }

        return $fields;
    }

    /**
     * Make phone field required
     * 
     * @param array $fields Checkout fields
     * @return array Modified checkout fields
     */
    public static function makePhoneRequired($fields)
    {
        if (isset($fields['billing']['billing_phone'])) {
            $fields['billing']['billing_phone']['required'] = true;
        }

        return $fields;
    }

    /**
     * Add placeholders to checkout fields
     * 
     * @param array $fields Checkout fields
     * @return array Modified checkout fields
     */
    public static function addPlaceholders($fields)
    {
        // Add placeholder for first name
        if (isset($fields['billing']['billing_first_name'])) {
            $fields['billing']['billing_first_name']['placeholder'] = __('نام', 'jonubgard');
        }

        // Add placeholder for last name
        if (isset($fields['billing']['billing_last_name'])) {
            $fields['billing']['billing_last_name']['placeholder'] = __('نام خانوادگی', 'jonubgard');
        }

        // Add placeholder for phone
        if (isset($fields['billing']['billing_phone'])) {
            $fields['billing']['billing_phone']['placeholder'] = __('شماره تلفن', 'jonubgard');
        }

        return $fields;
    }

    /**
     * Customize WooCommerce coupon success messages
     * Localizes coupon applied/removed messages
     * 
     * @param string $msg Message text
     * @param int $msg_code Message code
     * @param object $coupon Coupon object
     * @return string Modified message
     */
    public static function customizeCouponMessages($msg, $msg_code, $coupon)
    {
        switch ($msg_code) {
            case \WC_Coupon::WC_COUPON_SUCCESS:
                $msg = '🎉 تبریک! کد تخفیف "' . esc_html($coupon->get_code()) . '" با موفقیت اعمال شد.';
                break;
            case \WC_Coupon::WC_COUPON_REMOVED:
                $msg = 'کد تخفیف حذف شد.';
                break;
        }
        return $msg;
    }

    /**
     * Customize WooCommerce coupon error messages
     * Localizes all coupon validation error messages
     * 
     * @param string $err Error message
     * @param int $err_code Error code
     * @param object $coupon Coupon object
     * @return string Modified error message
     */
    public static function customizeCouponErrors($err, $err_code, $coupon)
    {
        switch ($err_code) {
            case 100: // INVALID_FILTERED
                $err = '⚠️ کد تخفیف وارد شده معتبر نیست.';
                break;

            case 101: // INVALID_REMOVED
                $err = '❌ کد تخفیف معتبر نیست و حذف شد.';
                break;

            case 102: // NOT_YOURS_REMOVED
                $err = '🚫 این کد به حساب کاربری شما تعلق ندارد.';
                break;

            case 103: // ALREADY_APPLIED
                $err = '🔁 این کد تخفیف قبلاً اعمال شده است.';
                break;

            case 104: // ALREADY_APPLIED_INDIV_USE_ONLY
                $err = '⚠️ این کد فقط به صورت انفرادی قابل استفاده است. ابتدا سایر کدها را حذف کنید.';
                break;

            case 105: // NOT_EXIST
                $err = '❌ کد تخفیفی که وارد کردید وجود ندارد.';
                break;

            case 106: // USAGE_LIMIT_REACHED
                $err = '🚫 سقف استفاده از این کد تخفیف پر شده است.';
                break;

            case 107: // EXPIRED
                $err = '⏰ این کد تخفیف منقضی شده است.';
                break;

            case 108: // MIN_SPEND_LIMIT_NOT_MET
                $min_spend = $coupon->get_minimum_amount();
                $err = '💰 برای استفاده از این کد باید حداقل ' . \wc_price($min_spend) . ' خرید کنید.';
                break;

            case 109: // NOT_APPLICABLE
                $err = '⚠️ این کد برای محصولات انتخاب‌شده قابل استفاده نیست.';
                break;

            case 110: // NOT_VALID_SALE_ITEMS
                $err = '❗ این کد روی کالاهای دارای تخفیف قابل استفاده نیست.';
                break;

            case 111: // PLEASE_ENTER
                $err = '🔤 لطفاً یک کد تخفیف وارد کنید.';
                break;

            case 112: // MAX_SPEND_LIMIT_MET
                $max_spend = $coupon->get_maximum_amount();
                $err = '💸 حداکثر مبلغ خرید برای این کد ' . \wc_price($max_spend) . ' است.';
                break;

            case 113: // EXCLUDED_PRODUCTS
                $err = '🚫 برخی از محصولات شما شامل این کد تخفیف نمی‌شوند.';
                break;

            case 114: // EXCLUDED_CATEGORIES
                $err = '📦 برخی از دسته‌بندی‌های انتخابی مشمول این کد تخفیف نیستند.';
                break;

            case 115: // USAGE_LIMIT_COUPON_STUCK
            case 116: // USAGE_LIMIT_COUPON_STUCK_GUEST
                $err = '⚠️ استفاده از این کد تخفیف به‌دلیل محدودیت تعداد استفاده، امکان‌پذیر نمی‌باشد.';
                break;

            default:
                $err = '❗ خطایی در بررسی کد تخفیف رخ داده است.';
                break;
        }

        return $err;
    }
}
