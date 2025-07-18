// let estudiantes = [
//   {
//     nombre: "Kevin",
//     pais: "Bolivia",
//   },
//   {
//     nombre: "Pablo",
//     pais: "Argentina",
//   },
//   {
//     nombre: "Geraldine",
//     pais: "Peru",
//   },
//   {
//     nombre: "Gabriel",
//     pais: "Argentina",
//   },
//   {
//     nombre: "Mario",
//     pais: "Argentina",
//   },
// ];

// let contenedor = document.querySelector("#contenedor-estudiantes");
// let hayArgentino = false;

// for (let i = 0; i < estudiantes.length; i++) {
//   if (estudiantes[i].pais === "Argentina") {
//     hayArgentino = true;
//     contenedor.innerHTML += `
//     <a
//       href="#"
//       class="block max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
//     >
//       <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//         ${estudiantes[i].nombre}
//       </h5>
//       <p class="font-normal text-gray-700 dark:text-gray-400">
//         Pais de origen: ${estudiantes[i].pais}
//       </p>
//     </a>
//   `;
//   }
// }

// if (!hayArgentino) {
//   contenedor.innerHTML = `
//     <a
//       href="#"
//       class="block max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
//     >
//       <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//         Aún no hay estudiantes de Argentina en la lista.
//       </h5>
//     </a>
//   `;
// }

const productos = [
  { id: 1, nombre: "Helado de vainilla", precio: 10, stock: 3 },
  { id: 2, nombre: "Helado de chocolate", precio: 12, stock: 0 },
  { id: 3, nombre: "Helado de fresa", precio: 11, stock: 2 },
  { id: 4, nombre: "Helado de limón", precio: 9, stock: 1 },
];

const tabla = document.getElementById("tabla-productos");

productos.forEach((producto) => {
  const fila = document.createElement("tr");
  fila.className = "border-b border-gray-200 bg-white";

  fila.innerHTML = `
    <td scope="row" class="px-6 py-4 font-semibold text-gray-900">
      ${producto.nombre}
    </td>
    <td class="px-6 py-4">
      ${producto.stock > 0 ? producto.stock : "<span class='text-red-500'>Agotado</span>"}
    </td>
    <td class="px-6 py-4">
      $${producto.precio}
    </td>
    <td class="px-6 py-4">
      <button 
        class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-3 rounded disabled:opacity-50"
        ${producto.stock === 0 ? "disabled" : ""}
      >
        Comprar
      </button>
    </td>
  `;

  tabla.appendChild(fila);
});
