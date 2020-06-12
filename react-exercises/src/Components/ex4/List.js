import React from "react";

import Note from "./Note";

import "../../App.css";
import "./List.css";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = { animals: [] };
  }

  add = () => {
    this.state.animals.push(this.refs.animal.value);
    this.setState(this.state);
  };

  delete = () => {
    let pos = this.state.animals.indexOf(this.refs.animal.value);
    this.state.animals.splice(pos, 1);
    this.setState(this.state.animals);
  };

  render() {
    return (
      <div className="Exercise">
        <table className="Table">
          <tr>
            <td>
              <input type="text" ref="animal" />
            </td>
          </tr>
          <tr>
            <td>
              <button className="Button" onClick={this.add}>
                Add
              </button>
              <button className="Button" onClick={this.delete}>
                Delete
              </button>
            </td>
          </tr>
        </table>
        <ul>
          {this.state.animals.map((val, index) => (
            <Note key={index}>{val}</Note>
          ))}
        </ul>
      </div>
    );
  }
}

export default List;
