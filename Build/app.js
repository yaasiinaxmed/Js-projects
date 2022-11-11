const campanyInfo = document.querySelectorAll(".campany-info");
const details = document.querySelectorAll(".details");
// const tabs = document.querySelectorAll("li");

campanyInfo.forEach ( ( info ) => {

    info.addEventListener("click", (e)=> {
        e.target.classList.add("btn-active");
        
        hideActiveTabs();
        e.target.classList.add("btn-active");

        let currentInfo = document.querySelector(e.target.getAttribute("target"));

        currentInfo.classList.add('active')

    })

})

function hideActiveTabs() {
    details.forEach( details => {
        details.classList.remove("active")
    })
    campanyInfo.forEach( info => {
        info.classList.remove('btn-active');
    })

}