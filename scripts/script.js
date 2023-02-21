var audio = document.getElementById("myAudio");
audio.volume = 0.5; // set the volume to 50%

function playAudio() {
    audio.play();
}

document.addEventListener("click", function () {
    playAudio();
    document.removeEventListener("click", arguments.callee);
});