import {
    CLEAR_SEARCH_LAPTOPS_LINE,
    SET_SEARCH_LAPTOPS_LINE
} from "../constants/actionTypes";

const initialState = '';

const searchLine = (state = initialState, { type, payload }) => {
    switch (type) {
        case CLEAR_SEARCH_LAPTOPS_LINE:
            return '';

        case SET_SEARCH_LAPTOPS_LINE:
            return payload;


        default:
            return state;
    }
};
export default searchLine;
