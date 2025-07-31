// /* ============ SINCRONÍA ============ */

// console.log("Inicio | Fila para el banco");

// console.log("Pepito es atendido");

// console.log("Juanita va después");

// console.log("Tenés 80 adelante y te toca el número 125");

// console.log("Después de 1 hora sos atendido");

// console.log("Fin! Te vas feliz a casa :D");

// /* ============ ASINCRONÍA ============ */

// console.log("Inicio");

// console.log("Hervir el agua :D");

// setTimeout(() => {
//   console.log("Pelar las papas y ponerlas en el agua!");
// }, 2000);

// console.log("Agua hervida!");

/* ---------------Ejercicio-------------- */
let estudiantes = [
  {
    nombre: "Yamila",
    edad: 21,
    notas: [34, 77, 45, 78],
  },
  {
    nombre: "Gabriel",
    edad: 24,
    notas: [90, 44, 55, 9],
  },
  {
    nombre: "Jefferson",
    edad: 18,
    notas: [100, 10, 0, 100],
  },
  {
    nombre: "Pablo",
    edad: 33,
    notas: [31, 22, 45, 78],
  },
];
//CREANDO UNA PROMESA
const listaEstudiantes = new Promise((resolve, reject) => {
  setTimeout(() => {
    let cumplido = true;
    if (cumplido) {
      resolve(estudiantes);
    } else {
      reject("el servidor esta caido");
    }
  }, 5000);
});
/* 
    deberan consumir esta promesa para obtener el listado de los estudiantes una vez tengan el listado de estudiantes
    deberan mostrar con innerHTML o createElement EN SU WEB la lista de todos los estudiantes aprobados se considera 
    aprobado cuando el promedio del estudiante es de 51pts pueden mostrarlo usando cards listas tablas etc 
*/
const container = document.getElementById("container");

const listaAprobados = async () => {
  try {
    const lista = await listaEstudiantes;

    const aprobados = lista.filter((est) => {
      const suma = est.notas.reduce((a, b) => a + b, 0);
      const promedio = suma / est.notas.length;
      return promedio >= 51;
    });

    if (aprobados.length === 0) {
      container.innerHTML = `<p>Ningún estudiante aprobó.</p>`;
      return;
    }

    container.innerHTML = "";

    aprobados.forEach((est) => {
      const suma = est.notas.reduce((a, b) => a + b, 0);
      const promedio = (suma / est.notas.length).toFixed(2);

      const card = document.createElement("div");
      card.innerHTML = `
        <div style="border: 1px solid #ccc; padding: 10px; margin-bottom: 10px; border-radius: 5px;">
          <h3>${est.nombre} (${est.edad} años)</h3>
          <p>Notas: ${est.notas.join(", ")}</p>
          <p><strong>Promedio:</strong> ${promedio}</p>
        </div>
      `;
      container.appendChild(card);
    });
  } catch (error) {
    container.innerHTML = `<p>Error: ${error}</p>`;
  }
};

listaAprobados();
