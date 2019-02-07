import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 0.25em 0;
  background-color: var(--purple);
  font-size: 24px;
  font-weight: bold;
  z-index: 100;
`;

export const NavSection = styled.section`
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  text-align: right;
`;

export const Link = styled(NavLink)`
  display: inline-block;
  color: #fff;
  line-height: 1.5;
  &.left {
    float: left;
  }
  &:not(:first-of-type) {
    margin-left: 1em;
  }
  @media all and (max-width: 767px) {
    font-size: 16px;
  }
`;
