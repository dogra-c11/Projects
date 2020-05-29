var names = document.getElementById('nm');
var email = document.getElementById('email');
var nameval = document.getElementById('nv');
var eval = document.getElementById('ne');
var mob = document.getElementById('mobile');
var mobval = document.getElementById('mb');
var book = document.getElementById('bk');
var tr = document.getElementById('rght');
book.disabled = true;
names.addEventListener('keyup', function () {
    if (names.value.length < 6) {
        nameval.innerHTML = 'At least 6 characters';
        nameval.style.color = 'red';
        names.style.borderColor = 'red';
        book.disabled = true;
    } else {
        nameval.innerHTML = 'Valid';
        nameval.style.color = 'green';
        names.style.borderColor = 'green';
        if (
            names.style.borderColor == 'green' &&
            email.style.borderColor == 'green' &&
            mob.style.borderColor == 'green'
        ) {
            book.disabled = false;
        }
    }
});
email.addEventListener('keyup', function () {
    var atposition = email.value.indexOf('@');
    var dotposition = email.value.lastIndexOf('.');
    if (
        atposition < 1 ||
        dotposition < atposition + 2 ||
        dotposition + 2 >= email.value.length
    ) {
        eval.innerHTML = 'Not valid';
        eval.style.color = 'red';
        email.style.borderColor = 'red';
        book.disabled = true;
    } else {
        eval.innerHTML = 'Valid';
        eval.style.color = 'green';
        email.style.borderColor = 'green';
        if (
            names.style.borderColor == 'green' &&
            email.style.borderColor == 'green' &&
            mob.style.borderColor == 'green'
        ) {
            book.disabled = false;
        }
    }
});
mob.addEventListener('keyup', function () {
    if (mob.value.length != 10) {
        mobval.innerHTML = 'length should be 10 digits';
        mobval.style.color = 'red';
        mob.style.borderColor = 'red';
        book.disabled = true;
    } else {
        mobval.innerHTML = 'Valid';
        mobval.style.color = 'green';
        mob.style.borderColor = 'green';
        if (
            names.style.borderColor == 'green' &&
            email.style.borderColor == 'green' &&
            mob.style.borderColor == 'green'
        ) {
            book.disabled = false;
        }
    }
});
bk.addEventListener('click', function () {
    book.innerHTML = 'Booked Successfully';
    tr.style.fontSize = '30px';
    book.disabled = true;
    alert(
        '{ Name is : ' +
            names.value +
            '\nEmail is : ' +
            email.value +
            '\nMobile Number is : ' +
            mob.value +
            '}'
    );
});
