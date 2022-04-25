import {
  SET_ALL_SELECTED_LAPTOPS,
  SET_SELECTED_LAPTOPS,
  CLEAR_SELECTED_LAPTOPS,
} from "../constants/actionTypes";

const initialState = [];

const xor = (arr, item) => {
  return arr.includes(item) ? arr.filter((el) => el !== item) : [...arr, item];
};

export const selectedLaptopsReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case SET_ALL_SELECTED_LAPTOPS: {
      return payload;
    }
    case CLEAR_SELECTED_LAPTOPS: {
      return [];
    }
    case SET_SELECTED_LAPTOPS: {
      return xor(state, payload);
    }
    default:
      return state;
  }
};
