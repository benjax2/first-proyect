const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Cierra el menú si se hace clic en un enlace
document.querySelectorAll("#mobile-menu a").forEach((item) => {
  item.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
  });
});
