// videojs.plugin('listenForPlayButton', function() {
//   var player = this,
//      playVideo = function(evt){
//       if(evt.data === "playVideo"){
//         player.play();
//      }
//   };
//  window.addEventListener("message",playVideo);
// });

// videojs.plugin('listenForPlay', function(){
//     var player = this;
//     player.on('play', function(){
//         console.log(parent.location, "play");
//         parent.postMessage("videoPlayEvent", "*");
//     });
//     player.on('pause', function(){
//         console.log(parent.location, "pause");
//         parent.postMessage("videoPauseEvent", "*");
//     });
// });