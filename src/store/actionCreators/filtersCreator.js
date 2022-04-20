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

export const createSetDateOrderingStart = (payload) => ({
  type: SET_FILTER_DATE_ORDERING_START,
  payload,
});
export const createClearDateOrderingStart = () => ({
  type: CLEAR_FILTER_DATE_ORDERING_START,
});

export const createSetDateOrderingFinish = (payload) => ({
  type: SET_FILTER_DATE_ORDERING_FINISH,
  payload,
});
export const createClearDateOrderingFinish = () => ({
  type: CLEAR_FILTER_DATE_ORDERING_FINISH,
});

export const createSetOrderStatus = (payload) => ({
  type: SET_FILTER_ORDER_STATUS,
  payload,
});
export const createClearOrderStatus = () => ({
  type: CLEAR_FILTER_ORDER_STATUS,
});

export const createSetOrderPriceStart = (payload) => ({
  type: SET_FILTER_ORDER_PRICE_START,
  payload,
});
export const createClearOrderPriceStart = () => ({
  type: CLEAR_FILTER_ORDER_PRICE_START,
});

export const createSetOrderPriceFinish = (payload) => ({
  type: SET_FILTER_ORDER_PRICE_FINISH,
  payload,
});
export const createClearOrderPriceFinish = () => ({
  type: CLEAR_FILTER_ORDER_PRICE_FINISH,
});

export const createSetFilterActive = () => ({
  type: SET_FILTER_ACTIVE,
});

export const createClearAllFilters = () => ({
  type: CLEAR_ALL_FILTERS,
});
