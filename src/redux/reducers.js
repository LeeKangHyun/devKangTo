import { combineReducers } from 'redux';
import { postsByReddit, selectedReddit } from './Board/reducer';

const rootReducer = combineReducers({
  postsByReddit,
  selectedReddit,
});

export default rootReducer;