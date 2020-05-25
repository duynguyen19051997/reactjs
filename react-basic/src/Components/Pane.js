import React from 'react';


class Pane extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
        {this.props.up}
      </div>
    );
  }
}

export default Pane;
