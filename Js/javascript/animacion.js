// Menú desplegable
const menuCheckbox = document.getElementById("menu container");
const navbar = document.querySelector(".navbar");

menuCheckbox.addEventListener("change", () => {
  if (menuCheckbox.checked) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
});

// Validación de formulario (ejemplo)
const form = document.getElementById("miFormulario");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Lógica de validación aquí

  // Si la validación es exitosa, envía el formulario
  form.submit();
});

// Carrusel de imágenes (ejemplo utilizando una biblioteca como Swiper)
const swiper = new Swiper(".swiper-container", {
  // Configuración del carrusel
});

// Animaciones dinámicas (ejemplo utilizando la biblioteca GSAP)
gsap.to(".elemento", { duration: 1, x: 100, opacity: 1 });
