import React from "react";

import "./Note.css";

class Note extends React.Component {
  render() {
    return <h4>{this.props.children}</h4>;
  }
}

export default Note;
