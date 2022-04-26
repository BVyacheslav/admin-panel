import {
  SET_ALL_SELECTED_LAPTOPS,
  SET_SELECTED_LAPTOPS,
  CLEAR_SELECTED_LAPTOPS,
} from "../constants/actionTypes";

export const setAllSelectedLaptops = (payload) => ({
  type: SET_ALL_SELECTED_LAPTOPS,
  payload,
});

export const setSelectedLaptops = (payload) => ({
  type: SET_SELECTED_LAPTOPS,
  payload,
});

export const clearSelectedLaptops = (payload) => ({
  type: CLEAR_SELECTED_LAPTOPS,
  payload,
});
