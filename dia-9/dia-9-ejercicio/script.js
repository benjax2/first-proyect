const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const html = document.documentElement;
if (prefersDark) html.classList.add("dark");

const btn = document.getElementById("toggleDarkMode");
btn.addEventListener("click", () => {
  html.classList.toggle("dark");
  btn.textContent = html.classList.contains("dark") ? "🌞" : "🌙";
});

btn.textContent = html.classList.contains("dark") ? "🌞" : "🌙";
