import { injectGlobal } from 'styled-components';
import { reset } from 'styled-reset';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR:400,700&subset=korean');
  ${reset};
  * {
    box-sizing: border-box;
  }
  body {
    margin: 48px 0 0;
    padding: 0;
    font-family: 'Noto Sans KR', sans-serif;
  }
  a {
    text-decoration: none;
  }
  button {
    outline: none;
    cursor: pointer;
  }
  .Clearfix {
    &::before, &::after {
      display: block;
      content: '';
      clear: both;
    }
  }
  img {
    max-width: 100%;
  }
  .Center {
    text-align: center;
  }
  :root {
    --purple: #654ea3;
  }
  @media all and (max-width: 767px) {
    body {
      margin: 32px 0 0;
    }
  }
`;