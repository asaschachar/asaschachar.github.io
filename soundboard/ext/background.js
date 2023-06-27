importScripts("./lib/howler.js");

chrome.runtime.onStartup.addListener(() => {
  console.log(`[Jeopardy] Extension starting...`);
});

chrome.commands.onCommand.addListener(function (command) {
  function soundFn(src) {
    const sound = new Howl({
      src: [src],
    });
    return function () {
      sound.play();
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
      exec: Howler.stop,
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

function savePage() {
  // Replace this with your desired code logic for saving the page
  console.log("Page saved!");
}
