const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const form = document.querySelector('#form');

const showError = (input,message) => {

    let parentELement = input.parentElement;
    parentELement.classList = 'form-control error';
    const small = parentELement.querySelector("small");
    const successIcon = parentELement.querySelectorAll("i")[0];
    const errorIcon = parentELement.querySelectorAll("i")[1];

    errorIcon.style.visibility = 'visible';
    successIcon.style.visibility = 'hidden';
    small.innerText = message;

}


const showSuccess = (input) => {

    let parentELement = input.parentElement;
    parentELement.classList = 'form-control success';
    const successIcon = parentELement.querySelectorAll("i")[0];
    const errorIcon = parentELement.querySelectorAll("i")[1];

    errorIcon.style.visibility = 'hidden';
    successIcon.style.visibility = 'visible';

}

const checkEmpty = (elements) => {

    elements.forEach( (element) => {
        if(element.value === ''){
            showError(element, 'Input required');
        }
        else{
            showSuccess(element);
        }
    });

}

const checkEmail = (email) => {
    const Reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(Reg.test(email.value)) {
        showSuccess(email);
    }
    else{
        showError(email, 'Invalid Email');
    }
}

const checkPassword = (input,min,max) => {
    if(input.value.length < min) {
        showError(input, `Password atlest ${min} charactor`);
    }
    else if(input.value.length > max) {
        showError(input, `Password maxmin ${max} charactor`);
    }
    else {
        showSuccess(input);
    }
}

const checkConfirmPassword = (password,confirmPassword) => {

    if(password.value !== confirmPassword.value) {
        showError(confirmPassword, 'Password is Not Match');
    }
}

form.addEventListener("submit", (event) => {

    event.preventDefault();

    checkEmpty( [email, password, confirmPassword] );
    checkEmail(email);

    checkPassword(password,6,10);
    checkPassword(confirmPassword,6,10);
    checkConfirmPassword(password,confirmPassword);

})