// const opcionColor = document.getElementById("selectorColor");
// const parrafo = document.getElementById("colorTexto");

// let claseAnterior = "";

// opcionColor.addEventListener("change", function (e) {
//   const nuevoColor = e.target.value;
//   const nuevaClase = `text-${nuevoColor}-700`;

//   if (claseAnterior) {
//     parrafo.classList.replace(claseAnterior, nuevaClase);
//   } else {
//     parrafo.classList.add(nuevaClase);
//   }

//   claseAnterior = nuevaClase;
//   parrafo.textContent = `Este texto ahora es ${nuevoColor}`;
// });

//EJERCICIO TARDE
const btnAbrirModal = document.getElementById("agregarEstudiante");
const modal = document.getElementById("formularioEstudiante");
const formulario = document.getElementById("formularioEstudianteContent");
const tabla = document.querySelector("tbody");

const inputNombre = document.getElementById("nombre");
const inputEdad = document.getElementById("edad");
const inputPais = document.getElementById("pais");

const cerrarModal = document.getElementById("cerrarModal");

btnAbrirModal.addEventListener("click", () => {
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  inputNombre.focus();
});

cerrarModal.addEventListener("click", () => {
  modal.classList.add("hidden");
  modal.classList.remove("flex");
});

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = inputNombre.value.trim();
  const edad = inputEdad.value.trim();
  const pais = inputPais.value.trim();

  if (!nombre || !edad || !pais) {
    alert("Por favor, completá todos los campos");
    return;
  }

  const nuevaFila = document.createElement("tr");
  nuevaFila.className = "border-b border-gray-200 odd:bg-white even:bg-gray-50";
  nuevaFila.innerHTML = `
    <td scope="row" class="px-6 py-4 font-medium whitespace-nowrap text-gray-900">${nombre}</td>
    <td class="px-6 py-4">${edad}</td>
    <td class="px-6 py-4">${pais}</td>
    <td class="px-6 py-4">
      <a href="#" class="font-medium text-blue-600 hover:underline">Edit</a>
    </td>
  `;

  tabla.appendChild(nuevaFila);

  modal.classList.add("hidden");
  modal.classList.remove("flex");
  formulario.reset();
});
