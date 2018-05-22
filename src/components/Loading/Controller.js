import React, { Component } from 'react';

const C = Wrapper => class extends Component {
  render() {
    return (
      <Wrapper
        {...this.state}
        {...this.props}
      />
    )
  }
};

export default C;