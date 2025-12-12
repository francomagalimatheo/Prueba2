// MENÚ RESPONSIVE
const menuBtn = document.getElementById("menuBtn");
const navList = document.querySelector(".nav-list");

menuBtn.addEventListener("click", () => {
  navList.classList.toggle("open");
});

// FORMULARIO
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = form.nombre.value.trim();
    const correo = form.correo.value.trim();
    const mensaje = form.mensaje.value.trim();
    const msg = document.getElementById("formMessage");

    if (!nombre || !correo || !mensaje) {
      msg.textContent = "Completa todos los campos.";
      msg.style.color = "crimson";
      return;
    }

    msg.textContent = "Mensaje enviado. ¡Gracias!";
    msg.style.color = "green";

    form.reset();
  });
});
