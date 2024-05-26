var clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", function(event) {
var dots = document.getElementsByClassName("dot");
for (var i = dots.length - 1; i >= 0; i--) {
  dots[i].parentNode.removeChild(dots[i]);
}

// Stop event propagation
event.stopPropagation();
});

document.addEventListener("click", function(event) {
  var dot = document.createElement("div");
  dot.className = "dot";
  dot.style.left = (event.pageX - 4) + "px";
  dot.style.top = (event.pageY - 4) + "px";
  document.body.appendChild(dot);
});
