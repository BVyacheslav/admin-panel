import {
  SET_ACTIVE_FILTER,
  CLEAR_ACTIVE_FILTER,
} from "../constants/actionTypes";

const initialState = {
  dateOrderingStart: "",
  dateOrderingFinish: "",
  orderStatus: "",
  orderPriceStart: "",
  orderPriceFinish: "",
};

export const activeFilterReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case SET_ACTIVE_FILTER:
      return payload;

    case CLEAR_ACTIVE_FILTER:
      return initialState;

    default:
      return state;
  }
};
