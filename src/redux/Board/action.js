export const BOARD_FETCH_REQUEST = 'BOARD_FETCH_REQUEST';
export const BOARD_FETCH_SUCCESS = 'BOARD_FETCH_SUCCESS';
export const BOARD_FETCH_FAILED = 'BOARD_FETCH_FAILED';
export const BOARD_FETCH_UPLOAD = 'BOARD_FETCH_UPLOAD';

export const getPost = () => ({
  type: BOARD_FETCH_REQUEST,
});

export const setPost = data => ({
  type: BOARD_FETCH_UPLOAD,
  data,
});
