const slider = document.getElementById("slider");
const slides = slider.children;
const dots = document.querySelectorAll("#dots button");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
let index = 0;
let interval;

const updateSlider = () => {
  const slideWidth = slider.clientWidth;
  slider.style.transform = `translateX(-${index * slideWidth}px)`;
  updateDots();
};

const updateDots = () => {
  dots.forEach((dot, i) => {
    dot.classList.toggle("opacity-100", i === index);
    dot.classList.toggle("opacity-50", i !== index);
  });
};

const goToSlide = (i) => {
  index = i;
  updateSlider();
  resetInterval();
};

const nextSlide = () => {
  index = (index + 1) % slides.length;
  updateSlider();
};

const prevSlide = () => {
  index = (index - 1 + slides.length) % slides.length;
  updateSlider();
};

const resetInterval = () => {
  clearInterval(interval);
  interval = setInterval(nextSlide, 5000);
};

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    goToSlide(parseInt(dot.dataset.index));
  });
});

window.addEventListener("resize", updateSlider);

updateSlider();
interval = setInterval(nextSlide, 8000);

// ============================ DARKMODE ============================

document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  const sunIconPathD =
    "M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z";
  const moonIconPathD =
    "M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z";

  themeToggle.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-white">
      <path stroke-linecap="round" stroke-linejoin="round" d="${sunIconPathD}"/>
    </svg>
  `;
  const iconPath = themeToggle.querySelector("path");

  const currentTheme = localStorage.getItem("theme");
  if (currentTheme) {
    body.classList.add(currentTheme);
    updateToggleButton(currentTheme);
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    body.classList.add("dark");
    updateToggleButton("dark");
  } else {
    body.classList.add("light");
    updateToggleButton("light");
  }

  themeToggle.addEventListener("click", () => {
    if (body.classList.contains("light")) {
      body.classList.remove("light");
      body.classList.add("dark");
      localStorage.setItem("theme", "dark");
      updateToggleButton("dark");
    } else {
      body.classList.remove("dark");
      body.classList.add("light");
      localStorage.setItem("theme", "light");
      updateToggleButton("light");
    }
  });

  function updateToggleButton(theme) {
    if (theme === "dark") {
      iconPath.setAttribute("d", moonIconPathD);
    } else {
      iconPath.setAttribute("d", sunIconPathD);
    }
  }
});
