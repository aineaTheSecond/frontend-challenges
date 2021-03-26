const hambugerMenu = document.querySelector(".hambuger-menu");
const nav = document.querySelector(".nav-links");

hambugerMenu.addEventListener("click", showMenu);

function showMenu() {
  nav.classList.toggle("show-nav");
}
