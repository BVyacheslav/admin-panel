import { useSelector, useDispatch } from "react-redux";
import { FilterPanel } from "../../components";
import { getFilters } from "store/selectors/filtersSelector";
import { setFilter, setActiveFilter } from "store/actionCreators";

export const FilterPanelContainer = () => {
  const filters = useSelector(getFilters);
  const { isShow } = useSelector(getFilters);
  const dispatch = useDispatch();

  const handleChangeFilter = ({ target: { name, value } }) => {
    dispatch(setFilter({ name, value }));
  };

  const handleReset = (key) => () => {
    dispatch(setFilter({ name: key, value: "" }));
  };

  const handleChangeFilterActive = () => {
    dispatch(setActiveFilter(filters));
  };

  return (
    <FilterPanel
      filters={filters}
      showFilterPanel={isShow}
      onChangeFilterActive={handleChangeFilterActive}
      onChangeFilter={handleChangeFilter}
      onReset={handleReset}
    />
  );
};
