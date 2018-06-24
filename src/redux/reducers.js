import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';

import board from './Board/reducer';

const rootReducer = combineReducers({
  board,
  loadingBar: loadingBarReducer
});

export default rootReducer;