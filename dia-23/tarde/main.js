// let contenedor = document.querySelector("#contenedor-usuarios");
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((respuesta) => respuesta.json())
//   .then((data) => {
//     data.forEach((usuario) => {
//       contenedor.innerHTML += `
//         <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
//                 <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                   ${usuario.name}
//                 </th>
//                 <td class="px-6 py-4">
//                   ${usuario.username}
//                 </td>
//                 <td class="px-6 py-4">
//                   ${usuario.email}
//                 </td>
//                 <td class="px-6 py-4">
//                   ${usuario.address.city}
//                 </td>
//                 <td class="px-6 py-4">
//                   ${usuario.company.name}
//                 </td>
//             </tr>
//       `;
//     });
//   });

const dogImg = document.getElementById("dogImg");

const cargarPerros = async () => {
  try {
    const respuesta = await fetch("https://dog.ceo/api/breeds/image/random/8");
    const data = await respuesta.json();

    data.message.forEach((url) => {
      dogImg.innerHTML += `
        <div class="p-2">
          <img src="${url}" alt="Dog" class="w-full h-auto rounded shadow-md" />
        </div>
      `;
    });
  } catch (error) {
    dogImg.innerHTML = `<p class="text-red-500">Error al cargar imágenes de perritos 🐶</p>`;
    console.error("Error:", error);
  }
};

cargarPerros();
