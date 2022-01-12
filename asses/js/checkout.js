$("#flexRadioDefault2").click(function() {
    // $(this).parent().find(".bankTransfer").removeClass("d-none");
    $(this).parent().find(".bankTransfer").slideDown();
    $(".sale-order table tbody .bankTransfer").slideDown();
});
$("#flexRadioDefault1").click(function() {
    // $("#flexRadioDefault2").parent().find(".bankTransfer").addClass("d-none");
    $("#flexRadioDefault2").parent().find(".bankTransfer").slideUp();
    $(".sale-order table tbody .bankTransfer").slideUp();
})
$("#login").click(function() {
    $(".login").slideToggle();
})
$("#intruction").click(function() {
    $(".intruction").slideToggle();
})
const firstName = $("#firstName")
const lastName = $("#lastName")
const nation = $("#nation")
const city = $("#city")
const address = $("#address")
const phone = $("#phone")
const email = $("#email")
const day = $("#day")
const month = $("#month")
const year = $("#year")

console.log(firstName.css("outline"));


firstName.keyup(function() {
    const value = $(this).val().trim();
    if (!checkName(value)) {
        $(this).css("borderColor", "#e74c3c")
    } else if (value === '') {
        $(this).css("borderColor", "#e74c3c")
    } else {
        $(this).css("borderColor", "#2ecc71")
    }
})
lastName.keyup(function() {
    const value = $(this).val().trim();
    if (!checkName(value)) {
        $(this).css("borderColor", "#e74c3c")
    } else if (value === '') {
        $(this).css("borderColor", "#e74c3c")
    } else {
        $(this).css("borderColor", "#2ecc71")
    }
})
address.keyup(function() {
    const value = $(this).val().trim();
    if (value === '') {
        $(this).css("borderColor", "#e74c3c")
    } else {
        $(this).css("borderColor", "#2ecc71")
    }
})

phone.keyup(function() {
    const value = $(this).val().trim();
    if (!checkPhone(value)) {
        $(this).css("borderColor", "#e74c3c")
    } else if (value === '') {
        $(this).css("borderColor", "#e74c3c")
    } else {
        $(this).css("borderColor", "#2ecc71")
    }
})


email.keyup(function() {
    const value = $(this).val().trim();
    if (!isEmail(value)) {
        $(this).css("borderColor", "#e74c3c")
    } else if (value === '') {
        $(this).css("borderColor", "#e74c3c")
    } else {
        $(this).css("borderColor", "#2ecc71")
    }
})


function checkName(name) {
    return !(/\d/gm).test(name);
}

function isPhone(phone) {
    return (/^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm).test(phone);
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function checkPhone(phone) {
    return phone.match(/^[0-9\-\+]{9,15}$/);
}

function checkGmail(gmail) {
    return gmail.match(/^([\w]*[\w\.]*(?!\.)@gmail.com)/);
}
var submit = $(".sale-order button");

$(".sale-order button").click(function() {
    $(".pop-up").css("display", "block")
    $(".success").css({
        "display": "block"
    })
})
$(".success-button .no").click(function() {
    $(".pop-up").css("display", "none")
    $(".success").css("display", "none")
})
$(".error .success-button .ok").click(function() {
    $(".pop-up").css("display", "none")
    $(".success").css("display", "none")
})