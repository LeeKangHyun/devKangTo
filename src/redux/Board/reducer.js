import {
  BOARD_FETCH_REQUEST,
  BOARD_FETCH_SUCCESS,
  BOARD_FETCH_FAILED,
} from "./action";

const initialState = {
  post: [],
  isLoading: false,
};

const Board = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case BOARD_FETCH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case BOARD_FETCH_SUCCESS:
      return {
        ...state,
        ...action,
        isLoading: false,
      };
    case BOARD_FETCH_FAILED:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default Board;