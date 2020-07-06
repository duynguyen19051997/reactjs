import React from "react";

import { Form, Button, Row, Col } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "../Form/Form.css";

class FormCustome extends React.Component {
  render() {
    return (
      <Form
        className="Form"
        onSubmit={() => {
          this.props.action(this.refs.todo.value);
        }}
      >
        <Row>
          <Col sm={10}>
            <Form.Group>
              <Form.Control ref="todo" type="text" placeholder="Todo" />
            </Form.Group>
          </Col>
          <Col sm={2}>
            <Button variant="outline-warning" type="submit">
              Add
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default FormCustome;
