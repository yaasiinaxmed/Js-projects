const password = document.querySelector('.password');
const Confirmpassword = document.querySelector('.Confirmpassword');
const showEye = document.querySelector('.bi-eye-fill');
const hiddenEye = document.querySelector('.bi-eye-slash-fill');
const form = document.querySelector('.form');


function showPass() {
    password.type = 'text', Confirmpassword.type = 'text';
    showEye.style.visibility = 'hidden';
    hiddenEye.style.visibility = 'visible';
}

function hiddenPass() {
    password.type = 'password' , Confirmpassword.type = 'password';
    showEye.style.visibility = 'visible';
    hiddenEye.style.visibility = 'hidden';
}

const checkPass = (input,min,max) => {
    
    if(input.value.length < min) {
        input.style.border = '1px solid brown';
    } 
    else if (input.value.length > max ) {
        input.style.border = '1px solid yellow';
    }
    else {
        input.style.border = '1px solid #0077ff';
    }
}

showEye.addEventListener('mousedown', showPass);
hiddenEye.addEventListener('mouseup', hiddenPass);

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    // if(password.value === "") {
    //     password.style.border = '1px solid green';
    // } else {
    //     password.style.border = '1px solid orange';
    // }

    checkPass(password,6,10);
    checkPass(Confirmpassword,6,10);
});

