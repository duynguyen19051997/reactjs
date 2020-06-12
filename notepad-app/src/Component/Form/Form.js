import React from "react";

import { Form, Button, Row, Col } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "../Form/Form.css";

class FormCustome extends React.Component {
  render() {
    return (
      <Form className="Form">
        <Row>
          <Col sm={10}>
            <Form.Group controlId="formBasicPassword">
              <Form.Control type="text" placeholder="Todo" />
            </Form.Group>
          </Col>
          <Col sm={2}>
            <Button variant="outline-warning" type="submit">
              Save
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default FormCustome;
