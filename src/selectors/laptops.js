import { createSelector } from "reselect";
import { getSearchLine } from "./searchLine";

export const getLaptops = ({ laptops }) => laptops;

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
