/**
 * Handles the login required modal on checkout page.
 * Prevents backdrop from closing the modal and automatically shows it when guest checkout is disabled.
 *
 * @function
 * @name CheckoutLoginModal
 * @returns {void}
 */
export function CheckoutLoginModal() {
  // Prevent backdrop from closing login-required-modal
  // Use document-level listener in capture phase to intercept before modals.js
  function setupBackdropPrevention() {
    document.addEventListener(
      "click",
      function (e) {
        // Check if click is on backdrop element or inside it
        const backdrop = e.target.closest("[modal-backdrop]");

        if (backdrop) {
          const loginModal = document.querySelector(
            '[modal][data-modal-name="login-required-modal"]'
          );
          if (loginModal && loginModal.dataset.active === "true") {
            // Prevent closing this modal via backdrop click
            e.stopImmediatePropagation();
            e.stopPropagation();
            e.preventDefault();
            return false;
          }
        }
      },
      true
    ); // Capture phase - runs before modals.js handler
  }

  // Wait for DOM to be ready
  function init() {
    setupBackdropPrevention();
    initLoginModal();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  function initLoginModal() {
    const dataElement = document.getElementById("checkout-login-data");
    if (!dataElement) return;

    try {
      const data = JSON.parse(dataElement.textContent);

      // If guest checkout is disabled and user is not logged in, show modal
      if (data.showModal && !data.guestCheckoutEnabled && !data.isLoggedIn) {
        const modal = document.querySelector(
          '[modal][data-modal-name="login-required-modal"]'
        );
        if (modal) {
          // Small delay to ensure modal system is initialized
          setTimeout(function () {
            modal.dataset.active = "true";

            // Also activate backdrop if it exists
            const backdrop = document.querySelector("[modal-backdrop]");
            if (backdrop) {
              backdrop.dataset.active = "true";
            }

            // Prevent body scroll
            document.body.style.overflow = "hidden";
          }, 100);
        }
      }
    } catch (e) {
      console.error("Error checking login requirement:", e);
    }
  }
}
