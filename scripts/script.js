var audio = document.getElementById("paul");
var shepard = document.getElementById("shepard")
audio.volume = 1; // set the volume to 50%
shepard.volume = .25;

function playAudio() {
    audio.play();
    shepard.play()
}

document.addEventListener("click", function () {
    playAudio();
    document.removeEventListener("click", arguments.callee);
});