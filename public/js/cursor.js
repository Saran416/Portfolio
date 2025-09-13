document.addEventListener("DOMContentLoaded", () => {
  const circle = document.querySelector(".circle");
  let mouseX = 0, mouseY = 0;
  let currentX = 0, currentY = 0;

  // Track mouse position
  document.addEventListener("mousemove", e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Smooth follow loop
  function animate() {
    // Linear interpolation for smoothness
    currentX += (mouseX - currentX) * 0.2;
    currentY += (mouseY - currentY) * 0.2;

    circle.style.transform = `translate(${currentX}px, ${currentY}px)`;

    requestAnimationFrame(animate);
  }
  animate();

  // Left-click bubble pop
  document.addEventListener("click", () => {
    circle.classList.remove("pop");
    void circle.offsetWidth; // restart animation
    circle.classList.add("pop");
  });

  // Reset after animation
  circle.addEventListener("animationend", () => {
    circle.classList.remove("pop");
    circle.style.transform += " scale(1)"; // preserve translate + reset scale
    circle.style.opacity = "1";
  });
});
