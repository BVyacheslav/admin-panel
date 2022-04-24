import { SearchFilterPanel } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { getFilters } from "store/selectors/filtersSelector";

import {
  createSetFilter,
  createClearAllFilters,
  createSetShowFilter,
  createClearActiveFilter,
} from "store/actionCreators/";

export const SearchFilterPanelContainer = () => {
  const { search } = useSelector(getFilters);
  const dispatch = useDispatch();

  const handleChangeSearch = ({ target: { name, value } }) => {
    dispatch(createSetFilter({ name, value }));
  };

  const handleReset = (key) => () => {
    dispatch(createSetFilter({ name: key, value: "" }));
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
      onClear={handleReset("search")}
      value={search}
      onClearFilters={handleClearFilters}
      onShowFilters={handleShowFilters}
    />
  );
};
