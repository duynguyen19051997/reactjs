import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  incrementCounter() {
    this.setState(
      (prevState, props) => ({
        seconds: prevState.seconds + 1
      })
    );
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.incrementCounter(), 1000);
  }

  componentWilUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <h1>Counter: {this.state.seconds} s</h1>
      </div>
    );
  }

}

export default Counter;
