const audio = document.querySelector("audio"),
      containerSurahs = document.querySelector(".container-surahs"),
      next = document.querySelector(".next"),
      prev = document.querySelector(".prev"),
      play = document.querySelector(".play"),
      ayah = document.querySelector(".Ayah"),
      scroll = document.querySelector(".scrollTop");

getSurahs();

function getSurahs() {
    fetch('https://api.quran.gading.dev/surah')
    .then(response => response.json())
    .then(data => {
        for (let surah in data.data) {

            containerSurahs.innerHTML += 
            `
             <div>
                <p>${data.data[surah].name.long}</p>
                <p>${data.data[surah].name.transliteration.en}</p>
             </div>

            `
        }

      let  allSurhs = document.querySelectorAll(".container-surahs div"),
      ayahsAudios,
      ayahsText;

        allSurhs.forEach( (surah,index) => {
            surah.addEventListener('click',() => {
                fetch(`https://api.quran.gading.dev/surah/${index + 1}`)
                .then(response => response.json())
                .then(data => {
                   let verses = data.data.verses;
                   ayahsAudios = [];
                   ayahsText = [];
                   surahAudios = [];
                    verses.forEach(verse => {
                      ayahsAudios.push(verse.audio.primary);
                      ayahsText.push(verse.text.arab);
                    })

                    let indexAyah = 0;
                    changeAyah(indexAyah);

                    audio.addEventListener("ended", () => {
                       indexAyah < ayahsAudios.length - 1 ? indexAyah++ : indexAyah = 0;
                        changeAyah(indexAyah);
                        audio.play();
                        TogglePlay();
                    })

                    next.addEventListener("click", () => {
                       indexAyah < ayahsAudios.length - 1 ? indexAyah++ : indexAyah = 0;
                       changeAyah(indexAyah);
                       audio.play();
                       TogglePlay();
                       isPlaying = false;
                    })

                    prev.addEventListener("click", () => {
                        indexAyah = 0  ? indexAyah = ayahsAudios.length -1 : 
                        indexAyah--;
                        changeAyah(indexAyah);
                        audio.play();
                        TogglePlay();
                        isPlaying = false;
                    })

                    isPlaying = false; 
                    TogglePlay();

                    function TogglePlay() {
                        if(isPlaying) {
                            audio.pause();
                            play.innerHTML = '<i class="fa fa-play"></i>'
                            isPlaying = false;
                        }
                        else {
                            audio.play();
                            play.innerHTML = '<i class="fa fa-pause"></i>'
                            isPlaying = true;
                        }
                    }

                    play.addEventListener("click", TogglePlay)

                    function changeAyah(index) {
                       audio.src = ayahsAudios[index];
                       ayah.innerHTML = ayahsText[index]
                    }
                })
            })
        })          
   
    })

}

window.addEventListener("scroll", () => {
    scroll.classList.toggle("active", window.scrollY > 700 )
})

scroll.addEventListener("click", () => {
    scrollTo({
        top: 0,
        behavior: "smooth" 
    })
})