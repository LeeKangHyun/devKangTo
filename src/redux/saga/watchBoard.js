import { put, call, takeLatest, } from 'redux-saga/effects';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

import {
  BOARD_FETCH_REQUEST,
  BOARD_FETCH_SUCCESS,
  BOARD_FETCH_FAILED,
} from '../Board/action';

import { board } from './api';

function* fetchBoard() {
  try {
    yield put(showLoading());
    const data = yield call(board.getPost);
    yield put({
      type: BOARD_FETCH_SUCCESS,
      ...data
    })
  } catch(err) {
    yield put({
      type: BOARD_FETCH_FAILED,
      error: err
    })
  } finally {
    yield put(hideLoading());
  }
}

export default function* watchBoard() {
  yield takeLatest(BOARD_FETCH_REQUEST, fetchBoard);
}