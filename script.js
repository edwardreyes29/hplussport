// Validate input
(function() {
  "use strict";

  document
    .getElementById("cart-hplus")
    .addEventListener("submit", estimateTotal);

  function estimateTotal(event) {
    event.preventDefault();

    var state = document.getElementById('s-state');

    // Check its value if its empty
    if (state.value === "") {
      alert("Please choose your shipping state");

      state.focus();

      return;
    } 
  }
})();
