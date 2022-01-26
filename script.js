console.log("find the x and y of the slider");

const topLayer = document.getElementsByClassName("top")[0];
const slider = document.getElementById("slider");
const topLayerWidth = topLayer.clientWidth;
const sliderWidth = slider.clientWidth;
let drag = false;

let posLeft = slider.offsetLeft;
let posTop = slider.offsetTop;

// topLayer.style.width = 600 + "px";

console.log(posLeft);
console.log(posTop);

slider.style.left = 400 + "px";
slider.addEventListener("mousedown", (event) => {
  event.preventDefault();
  drag = true;
  if (drag) {
    console.log("drag ", drag);
    console.log(event.clientX);
  }
});
