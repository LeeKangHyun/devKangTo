import {
  all,
  fork,
} from 'redux-saga/effects';

import watchBoard from './watchBoard';

export default function* rootSaga() {
  yield all([
    fork(watchBoard),
  ])
}
