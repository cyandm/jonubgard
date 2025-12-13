/**
 * Booking form functionality for tour reservation
 * Simple JavaScript for quantity updates and price calculation
 */

export function BookingForm() {
  // Get adult price from data attribute or calculate from product
  const bookingDataEl = document.getElementById("booking-data");
  if (!bookingDataEl) return;

  const bookingData = JSON.parse(bookingDataEl.textContent);
  const adultPrice = bookingData.adultPrice || 0;

  // Update quantity function
  window.updateQuantity = function (type, change) {
    const input = document.getElementById(
      type === "adult" ? "adult-quantity" : "child-quantity"
    );
    if (!input) return;

    const currentValue = parseInt(input.value) || 0;
    const newValue = Math.max(0, Math.min(20, currentValue + change));
    input.value = newValue;
    updatePrice();
  };

  // Update price function
  window.updatePrice = function () {
    const adultInput = document.getElementById("adult-quantity");
    const totalCostEl = document.getElementById("total-cost");

    if (!adultInput || !totalCostEl) return;

    const adultCount = parseInt(adultInput.value) || 1;
    const total = adultCount * adultPrice;

    // Format number with Persian digits and thousand separators
    let formattedTotal;
    try {
      formattedTotal = total.toLocaleString("fa-IR");
    } catch (e) {
      // Fallback if toLocaleString doesn't support fa-IR
      formattedTotal = total.toLocaleString("en-US");
    }

    totalCostEl.textContent = formattedTotal + " تومان";
  };

  // Initialize price on load
  if (document.getElementById("adult-quantity")) {
    updatePrice();
  }
}
