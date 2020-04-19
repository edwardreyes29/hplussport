// Validate input
(function() {
  "use strict";

  document.addEventListener('DOMContentLoaded' , function() { // when page loaded sufficiently that the DOM is ready
    document
      .getElementById("cart-hplus")
      .addEventListener("submit", estimateTotal)

      var btnEstimate = document.getElementById('btn-estimate'); // Get button reference
      btnEstimate.disabled = true;
  }); 

  function estimateTotal(event) {
    // Prevent the page from reloading
    event.preventDefault();

    var state = document.getElementById('s-state');

    // Check its value if no item was selected
    if (state.value === "") {
      alert("Please choose your shipping state");

      // add keyboard focus to appear on this item.
      state.focus();

      return;
    } 
  }
})();
