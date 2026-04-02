
document.addEventListener("DOMContentLoaded", () => {
  /* === Typing animation === */
  new Typed("#typing", {
    strings: [
      "AI & ML Engineer",
      "Machine Learning Developer",
      "Deep Learning Enthusiast",
      "Python Developer"
    ],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true
  });

  /* === Particles === */
  tsParticles.load("particles-js", {
    particles: {
      number: { value: 80 },
      color: { value: "#38bdf8" },
      links: { enable: true, color: "#38bdf8" },
      move: { enable: true, speed: 2 }
    }
  });

  /* === Project Filter === */
  window.filterProjects = function(type) {
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    if (type === "all" || card.classList.contains(type))
      card.style.display = "flex";
    else
      card.style.display = "none";
  });
};
  /* === Scroll Reveal === */
  ScrollReveal().reveal(".card", { delay: 200, distance: "40px", origin: "bottom" });
  ScrollReveal().reveal(".skill-card", { delay: 200, origin: "left" });

});
