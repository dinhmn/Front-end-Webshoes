$(function() {
    let video = $('.video-desc > video')
    $(window).scroll(() => {
        let value = 1 + window.scrollY / -900;
        video.css('opacity', value);
    })

    new WOW().init();

    $(window).scroll(function() {
        var location = $(window).scrollTop();

        if (location >= 300) {
            $('header').css('transition', '.5s');
            $('header').css('backgroundColor', '#ff626d');
            $('.links ul').css('backgroundColor', '#ff626d');
            $('.search-box input').css('backgroundColor', '#ff626d');
            $('.search-box .go-icon').css('backgroundColor', '#ff626d');
        } else if (location < 300) {
            $('header').css('transition', '.5s');
            $('header').css('backgroundColor', 'transparent');
            $('.links ul').css('backgroundColor', 'transparent');
            $('.search-box input').css('backgroundColor', 'transparent');
            $('.search-box .go-icon').css('backgroundColor', 'transparent');
        }
        if (location >= 1000) {
            $('header').css('transition', '.5s');
            $('header').css('backgroundColor', '#fcad72');
            $('.links ul').css('backgroundColor', '#fcad72');
            $('.search-box input').css('backgroundColor', '#fcad72');
            $('.search-box .go-icon').css('backgroundColor', '#fcad72');


        } else if (location < 1000 && location >= 300) {
            $('header').css('transition', '.5s');
            $('header').css('backgroundColor', '#ff626d');
            $('.links ul').css('backgroundColor', '#ff626d');
            $('.search-box input').css('backgroundColor', '#ff626d');
            $('.search-box .go-icon').css('backgroundColor', '#ff626d');


        }
        if (location >= 2000) {
            $('header').css('transition', '.5s');
            $('header').css('backgroundColor', '#40BFFF');
            $('.links ul').css('backgroundColor', '#40BFFF');
            $('.search-box input').css('backgroundColor', '#40BFFF');
            $('.search-box .go-icon').css('backgroundColor', '#40BFFF');


        } else if (location < 2500 && location >= 2000) {
            $('header').css('transition', '.5s');
            $('header').css('backgroundColor', '#fcad72');
            $('.links ul').css('backgroundColor', '#fcad72');
            $('.search-box input').css('backgroundColor', '#fcad72');
            $('.search-box .go-icon').css('backgroundColor', '#fcad72');


        }

    })

    // $("window").load(() => {
    //     slideOne();
    //     // slideTwo();
    // })
    // $(window).load(function() {
    //     slideOne();
    // });
    $(window).ready(function() {
        slideOne();
        slideTwo();
    });

    let sliderOne = $('#slider-1')
    let sliderTwo = $('#slider-2')
    let displayValOne = $("#range1");
    let displayValTwo = $("#range2");
    let minGap = 0;
    let sliderTrack = $('.slider-track');
    let sliderMaxValue = $('#slider-1').attr("max");;

    slideOne = () => {
        if (parseInt(sliderTwo.val()) - parseInt(sliderOne.val()) <= minGap) {
            sliderOne.val() = parseInt(sliderTwo.val()) - minGap;
        }
        displayValOne.html(sliderOne.val());
        fillColor();
    }

    slideTwo = () => {
        if (parseInt(sliderTwo.val()) - parseInt(sliderOne.val()) <= minGap) {
            sliderTwo.val() = parseInt(sliderOne.val()) + minGap;
        }
        displayValTwo.html(sliderTwo.val());
        fillColor();

    }
    fillColor = () => {
        percent1 = (parseInt(sliderOne.val()) / sliderMaxValue) * 100;
        percent2 = (parseInt(sliderTwo.val()) / sliderMaxValue) * 100;
        $(sliderTrack).css({
            background: ` linear-gradient(to right, #dadae5 ${percent1}%, #ff626d ${percent1}%,
                #ff626d ${percent2}%,#dadae5 ${percent2}%)`
        });
    }
    $(".menu-before").click(function() {
        var _type = $(this).attr('type');
        $('.menu ul .menu-before').each(function() {
            $(this).removeClass("active1");
        })
        $('.menu ul .menu-before').each(function() {
            if ($(this).attr('type') == _type) {
                $(this).toggleClass("active1")
            }
        })
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
})

// var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);


// var menu = $$('.items-nav .menu ul li');
// console.log(menu);


var val = $$(".color-shoes > .choose")


for (let index = 0; index < val.length; index++) {
    val[index].onclick = function() {
        for (let index = 0; index < val.length; index++) {
            val[index].style.opacity = "0";

        }
        val[index].style.opacity = "1";
    }
}

var size = $$(".products-filter-size ul li");

for (let index = 0; index < size.length; index++) {
    size[index].onclick = function() {
        for (let index = 0; index < size.length; index++) {
            size[index].classList.remove('active')

        }
        size[index].classList.add('active')

    }
}