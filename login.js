
const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener('submit', (Event) => {
    Event.preventDefault();
    validate();
})
const validate = () => {
    const passwordval = password.value;
    const emailval = email.value;
    if (passwordval == "") {
        setErrorMsg(password, 'password cannot be blank');

    }
    else if (passwordval.length > 8) {
        setErrorMsg(password, 'password cannot be greater than 8  chracters');

    }
    else {

        setSuccessMsg(password, 'valid password');

    }
    if (emailval == "") {
        setErrorMsg(email, 'email cannot be blank');

    }
    else if (emailval > 16) {
        setErrorMsg(emailval, 'email invalid');

    }
    else {

        setSuccessMsg(email, 'Valid email');

    }
    function setErrorMsg(input, errormsgs) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        small.innerText = errormsgs;
        formControl.className = 'form-control error';

    }
    function setSuccessMsg(input, sucesrmsgs) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        small.innerText = sucesrmsgs;
        formControl.className = 'form-control sucess';
    }
}




