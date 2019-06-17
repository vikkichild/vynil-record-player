(function () {
    "use strict"
    var button = document.getElementsByClassName('button')[0];
    var vinylRecord = document.getElementsByClassName('vinyl_record')[0];
    var selector = document.getElementById('selector');
    var track = new Howl({
        src: [getMusicGenre(selector.value)],
        autoplay: false,
        loop: false,
        onend: function () {
            vinylRecord.classList.remove("vinyl_record_animation");
        }
    });
    var timer;
    var initTime;
    var timerElemenent = document.getElementsByClassName('timer')[0];
    var selectorWarningText = document.getElementById('selector_warning_text');

    function toggleTrack() {
        initTime = new Date().getTime();
        if (track.playing()) {
            vinylRecord.classList.remove("vinyl_record_animation");
            track.pause();
            clearInterval(timer);
        } else {
            vinylRecord.classList.add("vinyl_record_animation");
            track.play();
            timer = setInterval(isTimer, 1)
        }
    }

    selector.addEventListener("change", selectTrack);
    button.addEventListener("click", isGenreSelected);

    function selectTrack() {
        track.stop();
        selectorWarningText.textContent = "";
        vinylRecord.classList.remove("vinyl_record_animation");
        track = new Howl({
            src: [getMusicGenre(selector.value)],
            autoplay: false,
            loop: false,
            onend: function () {
                vinylRecord.classList.remove("vinyl_record_animation");
            }
        });
    }

    function getMusicGenre(type) {
        var songs = {
            "chill": "music/chill.mp3",
            "party": "music/party.mp3",
            "relax": "music/relax.mp3"
        }
        return songs[type];
    }

    function isTimer() {
        var time = new Date().getTime() - initTime;
        var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((time % (1000 * 60)) / 1000);
        var milliseconds = Math.floor((time % (1000)));
        timerElemenent.innerHTML = minutes + " : " + seconds + " : " + milliseconds;
    }

    function isGenreSelected() {
        if(selector.value === ""){
            selectorWarningText.textContent = "Please, choose genre!";
        } else toggleTrack();
    }
    /*TODO fix timer zeroing on pause
    мобильный дизайн
    скорретировать css изображения*/
}());