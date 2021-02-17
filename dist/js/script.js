const line = document.querySelector('.deli'),
      overlay = document.querySelector('.overlay'),
      menu = document.querySelector('.menu'),
      xclose = document.querySelector('.close');

line.addEventListener('click', function(){
    overlay.classList.toggle('active')
    menu.classList.toggle('menu-active')
    
});

xclose.addEventListener('click', function(){
    overlay.classList.toggle('active')
    menu.classList.toggle('menu-active')
});

overlay.addEventListener('click', function(){
    overlay.classList.toggle('active')
    menu.classList.toggle('menu-active')
});


