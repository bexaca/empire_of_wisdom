$(window).on('load', function () { // makes sure the whole site is loaded
    $('.preloader').delay(250).fadeOut('slow'); // will first fade out the loading animation
    $('.preloader__container').delay(850).fadeOut('slow'); // will fade out the white DIV that covers the website.
    setTimeout(() => {
        $('body').removeClass('body');
    }, 850);
})

$(document).ready(function () {
    function valName() {
        var name = $('#name__input').val();
        if (name == 0) {
            $('.alert__block').removeClass('active__alert');
            $('.alert__block-name').addClass('active__alert');
            setTimeout(function () {
                $('.alert__block-name').removeClass('active__alert');
            }, 5000);
            return false;
        }
        else {
            return true;
        }
    }

    function valEmail() {
        var email = $('#email__input').val();
        var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (email == 0) {
            $('.alert__block').removeClass('active__alert');
            $('.alert__block-email').addClass('active__alert');
            setTimeout(function () {
                $('.alert__block-email').removeClass('active__alert');
            }, 5000);
            return false;
        }
        else if (!filter.test(email)) {
            $('.alert__block').removeClass('active__alert');
            $('.alert__block-email-val').addClass('active__alert');
            setTimeout(function () {
                $('.alert__block-email-val').removeClass('active__alert');
            }, 5000);
            return false;
        }
        else {
            return true;
        }

    }

    function valMsg() {
        var text = $('#text__input').val();
        if (text == 0) {
            $('.alert__block').removeClass('active__alert');
            $('.alert__block-msg').addClass('active__alert');
            setTimeout(function () {
                $('.alert__block-msg').removeClass('active__alert');
            }, 5000);
            return false;
        }
        else {
            return true;
        }
    }

    $('.skip-to-main-content').click(function() {
        $(this).blur();
    })

    $('.scroll').click(function() {
        $(this).blur();
    })

    $('#submit__button').click(function (e) {
        if (!valName() || !valEmail() || !valMsg()) {
            e.preventDefault();
        }
    });
    $('.ccformfield').on('keydown', function () {
       $('.alert__block').removeClass('active__alert');
    });

    $(".col-12 .input__field").val("");
    
    $(".input-effect .input__field").focusout(function(){
        if($(this).val() != ""){
            $(this).addClass("has-content");
        }else{
            $(this).removeClass("has-content");
        }
    })
});
