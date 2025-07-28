import { habilidadesData, habilidadesAdicionalesData } from "./habilidades.js";
import { proyectosData } from "./proyectos.js";

// =============== TOGGLE BUTTON ===============
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

if (mobileMenuButton && mobileMenu) {
  mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  document.querySelectorAll("#mobile-menu nav").forEach((item) => {
    item.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });
}

// =============== SKILLS ===============
function cargarHabilidades() {
  const mainSkillsContainer = document.getElementById("main-skills-container");
  const additionalSkillsContainer = document.getElementById("additional-skills-container");

  if (mainSkillsContainer) {
    habilidadesData.forEach((habilidad) => {
      const skillDiv = document.createElement("div");
      skillDiv.classList.add(
        "flex",
        "flex-col",
        "items-center",
        "rounded-lg",
        "bg-[#0D1117]",
        "p-4",
        "shadow-md",
        "transition-transform",
        "duration-300",
        "hover:scale-105",
      );

      skillDiv.innerHTML = `
        <img
          src="${habilidad.icono}"
          alt="${habilidad.nombre}"
          class="mx-auto mb-2 h-16 w-16"
        />
        <p class="text-lg font-medium">${habilidad.nombre}</p>
      `;
      mainSkillsContainer.appendChild(skillDiv);
    });
  }

  if (additionalSkillsContainer) {
    habilidadesAdicionalesData.forEach((habilidad) => {
      const skillLi = document.createElement("li");
      skillLi.classList.add(
        "flex",
        "w-full",
        "max-w-[180px]",
        "flex-col",
        "items-center",
        "rounded-lg",
        "bg-[#1E293B]",
        "p-4",
        "shadow-lg",
        "transition-transform",
        "duration-300",
        "hover:scale-105",
        "hover:shadow-xl",
      );

      skillLi.innerHTML = `
        <img
          src="${habilidad.icono}"
          class="mb-3 h-20 w-20 md:h-24 md:w-24"
          alt="Icono de ${habilidad.nombre}"
        />
        <p class="text-xl font-medium text-gray-200">${habilidad.nombre}</p>
        <p class="mt-1 text-sm text-gray-400">${habilidad.descripcion}</p>
      `;
      additionalSkillsContainer.appendChild(skillLi);
    });
  }
}

// =============== PROJECTS ===============
function cargarProyectos(limit = null) {
  const projectsContainer = document.getElementById("projects-container");

  if (projectsContainer) {
    const projectsToDisplay = limit ? proyectosData.slice(0, limit) : proyectosData;

    projectsToDisplay.forEach((proyecto) => {
      const projectDiv = document.createElement("div");
      projectDiv.classList.add(
        "flex",
        "transform",
        "flex-col",
        "overflow-hidden",
        "rounded-lg",
        "bg-[#0D1117]",
        "p-6",
        "shadow-xl",
        "transition-transform",
        "duration-300",
        "hover:scale-105",
      );

      projectDiv.innerHTML = `
        <img
          src="${proyecto.imagen}"
          alt="${proyecto.titulo}"
          class="mb-4 h-48 w-full rounded-md border border-[#1E293B] object-cover"
        />
        <h3 class="mb-3 text-2xl font-semibold text-[#E3FF6A]">${proyecto.titulo}</h3>
        <p class="mb-4 flex-grow text-base text-[#8892B0]">
          ${proyecto.descripcion}
        </p>
        <div class="mt-auto flex justify-center space-x-6">
          <a
            href="${proyecto.linkGitHub}"
            target="_blank"
            class="font-semibold text-[#E3FF6A] hover:underline"
            >View Code (GitHub)</a
          >
          <a
            href="${proyecto.linkDemo}"
            target="_blank"
            class="font-semibold text-[#E3FF6A] hover:underline"
            >View Demo (Live)</a
          >
        </div>
      `;
      projectsContainer.appendChild(projectDiv);
    });
  }
}

// =============== DOMContentLoaded ===============
document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("main-skills-container")) {
    cargarHabilidades();
  }

  const projectsContainer = document.getElementById("projects-container");
  if (projectsContainer) {
    if (window.location.pathname.endsWith("index.html") || window.location.pathname === "/") {
      cargarProyectos(3);
    } else if (window.location.pathname.endsWith("proyectos.html")) {
      cargarProyectos();
    }
  }
});

// =============== FORM ===============

const contactForm = document.getElementById("contact-form");
const formMessageDiv = document.getElementById("form-message");

if (contactForm && formMessageDiv) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const phone = document.getElementById("phone").value.trim();

    if (name === "" || email === "" || message === "" || phone === "") {
      formMessageDiv.textContent =
        "Por favor, completa todos los campos requeridos (nombre, email, mensaje y teléfono).";
      formMessageDiv.style.color = "#FF6347";
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      formMessageDiv.textContent = "Por favor, ingresa un email válido.";
      formMessageDiv.style.color = "#FF6347";
      return;
    }

    formMessageDiv.textContent = "Enviando mensaje...";
    formMessageDiv.style.color = "#E3FF6A";

    setTimeout(() => {
      formMessageDiv.textContent = "¡Mensaje enviado con éxito! Te contactaré pronto.";
      formMessageDiv.style.color = "#A4FF7A";
      contactForm.reset();
    }, 2000);
  });
}
