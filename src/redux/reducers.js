import { combineReducers } from 'redux';
import { postsByReddit, selectedReddit } from './Board/reducer';
import { getPost, putPost } from './Pet/reducer';

const rootReducer = combineReducers({
  postsByReddit,
  selectedReddit,
  getPost,
  putPost,
});

export default rootReducer;