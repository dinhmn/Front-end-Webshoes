$(function() {



    var autoLoad = setInterval(function() {
        $('#btn-next').trigger('click');
    }, 5000);

    $('#btn-next').click(function(event) {
        // clearInterval(autoLoad);
        var slideAfter = $('.active').next();
        var indexCurrent = $('.running').index() + 1;
        if (slideAfter.length != 0) {
            $('.active').addClass('disappear-left').one('webkitAnimationEnd', function(event) {
                $('.disappear-left').removeClass('disappear-left').removeClass('active');
            });
            slideAfter.addClass('active').addClass('go-to-right').one('webkitAnimationEnd', function(event) {
                $('.go-to-right').removeClass('go-to-right');
            });
            // xử lý nút 
            $('.navigation-manual ul li').removeClass('running');
            $('.navigation-manual ul li:nth-child(' + (indexCurrent + 1) + ')').addClass('running');
        } else {
            $('.active').addClass('disappear-left').one('webkitAnimationEnd', function(event) {
                $('.disappear-left').removeClass('disappear-left').removeClass('active');
            });
            $('.slide:first-child').addClass('active').addClass('go-to-right').one('webkitAnimationEnd', function(event) {
                $('.go-to-right').removeClass('go-to-right');
            });
            // xử lý nút 
            $('.navigation-manual ul li').removeClass('running');
            $('.navigation-manual ul li:nth-child(1)').addClass('running');
        }
    });
    $('#btn-prev').click(function(event) {
        // clearInterval(autoLoad);
        var slideBefore = $('.active').prev();
        var indexCurrent = $('.running').index() + 1;
        if (slideBefore.length != 0) {
            $('.active').addClass('disappear-right').one('webkitAnimationEnd', function(event) {
                $('.disappear-right').removeClass('disappear-right').removeClass('active');
            });
            slideBefore.addClass('active').addClass('go-to-right').one('webkitAnimationEnd', function(event) {
                $('.go-to-right').removeClass('go-to-right');
            });
            // xử lý nút 
            $('.navigation-manual ul li').removeClass('running');
            $('.navigation-manual ul li:nth-child(' + (indexCurrent - 1) + ')').addClass('running');
        } else {
            $('.active').addClass('disappear-right').one('webkitAnimationEnd', function(event) {
                $('.disappear-right').removeClass('disappear-right').removeClass('active');
            });
            $('.slide:last-child').addClass('active').addClass('go-to-right').one('webkitAnimationEnd', function(event) {
                $('.go-to-right').removeClass('go-to-right');
            });
            // xử lý nút 
            $('.navigation-manual ul li').removeClass('running');
            $('.navigation-manual ul li:last-child').addClass('running');
        }
    });
    $('.navigation-manual ul li').click(function(event) {
        clearInterval(autoLoad);
        var indexCurrent = $('.running').index() + 1;
        var indexClick = $(this).index() + 1;
        $('.navigation-manual ul li').removeClass('running');
        $(this).addClass('running');
        if (indexClick > indexCurrent) {
            $('.active').addClass('disappear-left').one('webkitAnimationEnd', function(event) {
                $('.disappear-left').removeClass('disappear-left').removeClass('active');
            });
            $('.slide:nth-child(' + indexClick + ')').addClass('active').addClass('go-to-right').one('webkitAnimationEnd', function(event) {
                $('.go-to-right').removeClass('go-to-right');
            });
        }
        if (indexClick < indexCurrent) {
            $('.active').addClass('disappear-right').one('webkitAnimationEnd', function(event) {
                $('.disappear-right').removeClass('disappear-right').removeClass('active');
            });
            $('.slide:nth-child(' + indexClick + ')').addClass('active').addClass('go-to-left').one('webkitAnimationEnd', function(event) {
                $('.go-to-left').removeClass('go-to-left');
            });
        }
    })



    $(document).ready(function() {
        $(".image-slider").slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            arrows: true,
            draggable: false,
            prevArrow: `<button type='button' class='slick-prev slick-arrow'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
            nextArrow: `<button type='button' class='slick-next slick-arrow'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
            dots: true,
            responsive: [{
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        arrows: false,
                        infinite: false,
                    },
                },
            ],
            // autoplay: true,
            // autoplaySpeed: 1000,
        });
    });
    var array = $('.menu ul li')
    $('.nike').click(function() {
        // for (let index = 0; index < array.length; index++) {
        //     array[index].css('borderColor', 'none');
        // }
        $('.menu ul li').css('borderColor', 'white')
        $('.nike').css('transition', '.5s');
        $('.nike').css('borderColor', '#ff626d');
    })
    $('.adidas').click(function() {
        $('.menu ul li').css('borderColor', 'white')
        $('.adidas').css('transition', '.5s');
        $('.adidas').css('borderColor', '#ff626d');
    })
    $('.puma').click(function() {
        $('.menu ul li').css('borderColor', 'white')
        $('.puma').css('transition', '.5s');
        $('.puma').css('borderColor', '#ff626d');
    })
    $('.vans').click(function() {
        $('.menu ul li').css('borderColor', 'white')
        $('.vans').css('transition', '.5s');
        $('.vans').css('borderColor', '#ff626d');
    })
    $('.conver').click(function() {
        $('.menu ul li').css('borderColor', 'white')
        $('.conver').css('transition', '.5s');
        $('.conver').css('borderColor', '#ff626d');
    })
    $('.newbalan').click(function() {
        $('.menu ul li').css('borderColor', 'white')
        $('.newbalan').css('transition', '.5s');
        $('.newbalan').css('borderColor', '#ff626d');
    })
    $('.all').click(function() {
        $('.menu ul li').css('borderColor', 'white')
        $('.all').css('transition', '.5s');
        $('.all').css('borderColor', '#ff626d');
    })
    $('.menu ul li').click(function() {
        var _type = $(this).attr('type');
        $('.best-seller .item').each(function() {
            if ($(this).hasClass(_type)) {
                $(this).removeClass('hidden');
                $(this).addClass('animate__animated animate__lightSpeedInRight');
            } else {
                $(this).addClass('hidden');
                $(this).removeClass('animate__animated animate__lightSpeedInRight');
            }
        })
    })

    $('.upTo').click(function() {
        $('body').animate({ scrollTop: 0 }, 800), "easeInOut";
    })

    console.log($('#send-subcribe'));
    // $('#send-subcribe').click(function(e) {
    //         console.log(1);
    //     })
    $('#send-subcribe').click(function(e) {
        const emailValue = $('#subcribe').val().trim();
        if (emailValue === '') {
            $('.social-subcribe-send').parent().find('small').html('Email cannot be blank')
        } else if (!isEmail(emailValue)) {
            $('.social-subcribe-send').parent().find('small').html('Not a valid email')
        }
    });

    function isEmail(email) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }
});