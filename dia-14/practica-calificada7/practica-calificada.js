const productos = [
  { nombre: "Laptop", precio: 1200 },
  { nombre: "Mouse", precio: 25 },
  { nombre: "Teclado", precio: 50 },
  { nombre: "Monitor", precio: 300 },
  { nombre: "Silla Gamer", precio: 450 },
  { nombre: "Audífonos", precio: 80 },
  { nombre: "Webcam", precio: 60 },
  { nombre: "USB 128GB", precio: 30 },
  { nombre: "Impresora", precio: 200 },
  { nombre: "Tablet", precio: 500 },
];

// 1.
const lista = document.getElementById("lista-productos");
productos.forEach((p) => {
  lista.innerHTML += `<li>${p.nombre} - $${p.precio}</li>`;
});

// 2.
const productosDisponibles = productos.map((p) => p.nombre);

function buscarProducto() {
  const input = document.getElementById("buscador").value.trim();
  const resultado = document.getElementById("resultado-busqueda");
  if (productosDisponibles.includes(input)) {
    resultado.textContent = `${input} está disponible ✅`;
    resultado.classList = "text-green-600";
  } else {
    resultado.textContent = `${input} no está disponible ❌`;
    resultado.classList = "text-red-600";
  }
}

// 3.
const descuentos = document.getElementById("lista-descuentos");
const productosConDescuento = productos.map((p) => ({
  nombre: p.nombre,
  precio: (p.precio * 0.9).toFixed(2),
}));
productosConDescuento.forEach((p) => {
  descuentos.innerHTML += `<li>${p.nombre} - $${p.precio}</li>`;
});

// 4.
const baratos = document.getElementById("productos-baratos");
productos
  .filter((p) => p.precio < 100)
  .forEach((p) => {
    baratos.innerHTML += `<li>${p.nombre} - $${p.precio}</li>`;
  });

// 5.
const primeros = document.getElementById("primeros-productos");
productos.slice(0, 2).forEach((p) => {
  primeros.innerHTML += `<li>${p.nombre} - $${p.precio}</li>`;
});

// 6.
const ordenados = document.getElementById("productos-ordenados");
[...productos]
  .sort((a, b) => a.precio - b.precio)
  .forEach((p) => {
    ordenados.innerHTML += `<li>${p.nombre} - $${p.precio}</li>`;
  });

// 7.
const reversos = document.getElementById("productos-inversos");
[...productos].reverse().forEach((p) => {
  reversos.innerHTML += `<li>${p.nombre} - $${p.precio}</li>`;
});
