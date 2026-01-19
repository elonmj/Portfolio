export function initScrollReveal() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, observerOptions);

  const hiddenElements = document.querySelectorAll('.reveal-on-scroll');
  hiddenElements.forEach((el) => observer.observe(el));
}

// Initialize on load and on Astro transitions if present
document.addEventListener('DOMContentLoaded', initScrollReveal);
// If using View Transitions (simulated or actual)
document.addEventListener('astro:page-load', initScrollReveal);
