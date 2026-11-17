// Año del pie de página
document.getElementById("year").textContent = new Date().getFullYear();

// Menú: fondo al hacer scroll
const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 40);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Menú móvil
const toggle = document.getElementById("navToggle");
const links = document.getElementById("navLinks");
toggle.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
  nav.classList.add("scrolled");
});
links.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    links.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  })
);

// Animación de aparición
const io = new IntersectionObserver(
  (entries) => entries.forEach((e) => e.isIntersecting && (e.target.classList.add("visible"), io.unobserve(e.target))),
  { threshold: 0.12 }
);
document.querySelectorAll(".section h2, .split__text, .split__media, .amenity, .card, .book__card, .gallery__item, .form, .host__card, .review, .info__item")
  .forEach((el) => { el.classList.add("reveal"); io.observe(el); });

// Visor de fotos (galería)
const items = [...document.querySelectorAll(".gallery__item")];
const lb = document.getElementById("lightbox");
const lbImg = document.getElementById("lbImg");
let current = 0;
const show = (i) => {
  current = (i + items.length) % items.length;
  lbImg.src = items[current].dataset.src;
};
items.forEach((item, i) => item.addEventListener("click", () => { show(i); lb.hidden = false; }));
const close = () => (lb.hidden = true);
document.getElementById("lbClose").addEventListener("click", close);
document.getElementById("lbPrev").addEventListener("click", () => show(current - 1));
document.getElementById("lbNext").addEventListener("click", () => show(current + 1));
lb.addEventListener("click", (e) => e.target === lb && close());
document.addEventListener("keydown", (e) => {
  if (lb.hidden) return;
  if (e.key === "Escape") close();
  if (e.key === "ArrowLeft") show(current - 1);
  if (e.key === "ArrowRight") show(current + 1);
});

// Formulario de contacto -> abre el correo con la consulta lista
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const d = Object.fromEntries(new FormData(e.target));
  const subject = `Consulta de reserva - ${d.nombre}`;
  const body =
    `Hola, soy ${d.nombre}.\n\n` +
    `Llegada: ${d.llegada || "-"}\nSalida: ${d.salida || "-"}\nHuéspedes: ${d.huespedes}\n\n` +
    `${d.mensaje || ""}`;
  window.location.href =
    `mailto:bungalowcajamrca@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

// Muestra un marcador si todavía no has subido una foto
document.querySelectorAll(".photo[data-label]").forEach((el) => {
  const img = new Image();
  img.onerror = () => el.classList.add("empty");
  img.src = "images/" + el.dataset.label;
});
