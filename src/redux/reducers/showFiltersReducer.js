import { SET_SHOW_FILTERS } from "../../constants/actionTypes";

const initialState = false;

const showFiltersReducer = (state = initialState, { type }) => {
  switch (type) {
    case SET_SHOW_FILTERS:
      return !state;

    default:
      return state;
  }
};
export default showFiltersReducer;
