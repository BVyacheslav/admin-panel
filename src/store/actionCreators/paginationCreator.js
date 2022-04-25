import { SET_PAGE } from "../constants/actionTypes";

export const createSetPage = (payload) => ({
  type: SET_PAGE,
  payload,
});
