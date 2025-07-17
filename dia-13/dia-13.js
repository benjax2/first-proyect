/* Tenemos q validar si la palabra o numero q ingrese el cliente es o no una palabra palindrome
    123321  ===    123321
    reconocer
    yohagoyogahoy === yohagoyogahoy
    kevin rodriguez
    kevinrodriguez

    1er paso seria pedirle al usuario q ingrese la palabra o numero
    crear una funcion q reciba una palabra y la devuelva sin espacios
    crear una funcion q reciba una palabra y me la retorne toda en minisculas
    crear una funcion q reciba una palabra y la invierta y compare si son iguales y retorne true o false
    crear una funcion q le muestre al cliente si su palabra es o no palindrome
*/

// function esPalindromo(texto) {
//   const textoLimpio = texto.replace(/\s/g, "").toLowerCase();
//   const textoInvertido = textoLimpio.split("").reverse().join("");
//   return textoLimpio === textoInvertido;
// }

// function verificarPalindromo() {
//   const textoUsuario = prompt(
//     "¡Hola! Ingresa una palabra o frase para verificar si es un palíndromo:",
//   );

//   if (textoUsuario === null || textoUsuario.trim() === "") {
//     console.log("No ingresaste ninguna palabra o frase. ¡Inténtalo de nuevo!");
//     return;
//   }

//   if (esPalindromo(textoUsuario)) {
//     console.log(`La palabra "${textoUsuario}" es un palíndromo. ¡Bien hecho!`);
//   } else {
//     console.log(`La palabra "${textoUsuario}" NO es un palíndromo. ¡Pero sigue intentando!`);
//   }
// }

// verificarPalindromo();

// Ejercicio de encontrar números primos pero con funciones ahora.

function esPrimo(numero) {
  if (numero <= 1) {
    return false;
  }
  if (numero === 2) {
    return true;
  }
  if (numero % 2 === 0) {
    return false;
  }

  for (let i = 3; i * i <= numero; i += 2) {
    if (numero % i === 0) {
      return false;
    }
  }

  return true;
}

function verificarNumeroPrimo() {
  const entradaUsuario = prompt("Ingrese un número entero para verificar si es primo:");

  const numero = parseInt(entradaUsuario);

  if (isNaN(numero) || entradaUsuario === null || entradaUsuario.trim() === "") {
    console.log("Entrada inválida. Por favor, ingrese un número entero válido.");
    return;
  }

  if (esPrimo(numero)) {
    console.log(`El número ${numero} SÍ es primo.`);
  } else {
    console.log(`El número ${numero} NO es primo.`);
  }
}

verificarNumeroPrimo();
