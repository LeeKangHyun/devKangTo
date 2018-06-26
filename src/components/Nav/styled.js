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
  background-color: #654EA3;
  font-size: 24px;
  font-weight: 500;

  &:hover, &.active {
    background-color: #796FA0;
  }
  @media all and (max-width: 768px) {
    font-size: 16px;
  }
`;