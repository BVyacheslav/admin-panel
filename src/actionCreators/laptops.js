import {GET_LAPTOPS} from "../constants/actionTypes";

export const searchLaptops = payload => ({
  type: 'SEARCH_LAPTOPS',
  payload,
});

export const getLaptops = () => ({
  type: GET_LAPTOPS
})