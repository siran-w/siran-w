// Add animation on scroll
const elements = document.querySelectorAll(".fade-in, .slide-in, .zoom-in");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "none";
    }
  });
}, {
  threshold: 0.2,
});

elements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(50px)";
  observer.observe(el);
});
