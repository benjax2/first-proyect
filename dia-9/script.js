if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
  document.documentElement.classList.add("dark");
}

document.getElementById("btnTema").addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});
