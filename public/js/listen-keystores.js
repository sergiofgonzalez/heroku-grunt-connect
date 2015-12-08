/* listen-keystores */

(function() {
"use strict";

var container = document.querySelector(".container");
var debugDiv = document.createElement("div");

container.appendChild(debugDiv);

var nameTextfield = document.querySelector("#name");

nameTextfield.addEventListener("input", function() {
  debugDiv.textContent = nameTextfield.value;
});
})();
