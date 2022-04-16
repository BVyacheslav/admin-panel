import {
  SET_FILTER_DATE_ORDERING_START,
  CLEAR_FILTER_DATE_ORDERING_START,
  SET_FILTER_DATE_ORDERING_FINISH,
  CLEAR_FILTER_DATE_ORDERING_FINISH,
  SET_FILTER_ORDER_STATUS,
  CLEAR_FILTER_ORDER_STATUS,
  SET_FILTER_ORDER_PRICE_START,
  CLEAR_FILTER_ORDER_PRICE_START,
  SET_FILTER_ORDER_PRICE_FINISH,
  CLEAR_FILTER_ORDER_PRICE_FINISH,
  SET_FILTER_ACTIVE,
  CLEAR_ALL_FILTERS,
} from "../constants/actionTypes";

const initialState = {
  dateOrderingStart: "",
  dateOrderingFinish: "",
  orderStatus: "",
  orderPriceStart: "",
  orderPriceFinish: "",
  active: false,
};

const filtersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_FILTER_DATE_ORDERING_START:
      return { ...state, dateOrderingStart: payload };
    case CLEAR_FILTER_DATE_ORDERING_START:
      return { ...state, dateOrderingStart: "" };

    case SET_FILTER_DATE_ORDERING_FINISH:
      return { ...state, dateOrderingFinish: payload };
    case CLEAR_FILTER_DATE_ORDERING_FINISH:
      return { ...state, dateOrderingFinish: "" };

    case SET_FILTER_ORDER_STATUS:
      return { ...state, orderStatus: payload };
    case CLEAR_FILTER_ORDER_STATUS:
      return { ...state, orderStatus: "" };

    case SET_FILTER_ORDER_PRICE_START:
      return { ...state, orderPriceStart: payload };
    case CLEAR_FILTER_ORDER_PRICE_START:
      return { ...state, orderPriceStart: "" };

    case SET_FILTER_ORDER_PRICE_FINISH:
      return { ...state, orderPriceFinish: payload };
    case CLEAR_FILTER_ORDER_PRICE_FINISH:
      return { ...state, orderPriceFinish: "" };

    case SET_FILTER_ACTIVE:
      return { ...state, active: true };

    case CLEAR_ALL_FILTERS:
      return initialState;

    default:
      return state;
  }
};
export default filtersReducer;
