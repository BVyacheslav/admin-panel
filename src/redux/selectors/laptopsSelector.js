import { createSelector } from "reselect";
import { getSearchLine } from "./searchLineSelector";
import { getFilters } from "./filtersSelector";

export const getLaptops = ({ laptopsReducer }) => laptopsReducer;

export const getSearchLaptops = createSelector(
  getLaptops,
  getSearchLine,
  (laptops, search) =>
    laptops.filter(
      ({ id, brand }) =>
        id.includes(search) ||
        brand.toLowerCase().includes(search.toLowerCase())
    )
);

export const getFilteredLaptops = createSelector(
  getLaptops,
  getSearchLine,
  getFilters,
  (laptops, search, filters) =>
    laptops.filter(
      ({ id, brand, price }) =>
        price > Number(filters.orderPriceStart) &&
        price < Number(filters.orderPriceFinish) &&
        (id.includes(search) ||
          brand.toLowerCase().includes(search.toLowerCase()))
    )
);
