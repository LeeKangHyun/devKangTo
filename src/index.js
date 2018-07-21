import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import FB from 'firebase/app';

import registerServiceWorker from './registerServiceWorker';
import Router from './components/Router';
import './globalStyled';
import config from './firebase';
import configureStore from './redux/configureStore';
import rootSaga from './redux/saga';

const store = configureStore();
store.runSaga(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
);

FB.initializeApp(config);
registerServiceWorker();
