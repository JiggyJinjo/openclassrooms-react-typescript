import React, { Component } from 'react';

type State = {
  foo: string;
};

class MyComponent extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      foo: 'Click me',
    };
  }

  handleClick(event: any) {
    this.setState({
      foo: 'bar',
    });
    console.log(event);
  }

  render() {
    const { foo } = this.state;
    return (
      <div>
        <label htmlFor="button">
          Click here
          <button onClick={this.handleClick} id="button" type="button">
            {foo}
          </button>
        </label>
      </div>
    );
  }
}

export default MyComponent;
