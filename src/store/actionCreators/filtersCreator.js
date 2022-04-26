import {
  SET_SHOW_FILTERS,
  SET_FILTER,
  CLEAR_ALL_FILTERS,
} from "../constants/actionTypes";

export const setShowFilter = (payload) => ({
  type: SET_SHOW_FILTERS,
  payload,
});

export const setFilter = (payload) => ({
  type: SET_FILTER,
  payload,
});
export const clearAllFilters = () => ({
  type: CLEAR_ALL_FILTERS,
});
