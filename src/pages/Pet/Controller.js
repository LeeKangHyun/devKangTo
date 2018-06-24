import React, { Component } from 'react';

const C = Wrapper => class extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
    }
  }
  
  render() {
    return (
      <Wrapper
        {...this.props}
        {...this.state} />
    )
  }
};

export default C;
