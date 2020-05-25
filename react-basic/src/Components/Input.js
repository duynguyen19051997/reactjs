import React from 'react';

class Input extends React.Component {

  handleClick = () => {
    alert(this.refs.input.value + " " + this.refs.select.value);

  }

  render() {
    return (
      <div>
        <select ref="select">
          <option value="1">Anh Duy</option>
          <option value="2">Khanh Linh</option>
        </select>
        <input type="text" ref="input" />
        <input type="submit" onClick={this.handleClick} />
      </div>
    );
  }
}

export default Input;
