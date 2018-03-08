import { injectGlobal } from 'styled-components'

injectGlobal`
  * {
    margin: 0;
    padding: 0;
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
      content: "";
      clear: both;
    }
  }

  .Center {
    text-align: center;
  }
`;