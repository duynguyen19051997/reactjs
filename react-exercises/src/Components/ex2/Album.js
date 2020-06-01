import React from "react";
import "./Album.css";
import "../../App.css";

import {
  image_1,
  image_2,
  image_3,
  image_4,
  image_5,
  image_6,
  image_7,
} from ".././images/index";

class Album extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: this.array[this.array.length - 1],
      index: this.array.length - 1,
    };
  }

  array = [image_1, image_2, image_3, image_4, image_5, image_6, image_7];

  handleClickNext = (i) => {
    i += 1;
    if (i > this.array.length - 1) {
      i = 0;
    }
    this.setState({ img: this.array[i], index: i });
  };

  handleClickPrev = (i) => {
    i -= 1;
    if (i < 0) {
      i = this.array.length - 1;
    }
    this.setState({ img: this.array[i], index: i });
  };

  render() {
    return (
      <div className="Album Exercise">
        <img src={this.state.img} title="Change Image OnClick" />
        <br />
        <button
          onClick={() => {
            this.handleClickPrev(this.state.index);
          }}
        >
          Prev
        </button>
        <button
          onClick={() => {
            this.handleClickNext(this.state.index);
          }}
        >
          Next
        </button>
      </div>
    );
  }
}

export default Album;
