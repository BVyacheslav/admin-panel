import { SET_KEY_SORTING, SET_ORDER_SORTING } from "../constants/actionTypes";

const initialState = {
  key: "brand",
  desc: false,
};

export const sortingReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_KEY_SORTING:
      return { ...state, key: payload };
    case SET_ORDER_SORTING:
      return { ...state, desc: !state.desc };

    default:
      return state;
  }
};
