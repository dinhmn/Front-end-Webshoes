$(function() {
    new WOW().init();

    $(window).scroll(function() {
        var location = $(window).scrollTop();

        if (location >= 200) {
            $('header').css('transition', '.5s');
            $('header').css('backgroundColor', '#ff626d');
            $('.links ul').css('backgroundColor', '#ff626d');
            $('.search-box input').css('backgroundColor', '#ff626d');
            $('.search-box .go-icon').css('backgroundColor', '#ff626d');
        } else if (location < 600) {
            $('header').css('transition', '.5s');
            $('header').css('backgroundColor', '#ff626d');
            $('.links ul').css('backgroundColor', '#ff626d');
            $('.search-box input').css('backgroundColor', '#ff626d');
            $('.search-box .go-icon').css('backgroundColor', '#ff626d');
        }
        if (location >= 1000) {
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

    // const imgs = $(".img-select a");
    // const imgBtns = [...imgs];
    // let imgId = 1;

    // imgBtns.each(function(imgItem) {
    //     imgItem.click(function(e) {
    //         e.preventDefault();
    //         imgItem.data(id, imgId);
    //         slideImage();
    //     })
    // })

    // function slideImage() {
    //     const displayWidth = $(".img-showcase img:first-child").clientWidth;
    //     $(".img-showcase").css("transform", `translateX(${- (imgId - 1) * displayWidth}px)`);
    // }




    var menuDes = $(".menu-more ul li");
    menuDes.click(function() {
        let _type = $(this).attr("type");
        $(".menu-more ul li").each(function() {
            $(this).removeClass("active");
        })
        $("#advancedTabContent > .tab-pane.fade").each(function() {
            $(this).removeClass("show active");
            var _this = $(this);
            var _typeShow = $(this).attr("type");
            if (_typeShow == _type) {
                _this.addClass("show active");
            }
        })
        $(this).addClass("active");

        // e.preventDefault();
        // $(".about-reviews-content .tab-content > .tab-pane").toggleClass("show active");
    });
    value = parseInt($(".quantity-choose .choose").val());
    $(".quantity-choose #reduce").click(function(e) {
        e.preventDefault();
        if (value > 1) {
            value -= 1;
        } else {
            value = value;
        }
        $(".quantity-choose > .choose").attr("value", value);

    });
    $(".quantity-choose #increase").click(function(e) {
        e.preventDefault();
        if (value > 100) {
            value = value;
        } else {
            value += 1;
        }
        $(".quantity-choose > .choose").attr("value", value);

    });
    var selectColor = $(".selectColor td:last-child > span");
    $(".selectColor td:last-child > span").click(function() {
        $(".selectColor td:last-child > span").each(function() {
            $(this).css("transform", "scale(1)");
        })
        $(this).css("transform", "scale(1.2)");
    })

    $("#form75").keyup(function() {

        if ($('#form75').val() == '') {
            $('#form75').parent().find("small").css("display", "block");
            $('#form75').parent().find("small").html("Error name");

        } else if (!checkName($('#form75').val())) {
            $('#form75').parent().find("small").html("Error name");
            $('#form75').parent().find("small").css("display", "block");
        } else if (checkName($('#form75').val())) {
            $('#form75').parent().find("small").html(null);
            $('#form75').parent().find("small").css("display", "none");
        }
    })
    $("#form77").keyup(function() {
        if ($('#form77').val() == '') {
            $('#form77').parent().find("small").html("Error email");
            $('#form77').parent().find("small").css("display", "block");
        } else if (!checkEmail($('#form77').val())) {
            $('#form77').parent().find("small").html("Error email");
            $('#form77').parent().find("small").css("display", "block");
        } else if (checkEmail($('#form77').val())) {
            $('#form77').parent().find("small").html(null);
            $('#form77').parent().find("small").css("display", "none");
        }
    })


    function checkName(name) {
        return !(/\d/gm).test(name);
    }

    function checkEmail(gmail) {
        return gmail.match(/^([\w]*[\w\.]*(?!\.)@gmail.com)/);
    }

})
const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage() {
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);