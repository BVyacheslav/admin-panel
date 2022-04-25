import {
  CLEAR_ACTIVE_FILTER,
  SET_ACTIVE_FILTER,
} from "../constants/actionTypes";

export const createClearActiveFilter = () => ({
  type: CLEAR_ACTIVE_FILTER,
});

export const createSetActiveFilter = (payload) => ({
  type: SET_ACTIVE_FILTER,
  payload,
});
