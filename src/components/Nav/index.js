import React, { Component } from 'react';

import { Nav, Link } from './styled';

class NavComponent extends Component {
  render() {
    return (
      <Nav>
        <Link exact to="/">홈</Link>
        <Link exact to="/board">게시판</Link>
        <Link exact to="/pet">멍이</Link>
        <Link exact to="/profile">프로필</Link>
      </Nav>
    )
  }
}

export default NavComponent;