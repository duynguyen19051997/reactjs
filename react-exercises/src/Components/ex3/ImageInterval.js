import React from "react";

import "../../App.css";
import "../ex3/ImageInterval.css";

import {
  image_1,
  image_2,
  image_3,
  image_4,
  image_5,
  image_6,
  image_7,
} from ".././images/index";

class ImageInterval extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: this.array[this.array.length - 1],
      index: this.array.length - 1,
    };
  }

  array = [image_1, image_2, image_3, image_4, image_5, image_6, image_7];

  changeImage = (i) => {
    i += 1;
    if (i > this.array.length - 1) {
      i = 0;
    }
    this.setState({ img: this.array[i], index: i });
  };

  componentDidMount = () => {
    this.timmerID = setInterval(() => this.changeImage(this.state.index), 1000);
  };
  componentWillUnmount = () => {
    clearInterval(this.timmerID);
  };

  render() {
    return (
      <div className="Exercise">
        <img
          className="Image"
          src={this.state.img}
          title="Change Image Interval"
        />
      </div>
    );
  }
}

export default ImageInterval;
