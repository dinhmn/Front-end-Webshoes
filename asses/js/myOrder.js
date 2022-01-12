var list = $(".filter li");
console.log(list)

list.click(function(e) {
    e.preventDefault();
    var _type = $(this).attr("type");
    console.log(_type);

    $(".order div").each(function() {
        $(this).removeClass("active");
    })
    $(".filter li").each(function() {
        $(this).removeClass("active");
        $(this).css({
            "backgroundColor": "transparent",
            "color": "black"
        });

    })
    $(".order div").each(function() {
        if ($(this).attr('type') == _type) {
            $(this).addClass("active");
        }
    })

    $(this).addClass("active");
    $(this).css("backgroundColor", "#6A5AF9");
    $(this).css("color", "white");
});