function obtenerNumero(mensaje) {
  let valor;
  do {
    valor = prompt(mensaje);

    if (valor === null) {
      return null;
    }

    valor = parseFloat(valor);

    if (isNaN(valor) || valor <= 0) {
      console.log("Por favor, ingresa un número válido y mayor que cero.");
    }
  } while (isNaN(valor) || valor <= 0);
  return valor;
}

function calcularAreaCuadrado() {
  console.log("\n--- Cálculo de Área de Cuadrado ---");
  const lado = obtenerNumero("Ingresa la longitud del lado del cuadrado:");
  if (lado === null) {
    console.log("Cálculo de cuadrado cancelado.");
    return;
  }
  const area = lado * lado;
  console.log(`El área del cuadrado es: ${area}`);
}

function calcularAreaRectangulo() {
  console.log("\n--- Cálculo de Área de Rectángulo ---");
  const base = obtenerNumero("Ingresa la longitud de la base del rectángulo:");
  if (base === null) {
    console.log("Cálculo de rectángulo cancelado.");
    return;
  }
  const altura = obtenerNumero("Ingresa la altura del rectángulo:");
  if (altura === null) {
    console.log("Cálculo de rectángulo cancelado.");
    return;
  }
  const area = base * altura;
  console.log(`El área del rectángulo es: ${area}`);
}

function calcularAreaTriangulo() {
  console.log("\n--- Cálculo de Área de Triángulo ---");
  const base = obtenerNumero("Ingresa la longitud de la base del triángulo:");
  if (base === null) {
    console.log("Cálculo de triángulo cancelado.");
    return;
  }
  const altura = obtenerNumero("Ingresa la altura del triángulo:");
  if (altura === null) {
    console.log("Cálculo de triángulo cancelado.");
    return;
  }
  const area = (base * altura) / 2;
  console.log(`El área del triángulo es: ${area}`);
}

function iniciarCalculadora() {
  let opcion;

  do {
    opcion = prompt(
      "Selecciona una opción para calcular el área:\n" +
        "1. Calcular el área de un cuadrado\n" +
        "2. Calcular el área de un rectángulo\n" +
        "3. Calcular el área de un triángulo\n" +
        "0. Salir\n\n" +
        "Ingresa el número de tu opción:",
    );

    if (opcion === null) {
      opcion = "0";
    }

    switch (opcion) {
      case "1":
        calcularAreaCuadrado();
        break;
      case "2":
        calcularAreaRectangulo();
        break;
      case "3":
        calcularAreaTriangulo();
        break;
      case "0":
        console.log("¡Gracias por usar la calculadora de áreas! Hasta luego.");
        break;
      default:
        console.log("Opción no válida. Por favor, selecciona un número del 0 al 3.");
    }
  } while (opcion !== "0");
}

iniciarCalculadora();
