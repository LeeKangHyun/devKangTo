import styled from 'styled-components';

export const Button = styled.button`
  margin-top: 1.2rem;
  padding: .6em 1.2em;
  background-color: #3d96bc;
  border: none;
  font-size: 16px;
  color: white;
  &:active {
    background-color: #2c85ab;
  }
`;
export const Wrap = styled.table`
  width: 100%;
  table-layout: fixed;
`;

export const Tbody = styled.tbody`
  font-size: 20px;
`;