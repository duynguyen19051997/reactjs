import React from "react";
import "./Button.css";
import "../../App.css";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }

  handleSubmit = () => {
    this.setState({ number: parseInt(this.state.number) + 1 });
  };

  render() {
    return (
      <div className="Exercise">
        <button className="Exercise1" onClick={this.handleSubmit}>
          Hello {this.state.number}
        </button>
      </div>
    );
  }
}

export default Button;
