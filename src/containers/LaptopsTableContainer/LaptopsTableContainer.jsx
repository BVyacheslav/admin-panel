import { LaptopsTable } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import {
  getFilteredLaptops,
  getSearchLaptops,
} from "../../store/selectors/laptopsSelector";
import { getFilters } from "../../store/selectors/filtersSelector";
import { getSorting } from "../../store/selectors/sortingSelector";

import {
  createSetKeySorting,
  createSetOrderSorting,
} from "../../store/actionCreators/sortingCreator";

export const LaptopsTableContainer = () => {
  const filteredLaptops = useSelector(getFilteredLaptops);
  const searchLaptops = useSelector(getSearchLaptops);
  const filters = useSelector(getFilters);
  const sorting = useSelector(getSorting);
  const dispatch = useDispatch();

  const handleSorting = (key) => {
    sorting.key === key
      ? dispatch(createSetOrderSorting())
      : dispatch(createSetKeySorting(key));
  };

  return (
    <LaptopsTable
      laptops={filters.active ? filteredLaptops : searchLaptops}
      sortingKey={sorting.key}
      sortingOrder={sorting.desc}
      onSorting={handleSorting}
    />
  );
};
