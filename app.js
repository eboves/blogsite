const btn_nav_el = document.querySelector(".btn-nav");
const header_el = document.querySelector(".header");

btn_nav_el.addEventListener("click", function () {
  header_el.classList.toggle("nav-open");
});
