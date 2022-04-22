import { createSelector } from "reselect";
import { getSorting } from "./sortingSelector";
import { getActiveFilter } from "./activeFiltersSelector";
import { getFilters } from "./filtersSelector";
import { getEditLaptop } from "./editLaptopSelector";

export const getAllLaptops = ({ laptops }) => laptops;

export const getLaptopsIds = createSelector(getAllLaptops, (laptops) =>
  laptops.map(({ id }) => id)
);

export const getLaptopForEdit = createSelector(
  getAllLaptops,
  getEditLaptop,
  (laptops, editLaptop) =>
    laptops.find(({ id }) => editLaptop.length > 0 && id.includes(editLaptop))
);

export const getPagination = () => ({
  start: 0,
  length: 100000,
});

const stringDateToMilliseconds = (string) => {
  const [day, month, year] = string.split(".");
  return Date.parse(`${year}-${month}-${day}`);
};

export const createSort = (key, sortDirection) => (a, b) => {
  let valueA = a[key];
  let valueB = b[key];
  if (key === "date") {
    valueA = stringDateToMilliseconds(a[key]);
    valueB = stringDateToMilliseconds(b[key]);
  }
  if (sortDirection === "asc") {
    if (valueA < valueB) {
      return -1;
    }
    if (valueA > valueB) {
      return 1;
    }
    return 0;
  }
  if (valueA > valueB) {
    return -1;
  }
  if (valueA < valueB) {
    return 1;
  }
  return 0;
};

const isInRange = (min = 0, max = Number.MAX_SAFE_INTEGER, value = 0) => {
  if (min || max) {
    return value >= min && value <= max;
  }
  return true;
};

const isStringsEqual = (str1, str2) => {
  if (str1) {
    return str1.toLowerCase() === str2.toLowerCase();
  }
  return true;
};

const areAllTruthy = (values) => values.every(Boolean);

export const getSearchLaptops = createSelector(
  getAllLaptops,
  getFilters,
  (laptops, { search }) =>
    laptops.filter(
      ({ id, brand }) =>
        id.includes(search) ||
        brand.toLowerCase().includes(search.toLowerCase())
    )
);

export const getLaptops = createSelector(
  getSearchLaptops,
  getActiveFilter,
  getSorting,
  (laptops, filters, { key, sortDirection }) => {
    const {
      dateOrderingStart,
      dateOrderingFinish,
      orderStatus,
      orderPriceStart,
      orderPriceFinish,
    } = filters;
    return laptops
      .filter((laptop) =>
        areAllTruthy([
          isInRange(orderPriceStart, orderPriceFinish, laptop.price),
          isInRange(dateOrderingStart, dateOrderingFinish, laptop.date),
          isStringsEqual(orderStatus, laptop.status),
        ])
      )
      .sort(createSort(key, sortDirection));
  }
);
