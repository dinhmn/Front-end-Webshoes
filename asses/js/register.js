function toggleForm() {
    var section = $('section');
    var container = $('.container');
    var home = $('.home')
    container.toggleClass('active');
    section.toggleClass('active');
    home.toggleClass('active');
}

const form = $('#form');
const username = $('#username');
const email = $('#email');
const password = $('#password');
const password2 = $('#checkpass');

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
$(password).keyup(function(e) {
    const passwordValue = password.val().trim();
    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
    } else {
        setSuccessFor(password);
    }
});

$(password2).keyup(function(e) {
    const passwordValue = password.val().trim();
    const password2Value = password2.val().trim();
    if (password2Value === '') {
        setErrorFor(password2, 'Password2 cannot be blank');
    } else if (passwordValue !== password2Value) {
        setErrorFor(password2, 'Passwords does not match');
    } else {
        setSuccessFor(password2);
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