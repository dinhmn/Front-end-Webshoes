function tongtien() {
    var total = 0;
    var fee = $('span.shipping-fee').text();
    fee = parseFloat(fee);
    var coupon = $('.fee > p > span.coupon').text();
    coupon = parseInt(coupon);
    $('.item .cart-products-total input').each(function() {
        var price = $(this).val();
        total += parseInt(price);
    });
    $('.subtotal').text(total.format(2, 3, ',', '.'));
    let totalFinal = 0;
    if (coupon > 0) {
        totalFinal = ((total + fee) * coupon) / 100;
    } else {
        totalFinal = (total + fee);
    }
    $('.total-final #total-final').text(totalFinal.format(2, 3, ',', '.'));
}

$('.btn-cart').on('click', function() {
    var type = $(this).attr('data-type')
    var number_product = $(this).parent().find('#quantity').text();
    number_product = parseInt(number_product);
    if (type == 'up') {
        number_product += 1;
    } else {
        if (number_product > 1) {
            number_product -= 1;
        }
    }
    $(this).parents('.item').find('#quantity').text(number_product);
    var price_product = $(this).parents('.item').find('span.price').text();
    var total_item = number_product * parseInt(price_product);
    $(this).parents('.item').find('.cart-products-total .total').text(total_item.format(2, 3, ',', '.'));
    $(this).parents('.item').find('.cart-products-total input').val(total_item);
    tongtien();


});

Number.prototype.format = function(n, x, s, c) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')',
        num = this.toFixed(Math.max(0, ~~n));

    return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','));
}
Number.prototype.format_resever = function(n, x, s, c) {
    var num = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')',
        re = this.toFixed(Math.max(0, ~~n));

    return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','));
}


$('.cart-products-delete i').on('click', function() {
    $(this).parents('.item').remove();
    tongtien();
    var qty = $('.cart-products table tbody tr').length;
    $('#totalQty').text(qty);

});


document.addEventListener("DOMContentLoaded", function() {
    var $ = document.querySelector.bind(document);
    var $$ = document.querySelectorAll.bind(document)

    var checkOut = $('.check-out button')
    var makePayment1 = $('.make-payment-1 .payment-heading .undo-close .undo')
    checkOut.onclick = () => {
        $('.fake-opacity').classList.add('fake-opacity-call');
        $('.make-call').classList.add('make-call-opacity');
        $('.make-payment-1').style.display = 'block';
        $('.make-payment-1').style.transform = 'translateY(0)';


    }
    var close = $('.undo-close > .close')
    close.onclick = () => {
        $('.fake-opacity').classList.remove('fake-opacity-call');
        $('.make-call').classList.remove('make-call-opacity');
    }
    makePayment1.onclick = () => {
        $('.fake-opacity').classList.remove('fake-opacity-call');
        $('.make-call').classList.remove('make-call-opacity');
        $('.make-payment-1').style.transform = 'translateY(-100%)';

    }
    $('.make-payment-1 .payment-next > button').onclick = () => {
        $('.make-payment-1').style.display = 'none';
        $('.make-payment-2').classList.add('make-call-opacity');
        $('.make-payment-2').style.transform = 'translateY(0)';
    }
    $('.make-payment-2 > .payment-heading .undo-close .undo').onclick = () => {
        $('.make-payment-2').classList.remove('make-call-opacity');
        $('.make-payment-2').style.transform = 'translateY(-100%)';
        $('.make-payment-1').style.transform = 'translateY(0)';
        $('.make-payment-1').style.display = 'block';
    }
    $('.make-payment-2 > .payment-heading .undo-close .close').onclick = () => {
        $('.fake-opacity').classList.remove('fake-opacity-call');
        $('.make-payment-2.make-call').classList.remove('make-call-opacity');
        $('.make-payment-2').style.transform = 'translateY(-100%)';
    }
    $('.make-payment-2 .payment-next > button').onclick = () => {
        $('.make-payment-2').style.transform = 'translateY(-100%)';
        $('.make-payment-2.make-call').classList.remove('make-call-opacity');
        $('.make-payment-3').classList.add('make-call-opacity');
        $('.make-payment-3').style.transform = 'translateY(0)';
    }
    $('.make-payment-3 > .payment-heading .undo-close .close').onclick = () => {
        $('.fake-opacity').classList.remove('fake-opacity-call');
        $('.make-payment-3.make-call').classList.remove('make-call-opacity');
        $('.make-payment-3').style.transform = 'translateY(-100%)';
    }
    $('.make-payment-3 .payment-next > button').onclick = () => {
        $('.fake-opacity').classList.remove('fake-opacity-call');
        $('.make-payment-3.make-call').classList.remove('make-call-opacity');
        $('.make-payment-3').style.transform = 'translateY(-100%)';
    }
    $('.make-payment-3 > .payment-heading .undo-close .undo').onclick = () => {
        $('.make-payment-3').classList.remove('make-call-opacity');
        $('.make-payment-3').style.transform = 'translateY(-100%)';
        $('.make-payment-2').classList.add('make-call-opacity');
        $('.make-payment-2').style.transform = 'translateY(0)';
        $('.make-payment-2').style.display = 'block';
    }

    var quatity = $$('.cart-products table tbody tr');
    $('#totalQty').innerText = quatity.length;
    if (quantity.length == 0) {
        $('.cart-products > table > thead').style.display = 'none';
    }
})

var username = $("#firstName");
var usernameLast = $("#lastName");
var email = $("#email");
var address = $("#address");

$(username).keyup(function(e) {
    const usernameValue = username.val().trim();

    if (usernameValue === '') {
        setErrorFor(username, 'Username cannot be blank');
    } else {
        setSuccessFor(username);
    }
});
$(email).keyup(function(e) {
    const emailValue = email.val().trim();
    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email');
    } else {
        setSuccessFor(email);
    }
});


function setErrorFor(input, message) {
    const formControl = input.parent();
    formControl.attr('class', 'form-group error');
    formControl.find('small').html(message);
}

function setSuccessFor(input) {
    const formControl = input.parent();
    formControl.attr('class', 'form-group success');
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}