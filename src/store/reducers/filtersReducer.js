import {
  SET_SHOW_FILTERS,
  SET_FILTER,
  CLEAR_ALL_FILTERS,
} from "../constants/actionTypes";

const initialState = {
  isShow: false,
  search: "",
  dateOrderingStart: "",
  dateOrderingFinish: "",
  orderStatus: "",
  orderPriceStart: "",
  orderPriceFinish: "",
};

export const filtersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_FILTER:
      return {
        ...state,
        [payload.name]: payload.value,
      };
    case SET_SHOW_FILTERS:
      return {
        ...state,
        isShow: !state.isShow,
      };
    case CLEAR_ALL_FILTERS:
      return initialState;

    default:
      return state;
  }
};
