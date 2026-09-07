const progressBars = document.querySelectorAll(".progress-bar");

const revealProgress = (bar) => {
  const value = bar.dataset.progress || "0";
  bar.style.width = `${value}%`;
};

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, instance) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        revealProgress(entry.target);
        instance.unobserve(entry.target);
      });
    },
    { threshold: 0.35 }
  );

  progressBars.forEach((bar) => observer.observe(bar));
} else {
  progressBars.forEach(revealProgress);
}
