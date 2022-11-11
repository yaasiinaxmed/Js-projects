const  password = document.querySelector('#password');
const btnpass = document.querySelector('#btn');

function showPass() {
    password.type = 'text';
    btnpass.textContent = 'hidden';
}

function hiddenPass() {
    password.type = 'password';
    btnpass.textContent = 'show';
}

btnpass.addEventListener('mousedown', showPass);
btnpass.addEventListener('mouseup', hiddenPass);
