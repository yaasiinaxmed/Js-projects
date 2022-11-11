const btnEl = document.querySelector('.btn');

btnEl.addEventListener("mouseover", (event) => {
    const x = (event.pageX - btnEl.offsetLeft);
    const y = (event.pageY - btnEl.offsetTop);

    btnEl.style.setProperty("--xPos", x + "px")
    btnEl.style.setProperty("--yPos", y + "px")
});

const btntwo = document.querySelector('.btn-2');

btntwo.addEventListener('mouseover', (event) => {
    const x = (event.pageX - btntwo.offsetLeft);
    const y = (event.pageY - btntwo.offsetTop);

    btntwo.style.setProperty("--xPos", x + "px")
    btntwo.style.setProperty("--yPos", y + "px")
})