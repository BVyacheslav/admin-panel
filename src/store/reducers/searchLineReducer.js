import {
  CLEAR_SEARCH_LAPTOPS_LINE,
  SET_SEARCH_LAPTOPS_LINE,
} from "../constants/actionTypes";

const initialState = "";

export const searchLineReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SEARCH_LAPTOPS_LINE:
      return payload;
    case CLEAR_SEARCH_LAPTOPS_LINE:
      return "";
    default:
      return state;
  }
};
