var button = document.getElementsByClassName('button')[0];
var vinylRecord = document.getElementsByClassName('vinyl_record')[0];

function rotation() {
    vinylRecord.classList.toggle("vinyl_record_animation");
}

button.addEventListener("click", rotation);