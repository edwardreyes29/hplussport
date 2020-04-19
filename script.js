// Validate input
(function() {
  "use strict";

  document.addEventListener('DOMContentLoaded' , function() { // when page loaded sufficiently that the DOM is ready

    var state = document.getElementById('s-state');

    document
      .getElementById("cart-hplus")
      .addEventListener("submit", estimateTotal)

      var btnEstimate = document.getElementById('btn-estimate'); // Get button reference

      btnEstimate.disabled = true;

      // Check when value of state changes
      state.addEventListener('change', function() {
        if (state.value === "") {
          btnEstimate.disabled = true;
        } else { // if state value changes
          btnEstimate.disabled = false;
        }
      });

      function estimateTotal(event) {
        // Prevent the page from reloading
        event.preventDefault();
    
        // Check its value if no item was selected
        if (state.value === "") {
          alert("Please choose your shipping state");
    
          // add keyboard focus to appear on this item.
          state.focus();
    
          return;
        } 
      }

  }); 

  
})();
