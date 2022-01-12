$(document).ready(function() {
    $('.open-menu-sidebar > #btn-sidebar i').click(function() {
        $('.nav').addClass('nav-mini');
        $("#btn-next").css('opacity', '0');
        $("#btn-next").css('visibility', 'hidden');
        $(".slick-next").css('opacity', '0');
        $(".slick-next").css('visibility', 'hidden');

    })
    $(document).mouseup(function(event) {
        var menu = $('.nav');
        if (!menu.is(event.target) && menu.has(event.target).length == 0) {
            menu.removeClass('nav-mini');
            $("#btn-next").css('opacity', '1');
            $("#btn-next").css('visibility', 'visible');
            $(".slick-next").css('opacity', '1');
            $(".slick-next").css('visibility', 'visible');
        }
    })

})