document.addEventListener("DOMContentLoaded", () => {
  // Only run on desktop-like devices
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

  const circle = document.querySelector(".circle");
  if (!circle) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let currentX = mouseX;
  let currentY = mouseY;

  // update mouse pos
  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // smooth follow loop
  function animate() {
    currentX += (mouseX - currentX) * 0.2;
    currentY += (mouseY - currentY) * 0.2;

    circle.style.left = `${currentX}px`;
    circle.style.top = `${currentY}px`;

    requestAnimationFrame(animate);
  }
  animate();
});
