import { SearchFilterPanel } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import {
  createSetSearchLaptopsLine,
  createClearSearchLaptopsLine,
} from "../../actionCreators/searchLine";
import { getSearchLine } from "../../selectors/searchLine";

export const SearchFilterPanelContainer = () => {
  const searchLine = useSelector(getSearchLine);
  const dispatch = useDispatch();

  const handleChangeSearch = ({ target: { value } }) => {
    dispatch(createSetSearchLaptopsLine(value));
  };

  const handleClear = () => {
    dispatch(createClearSearchLaptopsLine());
  };

  return (
    <SearchFilterPanel
      onChange={handleChangeSearch}
      onClear={handleClear}
      value={searchLine}
    />
  );
};
