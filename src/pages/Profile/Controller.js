import React, { Component } from 'react';

const Controller = ProfilePage => class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: true,
    }
  }

  onClickToHeart = () => {
    this.setState((prevState) => {
      return {
        isActive: !prevState.isActive
      }
    });
  }

  render() {
    return (
      <ProfilePage
        {...this.props}
        {...this.state}
        onClickToHeart={this.onClickToHeart}
      />
    )
  }
}

export default Controller;