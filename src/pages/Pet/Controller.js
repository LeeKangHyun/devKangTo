import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Pet from './index';

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

C.propTypes = {
  list: PropTypes.array,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  console.log(state);
  return {
    getPost: state.getPost
  }
};

export default connect(
  mapStateToProps
)(C(Pet))