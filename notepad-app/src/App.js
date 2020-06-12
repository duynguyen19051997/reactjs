import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import List from "../src/Component/List/List";
import ButtonCustome from "../src/Component/Button/Button";
import FormCustome from "../src/Component/Form/Form";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Container className="main">
        <FormCustome />
        <List />
      </Container>
    );
  }
}

export default App;
