import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Board from './index';

const C = ProfilePage => class extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
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

C.propTypes = {
  selectedReddit: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  console.log(state);
  const {
    selectedReddit,
    postsByReddit
  } = state;
  const {
    isFetching,
    lastUpdated,
    items: board
  } = postsByReddit[selectedReddit] || {
    isFetching: true,
    items: [],
  };
  
  return {
    selectedReddit,
    board,
    isFetching,
    lastUpdated,
  }
};

export default connect(
  mapStateToProps
)(C(Board));