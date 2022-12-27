const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let activeStep = 1;

next.addEventListener("click", () => {
  activeStep++;
  if (activeStep > circles.length) {
    activeStep = circles.length;
  }
  updateUI();
  console.log(activeStep);
});

prev.addEventListener("click", () => {
  activeStep--;
  if (activeStep < 1) {
    activeStep = 1;
  }
  updateUI();
  console.log(activeStep);
});

function updateUI() {
  circles.forEach((circle, idx) => {
    if (idx < activeStep) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  progress.style.width = ((activeStep - 1) / (circles.length - 1)) * 100 + "%";

  if (activeStep === 1) {
    prev.disabled = true;
  } else if (activeStep === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
