$(document).ready(function () {
    
    $('body').on('click', '.menu', function (event) {
        $(this).toggleClass('open');
        $('#icon-wrap-2').css("pointer-events", "none");
        setTimeout(function () {
            $('#icon-wrap-2').css("pointer-events", "all");
        }, 1000);
        $('.menu__block').toggleClass('menu__active');
        setTimeout(function () {
            $('.menu__items').toggleClass('menu__items-active');
        }, 100);
        setTimeout(function () {
            $('.menu__items').toggleClass('menu-items-pointer-events');
        }, 1000);
    });

    $('.menu__item a').click(function () {
        $('.menu__items').toggleClass('menu-items-pointer-events');
        $('#icon-wrap-2').removeClass('open');
        $('.menu__items').toggleClass('menu__items-active');
        $('.menu__block').toggleClass('menu__active');
    });

})
