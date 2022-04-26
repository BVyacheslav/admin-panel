import {
  CLEAR_ACTIVE_FILTER,
  SET_ACTIVE_FILTER,
} from "../constants/actionTypes";

export const clearActiveFilter = () => ({
  type: CLEAR_ACTIVE_FILTER,
});

export const setActiveFilter = (payload) => ({
  type: SET_ACTIVE_FILTER,
  payload,
});
