import styled from 'styled-components';

export const SearchWrap = styled.form`
  display: inline-block;
  margin: 0 auto;
`;

export const Input = styled.input`
  float: left;
  width: 300px;
  height: 35px;
  padding: 0 10px;
  &.noClear {
    float: none;
  }
`;

export const Button = styled.button`
  float: left;
  padding: 0 15px;
  height: 35px;
  border: none;
  background-color: #3d96bc;
  color: white;
  font-size: 16px;

  &:active {
    background-color: #2c85ab;
  }
`;

export const MakeButton = styled.div`
  padding: 1.2rem 0;
  text-align: right;
  button {
    width: 120px;
    height: 35px;
    border: none;
    background-color: #3d96bc;
    color: white;
    font-size: 16px;

    &:active {
      background-color: #2c85ab;
    }
  }
`;

export const Wrap = styled.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
`;

export const Thead = styled.thead`
  font-size: 20px;
  cursor: default;
  th {
    padding: 0.6rem 0;
  }
`;

export const Tbody = styled.tbody`
  font-size: 20px;
  tr {
    cursor: default;
    &:hover {
      background-color: #efefef;
      cursor: pointer;
    }
  }
  td {
    padding: 0.3rem 0;
  }
`;

export const Editor = styled.article`
  text-align: left;
  > div {
    &:first-of-type {
      margin-bottom: 1.5em;
    }
  }
`;

export const TuiEditor = styled.div`
  text-align: left;
`;

export const Preview = styled.div`
  text-align: left;
`;
