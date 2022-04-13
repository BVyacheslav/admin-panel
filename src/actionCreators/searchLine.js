import {
    CLEAR_SEARCH_LAPTOPS_LINE,
    SEARCH_LAPTOPS,
    SET_SEARCH_LAPTOPS_LINE
} from '../constants/actionTypes'

export const createSetSearhLaptopsLine = payload => ({
    type: SET_SEARCH_LAPTOPS_LINE,
    payload,
});


export const createClearSearchLaptopsLine = () => ({
    type: CLEAR_SEARCH_LAPTOPS_LINE,
});


export const createSearch = payload => ({
    type: SEARCH_LAPTOPS,
    payload
});
