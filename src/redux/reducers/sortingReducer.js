import { SET_SORTING } from "../constants/actionTypes";

const initialState = {
  key: "brand",
  desc: false,
};

const sortingReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SORTING:
      return { ...state, key: payload, desc: payload };

    default:
      return state;
  }
};
export default sortingReducer;
