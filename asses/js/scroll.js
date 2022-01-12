$(function() {
    new WOW().init();

    $(window).scroll(function() {
        var location = $(window).scrollTop();

        if (location >= 400) {
            $('header').css('transition', '.5s');
            $('header').css('backgroundColor', '#ff626d');
            $('.links ul').css('backgroundColor', '#ff626d');
            $('.search-box input').css('backgroundColor', '#ff626d');
            $('.search-box .go-icon').css('backgroundColor', '#ff626d');
        } else if (location < 1000) {
            $('header').css('transition', '.5s');
            $('header').css('backgroundColor', 'transparent');
            $('.links ul').css('backgroundColor', 'transparent');
            $('.search-box input').css('backgroundColor', 'transparent');
            $('.search-box .go-icon').css('backgroundColor', 'transparent');
        }
        if (location >= 2000) {
            $('header').css('transition', '.5s');
            $('header').css('backgroundColor', '#fcad72');
            $('.links ul').css('backgroundColor', '#fcad72');
            $('.search-box input').css('backgroundColor', '#fcad72');
            $('.search-box .go-icon').css('backgroundColor', '#fcad72');


        } else if (location < 2000 && location >= 1000) {
            $('header').css('transition', '.5s');
            $('header').css('backgroundColor', '#ff626d');
            $('.links ul').css('backgroundColor', '#ff626d');
            $('.search-box input').css('backgroundColor', '#ff626d');
            $('.search-box .go-icon').css('backgroundColor', '#ff626d');


        }
        if (location >= 3000) {
            $('header').css('transition', '.5s');
            $('header').css('backgroundColor', '#40BFFF');
            $('.links ul').css('backgroundColor', '#40BFFF');
            $('.search-box input').css('backgroundColor', '#40BFFF');
            $('.search-box .go-icon').css('backgroundColor', '#40BFFF');


        } else if (location < 3000 && location >= 2000) {
            $('header').css('transition', '.5s');
            $('header').css('backgroundColor', '#fcad72');
            $('.links ul').css('backgroundColor', '#fcad72');
            $('.search-box input').css('backgroundColor', '#fcad72');
            $('.search-box .go-icon').css('backgroundColor', '#fcad72');


        }

    })
    $("#sale-cart").click(function() {
        $(".sale-cart").slideToggle();
    })

})