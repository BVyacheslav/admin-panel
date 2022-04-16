import {
  CLEAR_SEARCH_LAPTOPS_LINE,
  SET_SEARCH_LAPTOPS_LINE,
} from "../../constants/actionTypes";

export const createSetSearchLaptopsLine = (payload) => ({
  type: SET_SEARCH_LAPTOPS_LINE,
  payload,
});

export const createClearSearchLaptopsLine = (payload) => ({
  type: CLEAR_SEARCH_LAPTOPS_LINE,
});
