// Listen for messages from the extension
chrome.runtime.onMessage.addListener((msg) => {
  if ("play" in msg) playAudio(msg.play);
  if ("stop" in msg) stopAudio();
});

let audio;

// Play sound with access to DOM APIs
function playAudio({ source, volume }) {
  // Stop existing sound
  if (audio) audio.pause();
  audio = new Audio(source);
  audio.volume = volume;
  audio.play();
}

function stopAudio() {
  if (audio) audio.pause();
}
