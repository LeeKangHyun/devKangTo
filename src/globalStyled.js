import { injectGlobal } from 'styled-components';
import { reset } from 'styled-reset';

injectGlobal`
  ${reset};
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
  button {
    outline: none;
    cursor: pointer;
  }
  .Clearfix {
    &::after {
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
`;