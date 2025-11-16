const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");

function animate(box) {
  return new Promise(resolve => {
    box.classList.add("animate");
    box.addEventListener("animationend", resolve, { once: true });
  });
}

async function startSequence() {
  // Reset animations
  [box1, box2, box3].forEach(b => {
    b.classList.remove("animate");
    void b.offsetWidth;
  });

  await animate(box1); // Fade
  await animate(box2); // Slide
  await animate(box3); // Scale
}
