/* DESAFIO GRUPAL

Requerimientos del Restaurante “don baraton”

El restaurante necesita un sistema simple que permita:

Mostrar el menú del día (máximo 5 platos, sin usar arrays). [Sebastián]

Permitir que un cliente realice varios pedidos (repetir mientras desee).

Calcular el precio según el plato elegido. 

Solicitar el nombre del cliente. [Sebastían]

Mostrar una factura final con el total a pagar por todos los platos. [Benjamin]

(Opcional +5PTS) Aplicar descuento del 5% si el total supera los $120. [Benjamin]

(Opcional +5PTS) Mostrar un mensaje especial si el cliente eligió “Tacos”.

(Opcional html +10pts)
*/

function obtenerPrecio(opcion) {
  switch (opcion) {
    case 1:
      return 35;
    case 2:
      return 40;
    case 3:
      return 25;
    case 4:
      return 30;
    case 5:
      return 20;
    default:
      return 0;
  }
}

function calcularTotalFinal(subtotal, nombreCliente) {
  let totalConDescuento = subtotal;
  const umbralDescuento = 120;
  const porcentajeDescuento = 0.05;

  if (subtotal > umbralDescuento) {
    totalConDescuento = subtotal * (1 - porcentajeDescuento);
    console.log(`¡Felicidades ${nombreCliente}! Obtuviste un 5% de descuento.`);
    console.log(`Subtotal: $${subtotal.toFixed(2)}`);
    console.log(`Descuento aplicado: $${(subtotal * porcentajeDescuento).toFixed(2)}`);
  }

  return totalConDescuento;
}

function mostrarFactura(nombreCliente, totalFinal) {
  console.log("\n=== FACTURA FINAL ===");
  console.log(`Cliente: ${nombreCliente}`);
  console.log(`Total a pagar: $${totalFinal.toFixed(2)}`);
  console.log("Gracias por su compra en Don Baratón!");
  console.log("======================\n");
}

function realizarPedido() {
  let nombreCliente = prompt("Bienvenido a Don Baratón, ¿Cuál es tu nombre?");
  let total = 0;
  let seguirPedido = true;
  let pidioTacos = false;

  let mensajeMenu = `Menú del día:
    1. Pollo a la brasa - $35
    2. Lomo saltado - $40
    3. Tacos - $25
    4. Hamburguesa - $30
    5. Ensalada - $20
    0. Salir
    PROMOCIÓN: Obtén 5% de descuento si tu compra supera los $120`;

  while (seguirPedido) {
    let eleccion = prompt(`${mensajeMenu}\n¿Qué deseas pedir? Ingresa el número del plato:`);
    let opcion = parseInt(eleccion);

    if (isNaN(opcion) || opcion < 0 || opcion > 5) {
      alert("Por favor, ingresa un número válido del 0 al 5.");
      continue;
    }

    if (opcion === 3) {
      pidioTacos = true;
    }

    if (opcion === 0) {
      break;
    }

    let precio = obtenerPrecio(opcion);
    total += precio;

    seguirPedido = confirm("¿Deseas pedir otro plato?");
  }

  let totalFinal = calcularTotalFinal(total, nombreCliente);

  if (pidioTacos) {
    console.log("¡Gracias por elegir nuestros famosos Tacos!");
  }

  if (total === 0) {
    console.log(`No se realizó ningún pedido. ¡Gracias por visitar Don Baratón, ${nombreCliente}!`);
    return;
  }

  mostrarFactura(nombreCliente, totalFinal);
}

realizarPedido();
