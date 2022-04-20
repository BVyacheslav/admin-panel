import { SearchFilterPanel } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import {
  createSetSearchLaptopsLine,
  createClearSearchLaptopsLine,
} from "../../store/actionCreators/searchLineCreator";
import { getSearchLine } from "../../store/selectors/searchLineSelector";

import { createSetShowFilters } from "../../store/actionCreators/showFiltersCreator";
import { createClearAllFilters } from "../../store/actionCreators/filtersCreator";

export const SearchFilterPanelContainer = () => {
  const searchLine = useSelector(getSearchLine);
  const dispatch = useDispatch();

  const handleChangeSearch = ({ target: { value } }) => {
    dispatch(createSetSearchLaptopsLine(value));
  };

  const handleClear = () => {
    dispatch(createClearSearchLaptopsLine());
  };

  const handleClearFilters = () => {
    dispatch(createClearSearchLaptopsLine());
    dispatch(createClearAllFilters());
  };

  const handleShowFilters = () => {
    dispatch(createSetShowFilters());
  };

  return (
    <SearchFilterPanel
      onChange={handleChangeSearch}
      onClear={handleClear}
      value={searchLine}
      onClearFilters={handleClearFilters}
      onShowFilters={handleShowFilters}
    />
  );
};
