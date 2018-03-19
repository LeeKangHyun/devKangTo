import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FB from 'firebase';

import Board from './index';

const Controller = ProfilePage => class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      board: [],
    }
  }
  
  componentDidMount() {
    this.getBoardList();
  }
  
  getBoardList = (type = 'post') => {
    FB.database().ref(`Board/${type}`).on('value', (snapshot) => {
      this.setState({
        board: snapshot.val(),
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

Controller.propTypes = {
  selectedReddit: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const { selectedReddit, postsByReddit } = state;
  const { isFetching, lastUpdated, items: posts } = postsByReddit[selectedReddit] || {
    isFetching: true,
    items: [],
  };
  
  return {
    selectedReddit,
    posts,
    isFetching,
    lastUpdated,
  }
}

export default connect(
  mapStateToProps
)(Controller(Board));