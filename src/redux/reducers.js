import { combineReducers } from 'redux';

import board from './Board/reducer';

const rootReducer = combineReducers({
  board,
});

export default rootReducer;