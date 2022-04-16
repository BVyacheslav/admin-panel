import { SET_SHOW_FILTERS } from "../constants/actionTypes";

const initialState = false;

const showFilters = (state = initialState, { type }) => {
  switch (type) {
    case SET_SHOW_FILTERS:
      return !state;

    default:
      return state;
  }
};
export default showFilters;
