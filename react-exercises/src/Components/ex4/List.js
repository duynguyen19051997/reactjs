import React from "react";

import Note from "./Note";

import "../../App.css";
import "./List.css";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = { animals: ["Dog", "Cat", "Tiger", "Lion"] };
  }

  add = () => {
    this.state.animals.push("Duy");
    this.setState(this.state);
  };

  delete = () => {
    this.state.animals.pop();
    this.setState(this.state);
  };

  render() {
    return (
      <div className="Exercise">
        <button onClick={this.add}>Add</button>
        <button onClick={this.delete}>Delete</button>
        {this.state.animals.map((val, index) => (
          <Note key={index}>{val}</Note>
        ))}
      </div>
    );
  }
}

export default List;
