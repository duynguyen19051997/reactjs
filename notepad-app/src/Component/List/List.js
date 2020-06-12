import React from "react";

import { ListGroup } from "react-bootstrap";
import Note from "../Note/Note";

import "bootstrap/dist/css/bootstrap.min.css";
import "../List/List.css";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ name: "Football" }, { name: "Coding" }, { name: "Java" }],
    };
  }
  render() {
    return (
      <ListGroup className="List">
        {this.state.todos.map((val, index) => (
          <Note key={index}>{val.name}</Note>
        ))}
      </ListGroup>
    );
  }
}

export default List;
