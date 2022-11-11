
function switchColors() {
    if (currentNumber < 0) {
        countNumber.style.color = "red";
    }
    else if (currentNumber > 0) {
        countNumber.style.color = 'orange';
    }
    else {
        countNumber.style.color = 'white';
    }
}

let countNumber = document.querySelector('.number'),
    buttons = document.querySelectorAll('button'),
    currentNumber = localStorage.getItem('ourOldData');

    countNumber.textContent = currentNumber;


for (const button of buttons) {
    
    button.addEventListener('click', () => {
        let clickedButton = button.textContent;
        
        if(clickedButton.includes("increase")) {
            currentNumber++
        }else if (clickedButton.includes('decrease')) {
            currentNumber--
        }
        else {
            currentNumber=0
        }
      
        countNumber.textContent = currentNumber;

        switchColors();

        localStorage.setItem("ourOldData",currentNumber)
    
    })

    switchColors();
}
