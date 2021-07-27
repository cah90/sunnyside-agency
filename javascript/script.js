const btn = document.querySelector('.header__icon-menu');

const nav = document.querySelector(".nav")

btn.addEventListener("click", () => {
  nav.classList.toggle("nav--toggle-menu")
})