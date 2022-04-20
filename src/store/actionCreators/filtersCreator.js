import { SET_FILTER, CLEAR_ALL_FILTERS } from "../constants/actionTypes";

export const createSetFilter = (payload) => ({
  type: SET_FILTER,
  payload,
});
export const createClearAllFilters = () => ({
  type: CLEAR_ALL_FILTERS,
});
