import { put, call, takeLatest } from 'redux-saga/effects';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

import {
  BOARD_FETCH_REQUEST,
  BOARD_FETCH_SUCCESS,
  BOARD_FETCH_FAILED,
  BOARD_FETCH_UPLOAD,
} from '../Board/action';

import { board } from './api';

function* fetchBoard() {
  try {
    yield put(showLoading());
    const data = yield call(board.getPost);
    yield put({
      type: BOARD_FETCH_SUCCESS,
      ...data,
    });
  } catch (err) {
    yield put({
      type: BOARD_FETCH_FAILED,
      error: err,
    });
  } finally {
    yield put(hideLoading());
  }
}

function* setBoard({ data }) {
  try {
    yield put(showLoading());
    yield call(board.setPost, data);
    yield call(fetchBoard);
  } catch (err) {
    yield put({
      type: BOARD_FETCH_FAILED,
      error: err,
    });
  } finally {
    yield put(hideLoading());
  }
}

export default function* watchBoard() {
  yield takeLatest(BOARD_FETCH_REQUEST, fetchBoard);
  yield takeLatest(BOARD_FETCH_UPLOAD, setBoard);
}
