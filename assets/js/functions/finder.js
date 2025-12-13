/**
 * Finder Form Handler
 * Handles the product finder form submission and error display
 */

export function Finder() {
  const finderForm = document.getElementById('finder-form');
  const errorContainer = document.getElementById('finder-error');

  if (!finderForm) return;

  finderForm.addEventListener('submit', function(e) {
    const destination = document.getElementById('destination');
    const passengers = document.getElementById('passengers');

    // Hide error message on new submission
    if (errorContainer) {
      errorContainer.classList.add('hidden');
      errorContainer.textContent = '';
    }

    // Basic validation
    if (!destination || !destination.value || destination.value === '') {
      e.preventDefault();
      showError('لطفا یک مقصد انتخاب کنید');
      return false;
    }

    if (!passengers || !passengers.value || parseInt(passengers.value) <= 0) {
      e.preventDefault();
      showError('لطفا تعداد همسفر را وارد کنید');
      return false;
    }
  });

  function showError(message) {
    if (errorContainer) {
      errorContainer.textContent = message;
      errorContainer.classList.remove('hidden');
      
      // Scroll to error message
      errorContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  // Check if there's an error message from server (set by PHP)
  // This will be handled by the PHP handler that adds inline script
}

