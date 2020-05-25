import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalStudent: parseInt(this.props.totalStudent),
      info: "Nguyen Vu Anh Duy",
    };
  }

  handleClick = () => {
    //this.state.totalStudent += 1;
    this.setState({ totalStudent: this.state.totalStudent + 1 });
  }

  render() {
    return <div>
      <h2>Total Student: {this.state.totalStudent}</h2>
      <h2>Information: {this.state.info}</h2>
      <button type="submit" onClick={this.handleClick}>Add Student</button>
    </div>
  }
}

export default Button;
