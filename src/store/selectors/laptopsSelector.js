import { createSelector } from "reselect";
import { getSearchLine } from "./searchLineSelector";
import { getFilters } from "./filtersSelector";
import { getSorting } from "./sortingSelector";

export const getLaptops = ({ laptops }) => laptops;

export const getSearchLaptops = createSelector(
  getLaptops,
  getSearchLine,
  getSorting,
  (laptops, search, { key, desc }) =>
    laptops
      .filter(
        ({ id, brand }) =>
          String(id).includes(search) ||
          brand.toLowerCase().includes(search.toLowerCase())
      )
      .sort((a, b) => {
        if (key === "date") {
          if (desc) {
            if (
              Date.parse(
                `${a[key].slice(6, 10)}-${a[key].slice(3, 5)}-${a[key].slice(
                  0,
                  2
                )}`
              ) <
              Date.parse(
                `${b[key].slice(6, 10)}-${b[key].slice(3, 5)}-${b[key].slice(
                  0,
                  2
                )}`
              )
            ) {
              return 1;
            }
            if (
              Date.parse(
                `${a[key].slice(6, 10)}-${a[key].slice(3, 5)}-${a[key].slice(
                  0,
                  2
                )}`
              ) >
              Date.parse(
                `${b[key].slice(6, 10)}-${b[key].slice(3, 5)}-${b[key].slice(
                  0,
                  2
                )}`
              )
            ) {
              return -1;
            }
            return 0;
          } else {
            if (
              Date.parse(
                `${a[key].slice(6, 10)}-${a[key].slice(3, 5)}-${a[key].slice(
                  0,
                  2
                )}`
              ) >
              Date.parse(
                `${b[key].slice(6, 10)}-${b[key].slice(3, 5)}-${b[key].slice(
                  0,
                  2
                )}`
              )
            ) {
              return 1;
            }
            if (
              Date.parse(
                `${a[key].slice(6, 10)}-${a[key].slice(3, 5)}-${a[key].slice(
                  0,
                  2
                )}`
              ) <
              Date.parse(
                `${b[key].slice(6, 10)}-${b[key].slice(3, 5)}-${b[key].slice(
                  0,
                  2
                )}`
              )
            ) {
              return -1;
            }
            return 0;
          }
        }
        if (desc) {
          if (a[key] < b[key]) {
            return 1;
          }
          if (a[key] > b[key]) {
            return -1;
          }
          return 0;
        } else {
          if (a[key] > b[key]) {
            return 1;
          }
          if (a[key] < b[key]) {
            return -1;
          }
          return 0;
        }
      })
);

export const getFilteredLaptops = createSelector(
  getSearchLaptops,
  getFilters,
  (
    laptops,
    {
      dateOrderingStart,
      dateOrderingFinish,
      orderStatus,
      orderPriceStart,
      orderPriceFinish,
    }
  ) =>
    laptops.filter(({ date, price, status }) => {
      let validation = true;
      if (dateOrderingStart && dateOrderingFinish) {
        validation =
          validation &&
          Date.parse(
            `${date.slice(6, 10)}-${date.slice(3, 5)}-${date.slice(0, 2)}`
          ) >=
            Date.parse(
              `${dateOrderingStart.slice(6, 10)}-${dateOrderingStart.slice(
                3,
                5
              )}-${dateOrderingStart.slice(0, 2)}`
            ) &&
          Date.parse(
            `${date.slice(6, 10)}-${date.slice(3, 5)}-${date.slice(0, 2)}`
          ) <=
            Date.parse(
              `${dateOrderingFinish.slice(6, 10)}-${dateOrderingFinish.slice(
                3,
                5
              )}-${dateOrderingFinish.slice(0, 2)}`
            );
      }

      if (orderStatus) {
        validation = validation && status.includes(orderStatus);
      }

      if (orderPriceStart && orderPriceFinish) {
        validation =
          validation &&
          price > Number(orderPriceStart) &&
          price < Number(orderPriceFinish);
      }
      return validation;
    })
);
