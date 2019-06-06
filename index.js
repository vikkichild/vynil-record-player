"use strict"
var button = document.getElementsByClassName('button')[0];
var vinylRecord = document.getElementsByClassName('vinyl_record')[0];
var selector = document.getElementById('selector');

function rotation() {    
    if( vinylRecord.classList.length === 1){
        vinylRecord.classList.add("vinyl_record_animation");
        track = new Howl({
            src: [musicGenre(selector.value)]
        });
        track.play();
    }
    else {
        vinylRecord.classList.remove("vinyl_record_animation");
        track.pause();
    }
}

button.addEventListener("click", rotation);

var track = new Howl({
    src: [musicGenre(selector.value)],
    autoplay: false,
    loop: false,
    onend: function(){
        vinylRecord.classList.remove("vinyl_record_animation");
    }
});

function musicGenre(type) {
    var songs = {
        "chill": "chill.mp3",
        "party": "party.mp3",
        "relax": "relax.mp3"
    }
    return songs[type];
}
