var button = document.getElementsByClassName('button')[0];
var vinylRecord = document.getElementsByClassName('vinyl_record')[0];

function rotation() {    
    if( vinylRecord.classList.length === 1){
        vinylRecord.classList.add("vinyl_record_animation");
        track.play();
    }
    else {
        vinylRecord.classList.remove("vinyl_record_animation");
        track.pause();
    }
}

button.addEventListener("click", rotation);

var track = new Howl({
    src: ["Wake Owl -  Gold.mp3"],
    autoplay: false,
    loop: false,
    onend: function(){
        vinylRecord.classList.remove("vinyl_record_animation");
    }
});