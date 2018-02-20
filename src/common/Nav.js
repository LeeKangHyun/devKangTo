import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <div id="Nav">
        <NavLink exact to="/" activeClassName="active">홈</NavLink>
        <NavLink exact to="/board">게시판</NavLink>
      </div>
    )
  }
}

export default Nav;