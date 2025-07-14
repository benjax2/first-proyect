/* conceptos básicos */
// 1. Escribe un comentario en una línea

// 2. Escribe un comentario en varias líneas

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

// 4. Imprime por consola el valor de todas las variables

// 5. Imprime por consola el tipo de todas las variables

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

// 9. A continuación, modifica los valores de las constantes

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse

// 1.
// Este es un comentario en una línea

// 2.
/* Este es un comentario
en varias líneas */

// 3.
let number = 42;
let text = "Hello, World!";
let boolean = true;
let bigNumber = 12345678901234567890n;
let symbol = Symbol("id");
let nothing = null;
let notDefined;

//4.
console.log(number);
console.log(text);
console.log(boolean);
console.log(nothing);
console.log(notDefined);
console.log(bigNumber);
console.log(symbol);

//5.
console.log(typeof number);
console.log(typeof text);
console.log(typeof boolean);
console.log(typeof nothing);
console.log(typeof notDefined);
console.log(typeof bigNumber);
console.log(typeof symbol);

//6.
number = 50;
text = "Benjax";
boolean = false;
bigNumber = 9876543210987654321n;
symbol = Symbol("dni");

//7.
number = "number";
text = 25042003;
boolean = 9876543210987654321n;
bigNumber = false;
symbol = null;

//8.
const texto = "Hola";
const edad = 25;
const esEstudiante = true;
const vacio = null;
const numeroGrande = 1234567890123456789012345678901234567890n;
const simbolo = Symbol("clave");

//9 y 10
// texto = "Holaa";
// edad = 255;
// esEstudiante = false;
// vacio = undefined;
// numeroGrande = 3428978127481238172847192n;
// simbolo = Symbol("xd");

/*OPERADORES LOGICOS  */

// 1. Crea una variable para cada operación aritmética

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

// 5. Utiliza el operador lógico and

// 6. Utiliza el operador lógico or

// 7. Combina ambos operadores lógicos

// 8. Añade alguna negación

// 9. Utiliza el operador ternario

// 10. Combina operadores aritméticos, de comparáción y lógicas

let a = 2;
let b = 4;
let c = 6;

//1.

let suma = a + b;
let resta = a - b;
let multiplicacion = a * b;
let division = b / a;

//2.
suma--;
resta++;
multiplicacion *= 5;
division /= 2;

//3.
let comparacion;
console.log("Ejercicio 3:");
comparacion = a < b;
console.log(comparacion);
comparacion = suma > a;
console.log(comparacion);

comparacion = multiplicacion != b;
console.log(comparacion);

comparacion = division !== a;
console.log(comparacion);

comparacion = b >= a;
console.log(comparacion);

//4.
console.log("Ejercicio 4:");
comparacion = a > b;
console.log(comparacion);

comparacion = suma < a;
console.log(comparacion);

comparacion = multiplicacion === b;
console.log(comparacion);

comparacion = division === a;
console.log(comparacion);

comparacion = a >= b;
console.log(comparacion);

//5.
console.log("Ejercicio 5:");
boolean = a != b && b >= a;
console.log(boolean);

//6.
console.log("Ejercicio 6:");
boolean = a != b || a <= b;
console.log(boolean);

//7.
console.log("Ejercicio 7:");
boolean = a === 3 || (b === 5 && c === 7);
console.log(boolean);

//8.
console.log("Ejercicio 8:");
boolean = a === 3 || (b === 5 && c !== 7);
console.log(boolean);

//9.
console.log("Ejercicio 9:");
a < b ? console.log(`${a} es menor que ${b}`) : console.log(`${a} es mayor que ${b}`);

//Determinar si un número es paro o impar:
let numero = 10;

numero % 2 === 0 ? console.log("El núermo es par.") : console.log("El número es impar.");

//Utilizando el operador ternario: determinar si una variable de tipo usuario y de tipo password
//coinciden con admin y 123456
//Si el login falla en cualquiera de las dos opciones, mostrar: "Datos incorrectos"

const usuario = "admin";
const password = "123456";

usuario !== "admin" && password !== "123456"
  ? console.log("Ambos datos son incorrectos.")
  : usuario !== "admin"
    ? console.log("El usuario es incorrecto.")
    : password !== "123456"
      ? console.log("La contraseña es incorrecta.")
      : console.log("Has iniciado sesión correctamente.");

//Ahora debemos averiguar cuál de los dos ha fallado. Si el usuario o password.
