/**
 * Handles product review star rating functionality.
 * Manages interactive star rating for WooCommerce product reviews.
 *
 * @function
 * @name ProductReviews
 * @returns {void}
 */
export function ProductReviews() {
  document.addEventListener("DOMContentLoaded", function () {
    // Debug: Check if children elements exist
    const childrenLists = document.querySelectorAll(".commentlist .children");
    if (childrenLists.length > 0) {
      console.log("✓ Found " + childrenLists.length + " nested reply lists");
    } else {
      console.log("✗ No nested replies found. Make sure:");
      console.log(
        "1. WordPress threaded comments are enabled (Settings → Discussion)"
      );
      console.log("2. Comments have replies (parent-child relationship)");
    }

    // Star rating functionality
    const starRating = document.querySelector(".star-rating");
    if (starRating) {
      const stars = starRating.querySelectorAll(".star");
      const ratingSelect = document.getElementById("rating");

      stars.forEach((star) => {
        star.addEventListener("click", function () {
          const value = parseInt(this.getAttribute("data-value"));
          ratingSelect.value = value;
          updateStars(value);
        });

        star.addEventListener("mouseenter", function () {
          const value = parseInt(this.getAttribute("data-value"));
          highlightStars(value);
        });
      });

      starRating.addEventListener("mouseleave", function () {
        const currentValue = parseInt(ratingSelect.value) || 0;
        updateStars(currentValue);
      });

      function updateStars(value) {
        stars.forEach((star, index) => {
          if (index < value) {
            star.classList.remove("text-gray-300");
            star.classList.add("text-cynOrange");
          } else {
            star.classList.remove("text-cynOrange");
            star.classList.add("text-gray-300");
          }
        });
      }

      function highlightStars(value) {
        stars.forEach((star, index) => {
          if (index < value) {
            star.classList.remove("text-gray-300");
            star.classList.add("text-cynOrange");
          } else {
            star.classList.remove("text-cynOrange");
            star.classList.add("text-gray-300");
          }
        });
      }
    }
  });
}
