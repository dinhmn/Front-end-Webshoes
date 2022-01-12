document.addEventListener('DOMContentLoaded', function() {
    var $ = document.querySelector.bind(document);
    var $$ = document.querySelectorAll.bind(document);

    let name = $("#name");

    $('#name').onkeyup = function() {
        if ($('#name').value == '') {
            $('#name').style.borderColor = "red";
        } else if (!checkName($('#name').value)) {
            $('#name').style.borderColor = "red";
        } else if (checkName($('#name').value)) {
            $('#name').style.borderColor = "#6a5af9";
        }
    }
    $('#email').onkeyup = function() {
        if ($('#email').value == '') {
            $('#email').style.borderColor = "red";
        } else if (!checkGmail($('#email').value)) {
            $('#email').style.borderColor = "red";
        } else if (checkGmail($('#email').value)) {
            $('#email').style.borderColor = "#6a5af9";
        }
    }
    $('#subject').onkeyup = function() {
        if ($('#subject').value == '') {
            $('#subject').style.borderColor = "red";
        }
    }

    $('#message').onkeyup = function() {
        if ($('#message').value == '') {
            $('#message').style.borderColor = "red";
        }
    }



    function checkName(name) {
        return !(/\d/gm).test(name);
    }

    function checkGmail(gmail) {
        return gmail.match(/^([\w]*[\w\.]*(?!\.)@gmail.com)/);
    }

})

$(function() {
    TweenMax.from($('.contact-form'), 1, { top: 100, opacity: 0 }, 0.4);
    $('.contact-intro-content-img').css('opacity', '0')
    $('.contact-intro-content-desc').css('opacity', '0')
    $('.contact-map').css('opacity', '0')
    $(window).scroll(function(event) {
        var body = $(window).scrollTop();
        // console.log(body);
        var banner = $('.banner').offset().top;
        var template = $('.contact-intro-content-img').offset().top;
        var template2 = $('.contact-intro-content-desc').offset().top;
        template = template - 300;

        if (body >= banner) {
            $('.contact-intro-content-img').addClass('animate__animated animate__slideInLeft')
            $('.contact-intro-content-desc').addClass('animate__animated animate__slideInRight')
            $('.contact-intro-content-img').css('opacity', '1')
            $('.contact-intro-content-desc').css('opacity', '1')
        }
        if (body >= template) {
            $('.contact-map').addClass('animate__animated animate__fadeInUp')
            $('.contact-map').css('opacity', '1')
        }
        if (body >= $('.contact-map').offset().top) {
            $('.form:first-child').addClass('animate__animated animate__fadeInUp')
            $('.form:nth-child(2)').css('animationDelay', '.4s');
            $('.form:nth-child(2)').addClass('animate__animated animate__fadeInUp')
            $('.form:nth-child(3)').css('animationDelay', '.8s');
            $('.form:nth-child(3)').addClass('animate__animated animate__fadeInUp')
            $('.text-area').css('animationDelay', '0s');
            $('.text-area').addClass('animate__animated animate__fadeInUp')
            $('.button').css('animationDelay', '.4s');
            $('.button').addClass('animate__animated animate__fadeInUp')
            $('.contact-form-address').addClass('animate__animated animate__fadeInRight')
        }



    });
});