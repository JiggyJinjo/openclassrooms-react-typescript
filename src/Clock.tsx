import React, { Component } from 'react';

type State = {
  time: String;
};

class Clock extends Component<{}, State> {
  private intervalID: any;

  constructor(props: {}) {
    super(props);
    this.state = {
      time: new Date().toLocaleString(),
    };
    this.intervalID = null;
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.updateClock(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  updateClock() {
    this.setState({ time: new Date().toLocaleString() });
  }

  render() {
    const { time } = this.state;
    return (
      <p>
        the Time is
        {` ${time}`}
      </p>
    );
  }
}

export default Clock;
