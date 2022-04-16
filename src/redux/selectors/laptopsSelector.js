import { createSelector } from "reselect";
import { getSearchLine } from "./searchLineSelector";

export const getLaptops = ({ laptopsReducer }) => laptopsReducer;

export const getFilteredLaptops = createSelector(
  getLaptops,
  getSearchLine,
  (laptops, search) =>
    laptops.filter(
      ({ id, brand }) =>
        id.includes(search) ||
        brand.toLowerCase().includes(search.toLowerCase())
    )
);
