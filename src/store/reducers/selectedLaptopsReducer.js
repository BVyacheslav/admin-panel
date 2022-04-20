import {
  SET_ALL_SELECTED_LAPTOPS,
  SET_SELECTED_LAPTOPS,
} from "../constants/actionTypes";

const initialState = [];

export const selectedLaptopsReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case SET_ALL_SELECTED_LAPTOPS: {
      return payload;
    }
    case SET_SELECTED_LAPTOPS: {
      return Object.keys(
        [...state, ...payload].reduce(
          ({ [id]: currentId, ...rest }, id) => ({
            ...rest,
            ...(currentId === id ? {} : { [id]: id }),
          }),
          {}
        )
      );
    }
    default:
      return state;
  }
};
