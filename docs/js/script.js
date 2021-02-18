const line = document.querySelector('.deli'),
    overlay = document.querySelector('.overlay'),
    menu = document.querySelector('.menu'),
    
    xclose = document.querySelector('.close');

line.addEventListener('click', function () {
    overlay.classList.toggle('active');
    menu.classList.toggle('menu-active');

});



xclose && overlay.addEventListener('click', function () {
    overlay.classList.remove('active');
    menu.classList.remove('menu-active');
});

