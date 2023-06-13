const sounds = {
  Jeopardy: [
    {
      file: "jp-intro.mp3",
      label: "📺 Intro",
    },
  ],
};

function createSoundboard(soundList) {
  for (const [category, sounds] of Object.entries(soundList)) {
    let buttonList = sounds.map((sound) => {});
  }
}

createSoundboard(sounds);

/**
 * Howler code
 */

/*
const mp3Sounds = [
  "1-st",
  "ahh",
  "aww-2",
  "aww",
  "clap-short-2",
  "clap-short-3",
  "clap-short",
  "booing-3",
  "drum",
  "laugh-2",
  "laugh-3",
  "laugh-4",
  "laugh-a",
  "laugh",
  "ohh",
  "badumtssA2",
  "jeopardy2020",
  "airhorn",

  "angry-2",
  "angry-3",
  "angry",
  "booing-2",
  "booing",
  "cheer-clap-2",
  "cheer-clap",
  "clap-2",
  "clap-3",
  "clap-cheer-2",
  "clap-cheer",
  "clap-long-2",
  "clap-long",
  "clap-loud",
  "clap-slow-2",
  "clap-slow",
  "clap",
  "countdown",
  "laugh-long-2",
  "laugh-long",
  "yay",
  "trombone",

  "wwtbam-main-theme",
  "wwtbam-commerical-break",
  "wwtbam-lets-play",
  "wwtbam-1-100-1000-music",
  "wwtbam-2-2000-32000",
  "wwtbam-3-64000-music",
  "wwtbam-4-250000-music",
  "wwtbam-5-500000-music",
  "wwtbam-6-1000000-music",
  "wwtbam-final-answer",
  "wwtbam-correct-answer",
  "wwtbam-wrong-answer",

  "ff-ring-in",
  "ff-correct",
  "ff-strike",
];

const oggSounds = [];

const m4aSounds = [
  "24countdown",
  "bulls",
  "waiting",

  "wwtbam-phone-a-friend",
  "wwtbam-poll",

  "ff-theme-song",
  "ff-walk-up",
  "ff-after-steal",
];

jQuery(document).ready(function () {
  const howlerList = {};

  for (var i = mp3Sounds.length - 1; i >= 0; i--) {
    howlerList[mp3Sounds[i]] = new Howl({
      src: ["audio/" + mp3Sounds[i] + ".mp3"],
    });

    jQuery("#" + mp3Sounds[i]).click(function () {
      Object.keys(howlerList).forEach(function (key) {
        howlerList[key].stop();
      });

      howlerList[jQuery(this).attr("id")].play();
    });
  }

  for (var i = oggSounds.length - 1; i >= 0; i--) {
    howlerList[oggSounds[i]] = new Howl({
      src: ["audio/" + oggSounds[i] + ".ogg"],
    });

    jQuery("#" + oggSounds[i]).click(function () {
      Object.keys(howlerList).forEach(function (key) {
        howlerList[key].stop();
      });

      howlerList[jQuery(this).attr("id")].play();
    });
  }

  for (var i = m4aSounds.length - 1; i >= 0; i--) {
    howlerList[m4aSounds[i]] = new Howl({
      src: ["audio/" + m4aSounds[i] + ".m4a"],
    });

    jQuery("#" + m4aSounds[i]).click(function () {
      Object.keys(howlerList).forEach(function (key) {
        howlerList[key].stop();
      });

      howlerList[jQuery(this).attr("id")].play();
    });
  }
});*/
