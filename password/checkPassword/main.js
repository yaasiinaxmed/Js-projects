const pwShow = document.querySelector('.show');
const createPw = document.querySelector('#createPw');
const confrimPw = document.querySelector('#confirmPw');
const btn = document.querySelector('#button');
const errorIcon = document.querySelector('.errorIcon');
const alertText = document.querySelector('.text');

// js show and hide password
pwShow.addEventListener('click', () => {
    if((createPw.type === "password") && (confrimPw.type === "password")) {
        createPw.type = 'text';
        confrimPw.type = 'text';
        pwShow.classList.replace("bi-eye-slash-fill", "bi-eye-fill")
    } else {
        createPw.type = 'password';
        confrimPw.type = 'password';
        pwShow.classList.replace("bi-eye-fill", "bi-eye-slash-fill")
    }
});

// js check password and confirm input field's 
const checkPw = (input,min,max) => {
    if(input.value.length < min) {
        errorIcon.style.display = 'block';
        alertText.textContent = '8 characters ayaad kayareysay';
        alertText.style.color = '#eb0c0c';
    } 
    else if(input.value.length > max) {
        errorIcon.style.dispaly = 'block';
        alertText.textContent = '12 characters ayaad kabadisay';
        alertText.style.color = '#eb0c0c';
    } 
    else {
        errorIcon.style.display = 'none';
        alertText.textContent = '8 characters waad la heshay';
        alertText.style.color = '#0077ff';
    }
};


btn.addEventListener('click', () => {

    checkPw(createPw,8,12);

    checkPw(confrimPw,8,12);
});