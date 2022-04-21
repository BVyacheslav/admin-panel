import { SET_EDIT_LAPTOP } from "../constants/actionTypes";

const initialState = "";

export const editLaptopReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_EDIT_LAPTOP: {
      return payload;
    }
    default:
      return state;
  }
};
