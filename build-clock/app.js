// clock 
// variables
const hourHand = document.getElementById('hour');
const minuteHand = document.getElementById('minute');
const secondHand = document.getElementById('second');

// function clock
function setTime() {
 
    const currentDate = new Date();
    const secondRatio = currentDate.getSeconds() / 60;
    const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
    const hourRatio = (minuteRatio + currentDate.getHours()) / 12;

    wareegSamee(secondHand, secondRatio);
    wareegSamee(minuteHand, minuteRatio);
    wareegSamee(hourHand, hourRatio);

}

function wareegSamee(element, rotationRation) {
    element.style.setProperty('--wareeg', rotationRation *360)
}
setTime();
setInterval(setTime, 1000)
   
// buttons 
// varaibles
const btnOne = document.getElementById('button1');
const btnTwo = document.getElementById('button2');
const btnThree = document.getElementById('button1');
const btnFour = document.getElementById('button2');
const clock = document.querySelector('.clock');
const buttons = document.querySelectorAll('button');

// badal node list unabadal array
const buttonArray = Array.from(buttons);

const colors = ['#c54242', '#007fff', '#edf0f2', '#ffe100'];


/* EventListeners */
// buttonArray[1].addEventListener('click', changeToOrange);
// buttonArray[1].addEventListener('click', changeToRed);
// buttonArray[2].addEventListener('click', changeToGrey);
// buttonArray[3].addEventListener('click', changeToYellow);

/* functions */
// function changeToOrange(){
//     clock.style.background = colors[0];
// }

// function changeToRed(){
//     clock.style.background = colors[1];
// }

// function changeToGrey(){
//     clock.style.background = colors[2];
// }

// function changeToYellow(){
//     clock.style.background = colors[3];
// }

buttonArray[0].addEventListener('click', (changeToOrange) => {
    clock.style.background = colors[0];
});

buttonArray[1].addEventListener('click', (changeToRed) => {
    clock.style.background = colors[1];
});

buttonArray[2].addEventListener('click', (changeToGrey) => {
    clock.style.background = colors[2];
});

buttonArray[3].addEventListener('click', (changeToYellow) => {
    clock.style.background = colors[3];
});