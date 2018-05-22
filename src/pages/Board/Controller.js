import React, { Component } from 'react';
import FB from 'firebase';
import update from 'immutability-helper';

const Controller = ProfilePage => class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      board: [],
      loading: true,
    }
  }
  
  componentDidMount() {
    this.getBoardList();
  }
  
  getBoardList = (type = 'post') => {
    const { board } = this.state;
    FB.database().ref(`Board/${type}`).on('value', (snapshot) => {
      this.setState({
        board: update(board, {$push: snapshot.val()}),
        loading: false,
      });
    });
  };

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

export default Controller;