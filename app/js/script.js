var burgerMenu = document.querySelector('.site-header__burger');
var header = document.querySelector('.site-header');

burgerMenu.addEventListener('click', function () {
    header.classList.toggle('site-header--opened');
    burgerMenu.classList.toggle('site-header__burger--opened')
})