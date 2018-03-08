import React, { Component } from 'react';
import FB from 'firebase';

const Controller = ProfilePage => class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      board: [],
      loading: false,
    }
  }
  
  componentDidMount() {
    // const { loading, } = this.state;
    // if (!loading) {
    this.getBoardList();
    // }
  }
  
  getBoardList = (type = 'post') => {
    FB.database().ref(`Board/${type}`).on('value', (snapshot) => {
      this.setState({
        board: snapshot.val(),
        loading: true,
      });

    });
  };

  onChangeToState = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  
  onSubmit = e => {
    e.preventDefault();
    const { keyword } = this.state;
    alert(keyword)
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