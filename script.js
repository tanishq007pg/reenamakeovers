// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});
menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
  menuToggle.textContent = nav.classList.contains("active") ? "✖" : "☰";
});
function toggleMenu() {
  document.querySelector('nav').classList.toggle('active');
}
