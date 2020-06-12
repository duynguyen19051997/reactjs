import React from "react";

import { ListGroup } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "../Note/Note.css";

class Note extends React.Component {
  render() {
    return (
      <ListGroup.Item action variant="success" className="Note">
        {this.props.children}
      </ListGroup.Item>
    );
  }
}

export default Note;
