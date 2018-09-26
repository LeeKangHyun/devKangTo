import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: table;
  width: 100%;
  table-layout: fixed;
`;

export const Link = styled(NavLink)`
  display: table-cell;
  padding: 0.6rem 0;
  color: #fff;
  background-color: #654ea3;
  font-size: 24px;
  font-weight: bold;
  &:hover,
  &.active {
    background-color: #796fa0;
  }
  @media all and (max-width: 767px) {
    font-size: 16px;
  }
`;
