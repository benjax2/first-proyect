// let permisoMama = false;
// let permisoPapa = true;
// let edad = 28;

// if (edad >= 18 && (permisoMama || permisoPapa)) {
//   console.log("Puedo salir a bailar");
// } else {
//   console.log("Me quedo en casa");
// }

// let numeroMes = prompt("¿Cuál es tu nombre?");

// if (numeroMes === 1) {
//   console.log("El mes es enero.");
// } else if (numeroMes === 2) {
//   console.log("El mes es febrero.");
// } else if (numeroMes === 3) {
//   console.log("El mes es marzo.");
// } else if (numeroMes === 4) {
//   console.log("El mes es abril.");
// } else if (numeroMes === 5) {
//   console.log("El mes es mayo.");
// } else if (numeroMes === 6) {
//   console.log("El mes es junio.");
// } else if (numeroMes === 7) {
//   console.log("El mes es julio.");
// } else if (numeroMes === 8) {
//   console.log("El mes es agosto.");
// } else if (numeroMes === 9) {
//   console.log("El mes es septiembre.");
// } else if (numeroMes === 10) {
//   console.log("El mes es octubre.");
// } else if (numeroMes === 11) {
//   console.log("El mes es noviembre.");
// } else if (numeroMes === 12) {
//   console.log("El mes es diciembre.");
// } else {
//   console.log("Digite un valor válido.");
// }

/* El usuario deberá ingresar su fecha de nacimiento día/mes/año y deberá decirle cuántos días
de vida tiene hasta la fecha de hoy. */

let input = prompt(
  "Ingresa tu fecha de nacimiento en formato día/mes/año (por ejemplo, 01/07/2025)",
);
let formatoValido = /^\d{1,2}\/\d{1,2}\/\d{1,4}$/.test(input);

switch (formatoValido) {
  case true:
    let [dia, mes, año] = input.split("/").map(Number);
    if (mes < 1 || mes > 12) {
      console.log("Error: el mes debe estar entre 1 y 12.");
      break;
    }
    if (dia < 1 || dia > 31) {
      console.log("Error: el día debe estar entre 1 y 31.");
      break;
    }

    let fechaNacimiento = new Date(año, mes - 1, dia);

    if (
      fechaNacimiento.getFullYear() !== año ||
      fechaNacimiento.getMonth() !== mes - 1 ||
      fechaNacimiento.getDate() !== dia
    ) {
      console.log("Error: la fecha ingresada no existe en el calendario.");
      break;
    }

    let hoy = new Date();
    let diferenciaMs = hoy - fechaNacimiento;
    let diasVividos = Math.floor(diferenciaMs / (1000 * 60 * 60 * 24));

    console.log(`Has vivido ${diasVividos} días.`);
    break;

  default:
    console.log("Error: debes ingresar una fecha válida en el formato día/mes/año.");
    break;
}
