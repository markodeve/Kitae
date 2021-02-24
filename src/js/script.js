const line = document.querySelector('.deli'),
    overlay = document.querySelector('.overlay'),
    menu = document.querySelector('.menu'),
    headerMenu = document.querySelectorAll('.popup'),
    xclose = document.querySelector('.close');

line.addEventListener('click', function () {
    overlay.classList.toggle('active');
    menu.classList.toggle('menu-active');

});

$(headerMenu).on('click', function(){
    overlay.classList.remove('active');
    menu.classList.remove('menu-active');

});


xclose && overlay.addEventListener('click', function () {
    overlay.classList.remove('active');
    menu.classList.remove('menu-active');
});





















$(window).scroll(function(){
    if ($(this).scrollTop() > 1600) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    }
});

$("a[href^='#']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
});


$('[data-modal=head]').on('click', function(){
    $('.overlay__modal').fadeIn('fast');

});

$('.modal__close').on('click', function(){
    $('.overlay__modal').fadeOut('fast');
});



$('input[name=phone]').inputmask({"mask": "+1 (999) 999-9999"});
