// let participante = [
//   {
//     nombre: "Javier",
//     edad: 28,
//     profesion: "Ingeniero",
//     ganador: false,
//   },
//   {
//     nombre: "Eduardo",
//     edad: 35,
//     profesion: "Abogado",
//     ganador: false,
//   },
//   {
//     nombre: "Cristina",
//     edad: 37,
//     profesion: "Ama de casa",
//     ganador: true,
//   },
//   {
//     nombre: "Maria",
//     edad: 22,
//     profesion: "Maestra",
//     ganador: true,
//   },
// ];

// participante.forEach((persona) => {
//   let mensaje = persona.ganador
//     ? `Felicidades ${persona.nombre}, has ganado US$1.000.000 :D`
//     : `Lamentablemente has perdido, ${persona.nombre} :C`;

//   console.log(mensaje);
// });

/* Crear una función para renderizar una lista de estudiantes.
  Esta función deberá recibir un estudiante a la vez y mostrarlo.
  Si al estudiante le falta un dato ej: no colocó de qué país proviene, colocar un "none" */

let estudiantesFunval = [
  { nombre: "Yamila", pais: "Argentina" },
  { nombre: "Gabriel" },
  { nombre: "Benjamin", pais: "Uruguay", edad: 32, mision: true },
  { nombre: "Jeff", pais: "Peru" },
];

let data = document.getElementById("datos");

function renderEstudiante(estudiante) {
  let nombre = "nombre" in estudiante ? estudiante.nombre : "none";
  let pais = "pais" in estudiante ? estudiante.pais : "none";
  let edad = "edad" in estudiante ? estudiante.edad : "none";
  let mision = "mision" in estudiante ? (estudiante.mision ? "Sí" : "No") : "none";

  let fila = document.createElement("tr");
  fila.innerHTML = `
    <td class="px-6 py-4">${nombre}</td>
    <td class="px-6 py-4">${pais}</td>
    <td class="px-6 py-4">${edad}</td>
    <td class="px-6 py-4">${mision}</td>
  `;

  data.appendChild(fila);
}

estudiantesFunval.forEach(renderEstudiante);
