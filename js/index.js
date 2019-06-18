var VinylRecordModule = (function () {
    "use strict";

    var button = document.getElementsByClassName('button')[0];
    var vinylRecord = document.getElementsByClassName('vinyl_record')[0];
    var selector = document.getElementById('selector');
    var timerElemenent = document.getElementsByClassName('timer')[0];
    var selectorWarningText = document.getElementById('selector_warning_text');
    var timer;
    var initTime;
    var playTime;
    var track;

    function toggleTrack() {
        if (track.playing()) {
            vinylRecord.classList.remove("vinyl_record_animation");
            track.pause();

        } else {
            vinylRecord.classList.add("vinyl_record_animation");
            track.play();

        }
    }

    selector.addEventListener("change", selectTrack);
    button.addEventListener("click", isGenreSelected);

    function selectTrack() {
        if (track) {
            track.stop();
            initTime = 0;
            clearInterval(timer);
            timerElemenent.innerHTML = "00:00:000";
        }
        selectorWarningText.textContent = "";
        vinylRecord.classList.remove("vinyl_record_animation");
        track = new Howl({
            src: [getMusicGenre(selector.value)],
            autoplay: false,
            loop: false,
            onplay: function () {
                if (!initTime) {
                    initTime = new Date().getTime();
                } else {
                    initTime = new Date().getTime() - playTime;
                };
                timer = setInterval(updateTimer, 1);
            },
            onpause: function () {
                clearInterval(timer);
            },
            onend: function () {
                vinylRecord.classList.remove("vinyl_record_animation");
                initTime = 0;
                clearInterval(timer);
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

    function updateTimer() {
        playTime = new Date().getTime() - initTime;
        var minutes = Math.floor((playTime % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((playTime % (1000 * 60)) / 1000);
        var milliseconds = Math.floor((playTime % (1000)));
        timerElemenent.innerHTML = minutes + " : " + seconds + " : " + milliseconds;
    }

    function isGenreSelected() {
        if (selector.value) {
            toggleTrack();
        } else {
            selectorWarningText.textContent = "Please, choose genre!";
        }
    }
    //TODO мобильный дизайн
});

document.addEventListener("DOMContentLoaded", VinylRecordModule);