
var video, iconPlay, iconPause, cortimeText, dortimeText, SoMute, Somuted;

function intializePlayer() {
     video = document.querySelector('.video');
     iconPlay = document.querySelector('.bi-play-circle');
     iconPause = document.querySelector('.bi-pause-circle');
     SoMute = document.querySelector('.bi-volume-up-fill');
     Somuted = document.querySelector('.bi-volume-mute-fill');
     seekelider = document.querySelector('#seekelider');
     cortimeText = document.querySelector('#cortimeText');
     dortimeText = document.querySelector('#dortimeText');

    seekelider.addEventListener('change', vidSeek, false);
    video.addEventListener('timeupdate', seekTimeupdate, false);
}

window.onload = intializePlayer;

function vidPlay() {
  video.play();
  iconPlay.style.display = 'none';
  iconPause.style.display = 'block';
}

function vidPause() {
    video.pause();
    iconPause.style.display = 'none';
    iconPlay.style.display = 'block';
}

function vidMute() {
    SoMute.style.display = 'none';
    Somuted.style.display = 'block';
    // video.muted = true;
    video.volume = 0.5;
}

function vidMuted() {
    SoMute.style.display = 'block';
    Somuted.style.display = 'none';
    // video.muted = false;
    video.volume = 1.0;
}

function vidSeek(){
	var seekto = vid.duration * (seekslider.value / 100);
	video.currentTime = seekto;
}


function seekTimeupdate() {
    var nt = video.currentTime * (100 / video.duration);
	seekelider.value = nt;
	var curmins = Math.floor(video.currentTime / 60);
	var cursecs = Math.floor(video.currentTime - curmins * 60);
	var durmins = Math.floor(video.duration / 60);
	var dursecs = Math.floor(video.duration - durmins * 60);
	if(cursecs < 10){ cursecs = "0"+cursecs; }
	if(dursecs < 10){ dursecs = "0"+dursecs; }
	if(curmins < 10){ curmins = "0"+curmins; }
	if(durmins < 10){ durmins = "0"+durmins; }
	cortimeText.innerHTML = curmins+":"+cursecs;
	dortimeText.innerHTML = durmins+":"+dursecs;
}
