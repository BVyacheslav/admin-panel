import { createSelector } from "reselect";
import { getSorting } from "./sortingSelector";
import { getActiveFilter } from "./activeFiltersSelector";
import { getFilters } from "./filtersSelector";
import { getEditLaptop } from "./editLaptopSelector";
import { getPagination } from "./paginationSelector";

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

const stringDateToMilliseconds = (string) => {
  const [day, month, year] = string.split(".");
  return Date.parse(`${year}-${month}-${day}`);
};

const createSort = (key, sortDirection) => (a, b) => {
  let valueA = a[key];
  let valueB = b[key];
  if (key === "date") {
    valueA = stringDateToMilliseconds(a[key]);
    valueB = stringDateToMilliseconds(b[key]);
  }
  if (key === "id") {
    valueA = Number(a[key]);
    valueB = Number(b[key]);
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

const isInRange = (min, max, value) => {
  const minValue = min || 0;
  const maxValue = max || Number.MAX_SAFE_INTEGER;
  if (min || max) {
    return value >= minValue && value <= maxValue;
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

export const getFilteredLaptops = createSelector(
  getSearchLaptops,
  getActiveFilter,
  (laptops, filters) => {
    const {
      dateOrderingStart,
      dateOrderingFinish,
      orderStatus,
      orderPriceStart,
      orderPriceFinish,
    } = filters;
    return laptops.filter((laptop) =>
      areAllTruthy([
        isInRange(orderPriceStart, orderPriceFinish, laptop.price),
        isInRange(
          stringDateToMilliseconds(dateOrderingStart),
          stringDateToMilliseconds(dateOrderingFinish),
          stringDateToMilliseconds(laptop.date)
        ),
        isStringsEqual(orderStatus, laptop.status),
      ])
    );
  }
);

export const getLaptops = createSelector(
  getFilteredLaptops,
  getSorting,
  getPagination,
  (filteredLaptops, { key, sortDirection }, { page, length }) => {
    return filteredLaptops
      .sort(createSort(key, sortDirection))
      .slice((page - 1) * length, page * length);
  }
);

export const getLaptopPages = createSelector(
  getFilteredLaptops,
  getPagination,
  (laptops, { length, page }) => {
    const countLaptopPages = Math.ceil(laptops.length / length);
    if (countLaptopPages < 2) {
      return {};
    }
    return {
      pages: [...Array(countLaptopPages).keys()].map((x) => ++x),
      activePage: page,
    };
  }
);
