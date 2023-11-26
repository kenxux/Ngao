function toggleMenu() {
  var menu = document.getElementById("menu");
  menu.classList.toggle("show");
}

window.addEventListener('click', function (event) {
  var menu = document.getElementById("menu");
  if (!event.target.matches('.hamburger') && !event.target.matches('.menu a')) {
      menu.classList.remove("show");
  }
});