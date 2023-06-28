chrome.runtime.onStartup.addListener(() => {
  console.log(`[Jeopardy] Extension starting...`);
});

/**
 * Plays audio files from extension service workers
 * @param {string} source - path of the audio file
 * @param {number} volume - volume of the playback
 */
async function playSound(source = "default.wav", volume = 1) {
  await createOffscreen();
  await chrome.runtime.sendMessage({ play: { source, volume } });
}

async function stopSound() {
  await createOffscreen();
  await chrome.runtime.sendMessage({ stop: true });
}

/**
 * Create the offscreen document if it doesn't already exist
 */
async function createOffscreen() {
  if (await chrome.offscreen.hasDocument()) return;
  await chrome.offscreen.createDocument({
    url: "offscreen.html",
    reasons: ["AUDIO_PLAYBACK"],
    justification: "Playing sound for soundboard",
  });
}

chrome.commands.onCommand.addListener(function (command) {
  function soundFn(src) {
    return function () {
      playSound(src);
    };
  }

  console.log(`[Jeopardy] Keyboard command initiated...`);
  const SOUNDBOARD = {
    double: {
      exec: soundFn(
        "https://www.myinstants.com/media/sounds/jeopardy-daily-double.mp3"
      ),
    },
    right: {
      exec: soundFn("https://www.myinstants.com/media/sounds/rightanswer.mp3"),
    },
    wrong: {
      exec: soundFn("https://www.myinstants.com/media/sounds/times-up.mp3"),
    },
    intro: {
      exec: soundFn(
        "https://www.myinstants.com/media/sounds/jeopardy-intro.mp3"
      ),
    },
    outro: {
      exec: soundFn(
        "https://www.myinstants.com/media/sounds/jeopardy-outro-no-talking.mp3"
      ),
    },
    jeopardy: {
      exec: soundFn(
        "https://www.myinstants.com/media/sounds/jeopardy-theme-lowq.mp3"
      ),
    },
    board: {
      exec: soundFn(
        "https://www.myinstants.com/media/sounds/jeopardy-board.mp3"
      ),
    },
    stop: {
      exec: stopSound,
    },
  };

  if (Object.keys(SOUNDBOARD).includes(command)) {
    console.log(`[Jeopardy] Playing Sound 🔈`);
    SOUNDBOARD[command].exec();
  } else {
    console.log(
      `[Jeopardy] No relevant sound registered for command ${command}: :(`
    );
  }
});
