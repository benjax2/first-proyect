// const notaJuan = [8, 9, 7, 10, 12];
// const notaJose = [6, 5];

// function promedio(notas) {
//   const suma = notas.reduce((acum, nota) => acum + nota, 0);
//   return suma / notas.length;
// }

// console.log("Promedio de Juan:", promedio(notaJuan));
// console.log("Promedio de José:", promedio(notaJose));

// //El de la Matriz cuadrada :p

// let matriz = [
//   [28, 50, 12, 73],
//   [9, 28, 45, 21],
//   [74, 77, 2, 24],
//   [98, 18, 35, 63],
// ];

// let suma = 0;

// for (let i = 0; i < matriz.length; i++) {
//   suma += matriz[i][i];
// }

// console.log(`La suma de la diagonal principal es: ${suma}`);

/* OBJETOS */

let listaEstudiantes = [
  {
    nombre: "kevin",
    edad: 28,
    nacionalidad: "Bolivia",
    esMiembro: true,
    numeroCuenta: 12345667897892344n,
    notas: [11, 23, 45, 67],
  },
  {
    nombre: "Pablo",
    edad: 33,
    nacionalidad: "Argentina",
    esMiembro: true,
    numeroCuenta: 12322876454n,
    notas: [99, 80, 100, 10],
  },
  {
    nombre: "Yamila",
    edad: 22,
    nacionalidad: "Argentina",
    esMiembro: true,
    numeroCuenta: 112894789123479812n,
    notas: [77, 99, 51, 80],
  },
  {
    nombre: "Sebastian",
    edad: 25,
    nacionalidad: "Peru",
    esMiembro: true,
    numeroCuenta: 12345667897892344n,
    notas: [0, 10, 0, 100],
  },
  {
    nombre: "jeff",
    edad: 34,
    nacionalidad: "Peru",
    esMiembro: true,
    numeroCuenta: 12345667897892344n,
    notas: [100, 90, 99, 88],
  },
];
/* objetivo mostrar a los estudiantes cuyo promedio sea mayor a 65pts /

for (let index = 0; index < listaEstudiantes.length; index++) {
  let promedioEstudiante = promedio(listaEstudiantes[index].notas);
  if (promedioEstudiante >= 65) {
    console.log(
      listaEstudiantes[index].nombre +
        " este estudiante tiene un promedio de " +
        promedioEstudiante
    );
  }
}

/* mostrar a todos los estudiantes q sean de Argentina */

console.log("Estudiantes de nacionalidad Argentina:");

let hayArgentino = false;

for (let i = 0; i < listaEstudiantes.length; i++) {
  if (listaEstudiantes[i].nacionalidad === "Argentina") {
    console.log(listaEstudiantes[i].nombre);
    hayArgentino = true;
  }
}

if (!hayArgentino) {
  console.log("No hay estudiantes argentinos.");
}
