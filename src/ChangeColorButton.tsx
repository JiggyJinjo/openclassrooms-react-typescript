import React, { Component } from 'react';
import PropTypes, { Requireable } from 'prop-types';

type Props = {
  onClick: Function;
};

class ChangeColorButton extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { onClick } = this.props;
    onClick();
  }

  render() {
    return (
      <button type="button" onClick={this.handleClick}>
        Change the color
      </button>
    );
  }
}

export default ChangeColorButton;
