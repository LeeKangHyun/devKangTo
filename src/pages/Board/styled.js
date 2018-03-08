import styled from 'styled-components';

export const SearchWrap = styled.form`
  display: inline-block;
  margin: 0 auto;
`

export const Input = styled.input`
  float: left;
  width: 300px;
  height: 35px;
  padding: 0 10px;
`

export const Button = styled.button`
  float: left;
  padding: 0 15px;
  height: 35px;
  color: white;
  font-size: 16px;
  border: none;
  background-color: #3d96bc;

  &:active {
    background-color: #2c85ab;
  }
`

export const Wrap = styled.table`
  width: 100%;
  table-layout: fixed;
`

export const Tbody = styled.tbody`
  font-size: 20px;
`
