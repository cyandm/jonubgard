/**
 * Handles the checkout layout functionality.
 * Fixes the checkout layout issues.
 *
 * @function
 * @name CheckoutLayout
 * @returns {void}
 */

export function CheckoutLayout() {
  document.addEventListener("DOMContentLoaded", function () {
    const formCoupon = document.querySelector(
      ".woocommerce-form-coupon-toggle"
    );
    const checkoutForm = document.querySelector(
      "form.woocommerce-checkout div.woocommerce-checkout-review-order"
    );
    const paymentSection = document.querySelector(
      ".woocommerce-checkout-payment"
    );

    if (formCoupon && checkoutForm && paymentSection) {
      checkoutForm.insertBefore(formCoupon, paymentSection);
    }
  });
}

export function CheckoutCoupon() {
  document.addEventListener("DOMContentLoaded", function () {
    const infoBox = document.querySelector(".woocommerce-info");
    const couponForm = document.querySelector(
      ".checkout_coupon.woocommerce-form-coupon"
    );

    if (infoBox && couponForm) {
      infoBox.appendChild(couponForm);
    }
  });
}
