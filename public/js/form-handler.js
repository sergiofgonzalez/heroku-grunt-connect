/* form handler */

(function() {
"use strict";

var form = document.querySelector("form");

var container = document.querySelector(".container");


form.addEventListener("submit", function(event) {
  event.preventDefault();
  var alertDiv = document.createElement("div");
  alertDiv.className = "alert alert-info";

  var typedTextLen = form.elements.name.value.length;

  alertDiv.textContent = "The length of the text you typed is " + typedTextLen + " character";
  if (typedTextLen !== 1) {
    alertDiv.textContent += "s";
  }

  container.appendChild(alertDiv);
});
})();
