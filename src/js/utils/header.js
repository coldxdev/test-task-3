const menuBurger = document.querySelector(".menu__burger");
const menu = document.querySelector(".menu");

menuBurger.addEventListener("click", () => {
  menuBurger.classList.toggle("active");
  menu.classList.toggle("active");
});
