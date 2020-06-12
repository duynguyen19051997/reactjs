import React from "react";

import { ListGroup, Col, Row, Button } from "react-bootstrap";

import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Note/Note.css";

class Note extends React.Component {
  render() {
    return (
      <Row>
        <Col md={10}>
          <ListGroup.Item striped bordered hover action className="Note">
            {this.props.children}
          </ListGroup.Item>
        </Col>
        <Col className="Col-Custome" md={1}>
          <Button
            className="Button-Custome"
            title="Update"
            variant="outline-primary"
          >
            <i class="fa fa-pencil" aria-hidden="true"></i>
          </Button>
        </Col>
        <Col md={1}>
          <Button
            className="Button-Custome"
            title="Delete"
            variant="outline-danger"
          >
            <i class="fa fa-times" aria-hidden="true"></i>
          </Button>
        </Col>
      </Row>
    );
  }
}

export default Note;
