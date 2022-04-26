import { SET_KEY_SORTING, SET_ORDER_SORTING } from "../constants/actionTypes";

export const setKeySorting = (payload) => ({
  type: SET_KEY_SORTING,
  payload,
});

export const setOrderSorting = (payload) => ({
  type: SET_ORDER_SORTING,
  payload,
});
