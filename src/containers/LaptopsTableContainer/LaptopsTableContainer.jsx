import { LaptopsTable } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import {
  getFilteredLaptops,
  getSearchLaptops,
} from "../../redux/selectors/laptopsSelector";
import { getFilters } from "../../redux/selectors/filtersSelector";
import { getSorting } from "../../redux/selectors/sortingSelector";

import {
  createSetKeySorting,
  createSetOrderSorting,
} from "../../redux/actionCreators/sortingCreator";

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
