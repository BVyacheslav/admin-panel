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
    laptops.filter(({ id, date, brand, price, status }) => {
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
