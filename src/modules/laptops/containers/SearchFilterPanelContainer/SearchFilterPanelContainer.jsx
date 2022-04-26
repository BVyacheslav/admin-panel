import { SearchFilterPanel } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { getFilters } from "store/selectors/filtersSelector";
import { getIsActiveFilter } from "store/selectors/activeFiltersSelector";
import {
  setFilter,
  clearAllFilters,
  setShowFilter,
  clearActiveFilter,
} from "store/actionCreators/";

export const SearchFilterPanelContainer = () => {
  const { search } = useSelector(getFilters);
  const isActiveFilter = useSelector(getIsActiveFilter);
  const dispatch = useDispatch();
  const handleChangeSearch = ({ target: { name, value } }) => {
    dispatch(setFilter({ name, value }));
  };

  const handleReset = (key) => () => {
    dispatch(setFilter({ name: key, value: "" }));
  };

  const handleClearFilters = () => {
    dispatch(clearAllFilters());
    dispatch(clearActiveFilter());
  };

  const handleShowFilters = () => {
    dispatch(setShowFilter());
  };

  return (
    <SearchFilterPanel
      onChange={handleChangeSearch}
      onClear={handleReset("search")}
      value={search}
      onClearFilters={handleClearFilters}
      onShowFilters={handleShowFilters}
      isActiveFilter={isActiveFilter}
    />
  );
};
