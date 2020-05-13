import React from 'react';

export const getName = (name) => {
  alert(name)
}

class Button extends React.Component {

  getInfor = (infor) => {
    alert(infor);
  }

  render() {
    return <div>
      <h2 onClick={() => this.getInfor(this.props.infor)}>{this.props.name}</h2>
      <p onClick={() => getName('Duy')}> Here </p>
    </div>
  }
}

export default Button;
