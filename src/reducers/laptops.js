import { GET_LAPTOPS_SUCCESS } from '../constants/actionTypes'

const initialState = [];

const laptops = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_LAPTOPS_SUCCESS:
      return payload
    default:
      return state;
  }
};
export default laptops;
