videojs.plugin('listenForPlayButton', function() {
  var player = this,
     playVideo = function(evt){
      if(evt.data === "playVideo"){
        player.play();
     }
  };
 window.addEventListener("message",playVideo);
});

videojs.ready(function() {
  var myPlayer = this,
    bclsLog = document.getElementById('bclsLog');
    myPlayer.on('fullscreenchange', function(evt) {
    if (myPlayer.isFullscreen()) {
      // log the event
      bclsLog.innerHTML += '<p class="bcls-red">Fullscreen on at ' + myPlayer.currentTime() + ' seconds</p>';
    } else {
      // log the event
      bclsLog.innerHTML += '<p class="bcls-green">Fullscreen off at ' + myPlayer.currentTime() + ' seconds</p>';
    }
  });
});