function toggleMenu() {
    const menu = document.querySelector('.navbar-menu');
    menu.blur();
    menu.classList.toggle('show');
}
function closeMenu() {
    const menu = document.querySelector('.navbar-menu');
    menu.classList.remove('show');
}
