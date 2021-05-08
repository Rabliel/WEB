const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu-list');


hamburger.addEventListener('click',()=>{
    menu.classList.toggle('header__item--show');
});