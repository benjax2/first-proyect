const usersContainer = document.getElementById("users-container");
const errorMessage = document.getElementById("error-message");

async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Respuesta no válida");
    }

    const users = await response.json();

    users.forEach((user) => {
      const card = document.createElement("div");
      card.className = "bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition";

      card.innerHTML = `
        <h3 class="text-lg font-bold mb-1"><span class="text-blue-500">Nombre:</span> ${user.name}</h3>
        <p class="text-sm mb-1"><span class="font-medium">Nombre de Usuario:</span> ${user.username}</p>
        <p class="text-sm mb-1"><span class="font-medium">Email:</span> ${user.email}</p>
        <p class="text-sm"><span class="font-medium">Empresa:</span> ${user.company.name}</p>
      `;

      usersContainer.appendChild(card);
    });
  } catch (error) {
    errorMessage.textContent = "Error al cargar los usuarios. Inténtalo de nuevo más tarde.";
    errorMessage.classList.remove("hidden");
  }
}

// Llamamos a la función
fetchUsers();
