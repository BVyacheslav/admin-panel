import { SearchFilterPanel } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import {
  createSetSearchLaptopsLine,
  createClearSearchLaptopsLine,
} from "../../actionCreators/searchLine";
import { getSearchLine } from "../../selectors/searchLine";

import { createSetShowFilters } from "../../actionCreators/showFilters";

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
