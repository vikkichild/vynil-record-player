"use strict"
var button = document.getElementsByClassName('button')[0];
var vinylRecord = document.getElementsByClassName('vinyl_record')[0];
var selector = document.getElementById('selector');
var track = new Howl({
    src: [getMusicGenre(selector.value)],
    autoplay: false,
    loop: false,
    onend: function(){
        vinylRecord.classList.remove("vinyl_record_animation");
    }
});
var timer;
var initTime;

function classCheck(){
    for( var i=0; i < vinylRecord.classList.length; i++){
        if( vinylRecord.classList[i] === "vinyl_record_animation"){
            return true;
        }
    }
    return false;
}

function rotation(){
    initTime = new Date().getTime();
    if( !classCheck()){
        vinylRecord.classList.add("vinyl_record_animation");
        track.play();
        timer = setInterval(isTimer, 1)
    }
    else {
        vinylRecord.classList.remove("vinyl_record_animation");
        track.pause();
        clearInterval(timer);
    }
}

selector.addEventListener("change", selectTrack);
button.addEventListener("click", rotation);

function selectTrack(){
    track.stop();
    vinylRecord.classList.remove("vinyl_record_animation");
    track = new Howl({
        src: [getMusicGenre(selector.value)],
        autoplay: false,
        loop: false,
        onend: function(){
        vinylRecord.classList.remove("vinyl_record_animation");
        }
    });
}

function getMusicGenre(type) {
    var songs = {
        "chill": "chill.mp3",
        "party": "party.mp3",
        "relax": "relax.mp3"
    }
    return songs[type];
}

function isTimer() {
    var time = new Date().getTime() - initTime;
    var minutes = Math.floor((time  % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((time  % (1000 * 60)) / 1000);
    var milliseconds = Math.floor((time  % (1000)));
    
    document.getElementsByClassName("timer")[0].innerHTML = minutes + " : " + seconds + " : " + milliseconds;
}
//TODO fix timer xeroing on pause