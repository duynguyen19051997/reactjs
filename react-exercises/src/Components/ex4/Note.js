import React from "react";

import "./Note.css";

class Note extends React.Component {
  render() {
    return <li>{this.props.children}</li>;
  }
}

export default Note;
