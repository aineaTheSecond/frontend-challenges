const hambugerMenu = document.querySelector(".hambuger-menu");
const nav = document.querySelector(".nav-links");
const closeBtn = document.querySelector(".close");

function toggleMenu({ target }) {
  nav.classList.toggle("show-nav");
}

hambugerMenu.addEventListener("click", toggleMenu);
