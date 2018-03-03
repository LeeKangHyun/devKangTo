import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import Router from './components/Router';
import './globalStyled';
import config from './firebase';
import FB from "firebase";

ReactDOM.render(
  <Router />,
  document.getElementById('root')
);

FB.initializeApp(config);
registerServiceWorker();
