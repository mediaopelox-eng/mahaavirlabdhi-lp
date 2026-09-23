function animateCounter(counter) {
  const target = parseFloat(counter.getAttribute("data-count"));
  const isDecimal = target % 1 !== 0;
  const duration = 1800;
  const startTime = performance.now();

  function easeOutQuart(t) {
    return 1 - Math.pow(1 - t, 4);
  }

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const value = easeOutQuart(progress) * target;

    counter.textContent = isDecimal ? value.toFixed(1) : Math.floor(value);

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      counter.textContent = isDecimal ? target.toFixed(1) : target;
    }
  }

  requestAnimationFrame(update);
}

document.addEventListener("DOMContentLoaded", function () {
  const section = document.querySelector("#sectionAbout");
  const counters = document.querySelectorAll(".count");
  let hasAnimated = false;

  if (!section) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;
          counters.forEach((counter) => {
            counter.textContent = "0";
            animateCounter(counter);
          });
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(section);
});
