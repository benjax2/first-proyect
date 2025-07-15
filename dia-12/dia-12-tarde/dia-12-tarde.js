/* Generar la serie de números primos. Esta serie se caracteriza porque un número primo es aquel
que solo es divisible entre 1 y el mismo de la cantidad de N que ingrese el usuario.

N = 6
2, 3, 5, 7, 11, 13
N = 2
2, 3
N = 5
2, 3, 5, 7, 11
*/

let nInput = prompt("Ingresa la cantidad de números primos que deseas generar (N):");
let n = parseInt(nInput);

if (isNaN(n) || n <= 0) {
  console.log("Por favor, ingresa un número positivo válido para N.");
} else {
  const primeNumbers = [];
  let num = 2;

  while (primeNumbers.length < n) {
    let isPrime = true;

    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      primeNumbers.push(num);
    }
    num++;
  }

  console.log(`Los primeros ${n} números primos son: ${primeNumbers.join(", ")}`);
}
