import {
  GET_POST_PET,
  FETCH_POST_PET,
  PUT_POST_PET,
} from './action';

export const getPost = (state = {
  list: [],
  loading: false,
}, action) => {
  switch(action.type) {
    case GET_POST_PET:
      return {
        ...state,
        loading: true,
        list: action.list,
      };
    case FETCH_POST_PET:
      return {
        ...state,
        list: action.list
      }
    default:
      return state;
  }
};

export const putPost = (state = {
  loading: false,
}, action) => {
  switch (action.type) {
    case PUT_POST_PET:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};