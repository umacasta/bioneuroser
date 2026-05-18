const cards = document.querySelectorAll(
  ".pain-card, .learn-card, .faq-item, .price-box"
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }

  });
}, {
  threshold: 0.15
});

cards.forEach((card) => {
  observer.observe(card);
});


// EFECTO BOTONES

const buttons = document.querySelectorAll(".cta-button");

buttons.forEach((button) => {

  button.addEventListener("mouseenter", () => {
    button.style.transform = "scale(1.03)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "scale(1)";
  });

});


// PREPARADO PARA PIXEL / HOTMART

buttons.forEach((button) => {

  button.addEventListener("click", () => {

    console.log("CTA CLICK");

    // ACÁ DESPUÉS VA:
    // fbq('track', 'InitiateCheckout');

  });

});
