
let vimeoPlayer;
const btnPlayPause = document.getElementById('btnPlayPause');


function onVimeoPlayerAPIReady() {
  vimeoPlayer = new Vimeo.Player('videoPlayer');
}


btnPlayPause.addEventListener('click', function() {
  vimeoPlayer.getPaused().then(function(paused) {
    if (paused) {
      vimeoPlayer.play();
      btnPlayPause.textContent = 'Pausar';
    } else {
      vimeoPlayer.pause();
      btnPlayPause.textContent = 'Reproducir';
    }
  });
});