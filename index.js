var button = document.getElementsByClassName('button')[0];
var vinylRecord = document.getElementsByClassName('vinyl_record')[0];

button.onclick = function rotation() {
    vinylRecord.classList.toggle('move');
}
