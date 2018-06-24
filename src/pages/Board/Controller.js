import React, { Component } from 'react';

const C = ProfilePage => class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ''
    }
  }
  
  componentDidMount() {
    const { getPost } = this.props;
    getPost();
  }
  
  onChangeToState = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  
  onSubmit = e => {
    e.preventDefault();
    const { keyword } = this.state;
    let msg = '' === keyword.trim() ? '내용을 입력하라고 상훈아':keyword;
    alert(msg);
  };

  render() {
    return (
      <ProfilePage
        {...this.props}
        {...this.state}
        onChangeToState={this.onChangeToState}
        onSubmit={this.onSubmit} />
    )
  }
};

export default C;
