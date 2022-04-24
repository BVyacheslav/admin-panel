import { useSelector, useDispatch } from "react-redux";
import { FilterPanel } from "../../components";
import { getFilters } from "store/selectors/filtersSelector";
import { createSetFilter, createSetActiveFilter } from "store/actionCreators";

export const FilterPanelContainer = () => {
  const filters = useSelector(getFilters);
  const { isShow } = useSelector(getFilters);
  const dispatch = useDispatch();

  const handleChangeFilter = ({ target: { name, value } }) => {
    dispatch(createSetFilter({ name, value }));
  };

  const handleReset = (key) => () => {
    dispatch(createSetFilter({ name: key, value: "" }));
  };

  const handleChangeFilterActive = () => {
    dispatch(createSetActiveFilter(filters));
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
