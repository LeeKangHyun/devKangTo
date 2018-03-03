import React, { Component } from 'react';
import FB from 'firebase';

const Controller = ProfilePage => class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [],
      loading: false,
    }
  }
  
  componentDidMount() {
    const { loading, } = this.state;
    if (!loading) {
      this.getBoardList();
    }
  }
  
  getBoardList = (type = 'post') => {
    let _this = this;
    FB.database().ref(`Board/${type}`).on('value', (snapshot) => {
      _this.setState({
        board: snapshot.val(),
        loading: true,
      })
    })
  };
  
  submit = (data) => {
    alert(`준비중 !${JSON.stringify(data)}`);
  };

  render() {
    return (
      <ProfilePage
        {...this.props}
        {...this.state}
        submit={this.submit.bind(this)}
      />
    )
  }
};

export default Controller;