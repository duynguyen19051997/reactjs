import React from "react";
import "./Button.css";

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
      <div>
        <button className="Exercise1" onClick={this.handleSubmit}>
          Hello {this.state.number}
        </button>
      </div>
    );
  }
}

export default Button;
