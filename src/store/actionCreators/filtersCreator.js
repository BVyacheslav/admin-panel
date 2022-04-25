import {
  SET_SHOW_FILTERS,
  SET_FILTER,
  CLEAR_ALL_FILTERS,
} from "../constants/actionTypes";

export const createSetShowFilter = (payload) => ({
  type: SET_SHOW_FILTERS,
  payload,
});

export const createSetFilter = (payload) => ({
  type: SET_FILTER,
  payload,
});
export const createClearAllFilters = () => ({
  type: CLEAR_ALL_FILTERS,
});
