import { SearchFilterPanel } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { getFilters } from "store/selectors/filtersSelector";

import {
  createSetFilter,
  createClearAllFilters,
  createSetShowFilter,
} from "store/actionCreators/filtersCreator";
import { createClearActiveFilter } from "store/actionCreators/activeFilterCreator";

export const SearchFilterPanelContainer = () => {
  const { search } = useSelector(getFilters);
  const dispatch = useDispatch();

  const handleChangeSearch = ({ target: { name, value } }) => {
    dispatch(createSetFilter({ name, value }));
  };

  const handleClear = (name, value) => {
    dispatch(createSetFilter({ name, value }));
  };

  const handleClearFilters = () => {
    dispatch(createClearAllFilters());
    dispatch(createClearActiveFilter());
  };

  const handleShowFilters = () => {
    dispatch(createSetShowFilter());
  };

  return (
    <SearchFilterPanel
      onChange={handleChangeSearch}
      onClear={handleClear}
      value={search}
      onClearFilters={handleClearFilters}
      onShowFilters={handleShowFilters}
    />
  );
};
