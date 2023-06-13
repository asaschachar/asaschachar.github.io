"use strict";

const SOUND_BOARD = {
  Jeopardy: [
    {
      file: "jp-intro.mp3",
      label: "Intro",
    },
  ],
};

const e = React.createElement;

class Soundboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return "You liked this.";
    }

    return e(
      "button",
      { onClick: () => this.setState({ liked: true }) },
      "Like"
    );
  }
}

const domContainer = document.querySelector("#soundboard_container");
const root = ReactDOM.createRoot(domContainer);
root.render(e(Soundboard));
