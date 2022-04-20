import { SET_FILTER, CLEAR_ALL_FILTERS } from "../constants/actionTypes";

const initialState = {
  dateOrderingStart: "",
  dateOrderingFinish: "",
  orderStatus: "",
  orderPriceStart: "",
  orderPriceFinish: "",
};

export const filtersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_FILTER:
      return { ...state, ...payload };

    case CLEAR_ALL_FILTERS:
      return initialState;

    default:
      return state;
  }
};
