var css = document.querySelector("h3");
var leftcolor = document.querySelector(".color1");
var rightcolor = document.querySelector(".color2");
var body = document.getElementById("gradient");

function randomGradient () {
	leftcolor.value = getRandomColor();
    rightcolor.value = getRandomColor();
    setGradient();
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function addRandomButton() {
    var btn = document.createElement("BUTTON");
    var t = document.createTextNode("Generate Random Background");
    btn.appendChild(t);
    document.body.appendChild(btn);
    btn.onclick = randomGradient;
}

function setGradient () {
	body.style.background =
	"linear-gradient(to right, "
	+ leftcolor.value
	+ ", "
	+ rightcolor.value
	+ ")";

	css.textContent = "linear-gradient(to right, "
	+ leftcolor.value
	+ ", "
	+ rightcolor.value
	+ ");";
}

window.addEventListener("load", randomGradient);
leftcolor.addEventListener("input", setGradient);
rightcolor.addEventListener("input", setGradient);
addRandomButton();
