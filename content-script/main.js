var player;
var volume = 0; 
var state = null;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: 'gPDcwjJ8pLg',
    events: {
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  player.setVolume(volume);
  event.target.playVideo();
  fadeIn();
}

function fadeIn() {
  setInterval(function(){ if(!state) { changeVolume(1) , 10 * 10 }});
}

function fadeOut() {
  setInterval(function(){ if(state) { changeVolume(0) , 10 * 10 }});
}

function changeVolume(i) {
  if(i) {
  player.setVolume(player.getVolume() + 1);
  } else {
    player.setVolume(player.getVolume() - 1);
  }
}

$('a').click(function(e) {
  e.preventDefault();
  state = 1;
  fadeOut(); 
});

