import { SET_KEY_SORTING, SET_ORDER_SORTING } from "../constants/actionTypes";

export const createSetKeySorting = (payload) => ({
  type: SET_KEY_SORTING,
  payload,
});

export const createSetOrderSorting = (payload) => ({
  type: SET_ORDER_SORTING,
  payload,
});
