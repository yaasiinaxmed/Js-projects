let dynamicIMG = document.getElementById('dynamicIMG');
let sax = document.getElementById('sax');
let qalad = document.getElementById('qalad');

const dynamicIMGs =  ["biixi1.png", "farmajo.png", "geelle.png", "cirro.png", "xasan.png",]

function kuCelceli() {
    let takeRandom = Math.floor((Math.random() * dynamicIMGs.length))
    dynamicIMG.style.backgroundImage = `url("./img/${dynamicIMGs[takeRandom]}")`
}

let theTimer = setInterval(kuCelceli, 100);

const marKaleBilow = () => {
    setTimeout(function () {
        theTimer = setInterval(kuCelceli, 100);
        document.getElementById('btn').disabled = false;
        document.getElementById('btn').style.opacity = '100%'
    }, 2000)
}

let saxday = 0;
let qaladay = 0;

const istaag = () => {
    if (dynamicIMG.style.backgroundImage === `url("./img/${dynamicIMGs[0]}")`) {
        saxday++;
        sax.innerText = saxday;
        clearInterval(theTimer)

        document.getElementById('btn').disabled = true;
        document.getElementById('btn').style.opacity = '50%'

        marKaleBilow();

    } else {
        qaladay++;
        qalad.innerText = qaladay;
        clearInterval(theTimer)

        document.getElementById('btn').disabled = true;
        document.getElementById('btn').style.opacity = '50%'

        marKaleBilow();

    }
}