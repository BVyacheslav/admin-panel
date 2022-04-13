import {
    CLEAR_SEARCH_LAPTOPS_LINE,
    SEARCH_LAPTOPS,
} from "../constants/actionTypes";

const initialState = '';

const filter = (state = initialState, { type, payload }) => {
    switch (type) {

        case CLEAR_SEARCH_LAPTOPS_LINE:
            return '';

        case SEARCH_LAPTOPS:
            return payload;

        default:
            return state;
    }
};
export default filter;
