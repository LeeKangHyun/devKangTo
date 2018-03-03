import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

export const Nav = styled.nav`
  display: table;
  width: 100%;
  table-layout: fixed;
`;

export const Link = styled(NavLink)`
  display: table-cell;
  padding: .6rem 0;
  color: #fff;
  background-color: #3d96e4;

  &:hover,
  &.active {
    background-color: #2c85d3;
  }
`;