// videojs.plugin('listenForPlayButton', function() {
//   var player = this,
//      playVideo = function(evt){
//       if(evt.data === "playVideo"){
//         player.play();
//      }
//   };
//  window.addEventListener("message",playVideo);
// });
var consolere = {
channel:'try-3c69-8e7f-5665',
api:'//console.re/connector.js',
ready: function(c) {var d=document,s=d.createElement('script'),l;s.src=this.api;s.id='consolerescript';s.onreadystatechange=s.onload=function(){if(!l){c();}l=true;};d.getElementsByTagName('head')[0].appendChild(s);}};

consolere.ready({ console.re.log('remote log test'); });


videojs.plugin('listenForPlay', function(){
    var player = this;
    player.on('play', function(){
        console.log(parent.location, "play");
        parent.postMessage("videoPlayEvent", "*");
    });
    player.on('pause', function(){
        console.log(parent.location, "pause");
        parent.postMessage("videoPauseEvent", "*");
    });
});