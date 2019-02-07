import React, { Component } from 'react';

import { Nav, Link, NavSection } from './styled';

class NavComponent extends Component {
  render() {
    return (
      <Nav>
        <NavSection>
          <Link exact to="/" className="left">
            DevKangTo
          </Link>
          <Link exact to="/board">
            게시판
          </Link>
          {/*<Link exact to="/pet">멍이</Link>*/}
          <Link exact to="/profile">
            프로필
          </Link>
        </NavSection>
      </Nav>
    );
  }
}

export default NavComponent;
