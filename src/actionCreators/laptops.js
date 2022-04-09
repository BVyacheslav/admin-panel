import { SEARCH_LAPTOPS } from "../constants/actionTypes";

export const searchLaptops = (payload) => ({
  type: SEARCH_LAPTOPS,
  payload,
});
