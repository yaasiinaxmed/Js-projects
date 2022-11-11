const toggle = document.getElementById('toggle');
const body = document.querySelector('.container');

toggle.addEventListener('click', function(){
    body.classList.toggle('dark');
})
