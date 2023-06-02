const firstname = document.querySelector('input[name="firstName"]');
const lastname = document.querySelector('input[name="lastName"]');
const email = document.querySelector('input[name="email"]');
const mobile = document.querySelector('input[name="tele"]');
const password = document.querySelector('input[name="pass"]');
const repassword = document.querySelector('input[name="repass"]');

//firstName validation
firstname.addEventListener('invalid', function (event) {
    if (event.target.validity.valueMissing) {
        event.target.setCustomValidity('Please tell us how we should address you.');
    }
});
firstname.addEventListener('change', function (event) {
    event.target.setCustomValidity('');
});

//lastName validation

lastname.addEventListener('invalid', function (event) {
    if (event.target.validity.valueMissing) {
        event.target.setCustomValidity('Please let us know your lastName.');
    }
});
lastname.addEventListener('change', function (event) {
    event.target.setCustomValidity('');
});

//email validation
email.addEventListener('invalid', (event) => {
    if (event.target.validity.valueMissing) {
        event.target.setCustomValidity('set your email properly eg: dhruthi@email.com');
    } else {
        var emailVal = email.value;
        var regex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+(\.[a-z]+)(\.[a-z]+)?$/

        if (!regex.test(emailVal)) {

            event.target.setCustomValidity('Please set email properly eg:dhruthi@email.com');
        }
    }
});
email.addEventListener('change', function (event) {
    event.target.setCustomValidity('');
});

//mobile validation
mobile.addEventListener('invalid', (event) => {

    if(event.target.validity.valueMissing){
        event.target.setCustomValidity('Please enter mobile number correctly eg: 98...1');
    }else if(event.target.validity.patternMismatch) {
        event.target.setCustomValidity('Enter mobile number eg: 87...1');
    }
});

mobile.addEventListener('change', function (event) {
    event.target.setCustomValidity('');
});


//password Validation

password.addEventListener('invalid', (event) => {
    if (event.target.validity.tooShort) {
        event.target.setCustomValidity('Password must be min 6 letters long');
    }
})

password.addEventListener('change', (event) => {
    event.target.setCustomValidity('');
})

// repass validation

repassword.addEventListener('invalid', (event) => {
    if (event.target.validity.tooShort) {
        event.target.setCustomValidity('Password must be min 6 letters long');
    }
})

repassword.addEventListener('change', (event) => {
    event.target.setCustomValidity('');
});

function validatePassword() {
    console.log("working")
    if (password.value !== repassword.value) {
        console.log('confirm');
      repassword.setCustomValidity("Passwords don't match");
      return false;
    } else {
      repassword.setCustomValidity('');
        return true;
    }
  }
