import {
  SET_ALL_SELECTED_LAPTOPS,
  SET_SELECTED_LAPTOPS,
  CLEAR_SELECTED_LAPTOPS,
} from "../constants/actionTypes";

export const createSetAllSelectedLaptops = (payload) => ({
  type: SET_ALL_SELECTED_LAPTOPS,
  payload,
});

export const createSetSelectedLaptops = (payload) => ({
  type: SET_SELECTED_LAPTOPS,
  payload,
});

export const createClearSelectedLaptops = (payload) => ({
  type: CLEAR_SELECTED_LAPTOPS,
  payload,
});
