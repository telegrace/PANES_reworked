const SLIDER = document.getElementById("slider");
const TOP_LAYER = document.getElementsByClassName("top")[0];
const CONTAINER = document.getElementsByClassName("container")[0];
let containerLeft = CONTAINER.offsetLeft;
let sliderWidth = SLIDER.clientWidth;

const moveSlider = function (event) {
  let mouseXpos = event.clientX;

  SLIDER.style.left = mouseXpos - containerLeft - sliderWidth / 2 + "px";
  TOP_LAYER.style.width = mouseXpos - containerLeft - sliderWidth / 2 + "px";
};

let drag = false;

CONTAINER.addEventListener("mousedown", moveSlider);

// SLIDER.addEventListener("mousedown", (event) => {
//   event.preventDefault();
// });
