import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import List from "../src/Component/List/List";
import FormCustome from "../src/Component/Form/Form";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [{ name: "Coding" }],
    };
  }

  handleAddNote = (text) => {
    this.state.todos.push({ name: text });
    this.setState(this.state.todos);
  };

  render() {
    return (
      <Container className="main">
        <FormCustome action={this.handleAddNote} />
        <List todos={this.state.todos} />
      </Container>
    );
  }
}

export default App;
