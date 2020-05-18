import React from 'react';
import '../App.css';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOn: true };
    this.clickButton = this.clickButton.bind(this);
  }

  clickButton(props) {
    this.setState((prevState) => ({
      isOn: !prevState.isOn,
    }));
    alert(props.info);
  }

  // clickButton = (props) => {
  //   this.setState((prevState) => ({
  //     isOn: !prevState.isOn,
  //   }));
  //   alert(props.info);
  // }

  render() {
    return (
      <div>
        <button className="Toggle" onClick={() => { this.clickButton(this.props) }}>
          Status: {this.state.isOn ? " ON" : " OFF"}
        </button>
      </div>
    );
  }
}

export default Toggle;
