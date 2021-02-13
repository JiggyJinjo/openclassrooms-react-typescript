import React, { Component } from 'react';
import ChangeColorButton from './ChangeColorButton';
type State = {
  backgroundColor: string;
};

class ColorBlock extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.changeColor = this.changeColor.bind(this);
    this.state = {
      backgroundColor: 'red',
    };
  }

  changeColor() {
    this.setState((prevState) => {
      const { backgroundColor } = prevState;
      const newColor = backgroundColor === 'red' ? 'blue' : 'red';
      return {
        backgroundColor: newColor,
      };
    });
  }

  render() {
    const { backgroundColor } = this.state;
    return (
      <div style={{ width: '200px', height: '200px', backgroundColor }}>
        <ChangeColorButton onClick={this.changeColor} />
      </div>
    );
  }
}

export default ColorBlock;
