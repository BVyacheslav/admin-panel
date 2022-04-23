import { SET_PAGE } from "../constants/actionTypes";

const initialState = {
  page: 1,
  length: 5,
};

export const paginationReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PAGE:
      return { ...state, page: payload };

    default:
      return state;
  }
};
