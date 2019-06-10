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

function classCheck(){
    for( var i=0; i < vinylRecord.classList.length; i++){
        if( vinylRecord.classList[i] === "vinyl_record_animation"){
            return true;
        }
    }
    return false;
}

function rotation(){
    if( !classCheck){
        vinylRecord.classList.add("vinyl_record_animation");
        track.play();
    }
    else {
        vinylRecord.classList.remove("vinyl_record_animation");
        track.pause();
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


// var timer = setInterval(function() {
//     var initTime = new Date().getTime();
//     var minutes = Math.floor((initTime  % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((initTime  % (1000 * 60)) / 1000);
//     var milliseconds = Math.floor((initTime  % (1000)));
    
//     document.getElementsByClassName("timer")[0].innerHTML = minutes + " : " + seconds + " : " + milliseconds;
// }, 1)
// TODO вынести initTime (время по нажатию по кнопке) вне функции и вычитать из текущего времени