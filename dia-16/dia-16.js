// const themeToggle = document.getElementById("themeToggle");
// const fionaImg = document.getElementById("fionaImg");
// const body = document.body;

// themeToggle.addEventListener("change", (event) => {
//   const isDark = event.target.checked;
//   body.classList.toggle("dark", isDark);
//   fionaImg.src = isDark ? "./img/fiona-orgro.jpg" : "./img/fiona-humana.jpg";
//   fionaImg.setAttribute(
//     "src",
//     "https://cdn0.bioenciclopedia.com/es/posts/9/9/4/cabra_499_orig.jpg",
//   );
// });

/* Crear un formulario donde pidan el nombre, apellido paterno, edad, nacionalidad y
agregarlo a un objeto y imprimirlo en consola.
*/

const name = document.getElementById("name");
const lastName = document.getElementById("lastName");
const age = document.getElementById("age");
const nationality = document.getElementById("nationality");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (isNaN(ageValue) || ageValue === "") {
    alert("NO SE PUEDE PONER LETRAS A LA EDAD, BOBO");
    return;
  }

  const data = {
    name: document.getElementById("name").value.trim(),
    lastName: document.getElementById("lastName").value.trim(),
    age: parseInt(document.getElementById("age").value.trim()),
    nationality: document.getElementById("nationality").value.trim(),
  };

  console.log("Datos del formulario:", data);
});
