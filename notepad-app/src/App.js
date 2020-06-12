import React from "react";

import { Container, Button, Row, Col, Form } from "react-bootstrap";
import List from "../src/Component/List/List";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Container fluid="sm" className="main">
      <Row>
        <Col>
          <Button className="Row" variant="warning">
            +
          </Button>
        </Col>
      </Row>
      <Form className="Form">
        <Form.Group controlId="formBasicPassword">
          <Form.Control type="text" placeholder="Todo" />
        </Form.Group>
        <Button className="Button" variant="warning" type="submit">
          Save
        </Button>
      </Form>
      <List></List>
    </Container>
  );
}

export default App;
