import React from "react";

import { Button } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "../Button/Button.css";

class ButtonCustome extends React.Component {
  render() {
    return (
      <Button className="Button" variant="warning">
        +
      </Button>
    );
  }
}

export default ButtonCustome;
