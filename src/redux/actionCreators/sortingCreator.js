import { SET_SORTING } from "../constants/actionTypes";

export const createSetSorting = (payload) => ({
  type: SET_SORTING,
  payload,
});
