// Animación suave para botones principales
const buttons = document.querySelectorAll(".main-btn");

buttons.forEach((button) => {
  button.addEventListener("mouseenter", () => {
    button.style.transform = "scale(1.03)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "scale(1)";
  });
});
