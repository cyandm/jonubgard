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
}