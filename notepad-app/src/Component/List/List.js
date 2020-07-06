import React from "react";

import { ListGroup } from "react-bootstrap";
import Note from "../Note/Note";

import "bootstrap/dist/css/bootstrap.min.css";
import "../List/List.css";

class List extends React.Component {
  render() {
    return (
      <ListGroup>
        {this.props.todos.map((val, index) => (
          <Note key={index}>{val.name}</Note>
        ))}
      </ListGroup>
    );
  }
}

export default List;
