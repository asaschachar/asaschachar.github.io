console.log("[Jeopardy Soundboard] Starting...");
let audio;

function playSound(source) {
  // Stop existing sound
  if (audio) audio.pause();
  audio = new Audio(source);
  audio.volume = 1;
  audio.play();
}

function stopSound() {
  if (audio) audio.pause();
}

function soundFn(src) {
  return function () {
    playSound(src);
  };
}

const SOUNDBOARD = {
  d: soundFn(
    "https://www.myinstants.com/media/sounds/jeopardy-daily-double.mp3"
  ),
  r: soundFn("https://www.myinstants.com/media/sounds/rightanswer.mp3"),
  w: soundFn("https://www.myinstants.com/media/sounds/times-up.mp3"),
  i: soundFn("https://www.myinstants.com/media/sounds/jeopardy-intro.mp3"),
  o: soundFn(
    "https://www.myinstants.com/media/sounds/jeopardy-outro-no-talking.mp3"
  ),
  j: soundFn("https://www.myinstants.com/media/sounds/jeopardy-theme-lowq.mp3"),
  b: soundFn("https://www.myinstants.com/media/sounds/jeopardy-board.mp3"),
  s: stopSound,
};

document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.key !== "Control") {
    if (SOUNDBOARD[event.key]) {
      console.log("[Jeopardy Soundboard] Playing sound 🔊");
      SOUNDBOARD[event.key]();
    } else {
      console.log("[Jeopardy Soundboard] No sound registered :(");
    }
  }
});
