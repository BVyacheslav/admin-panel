import { FilterPanel } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { getShowFilters } from "../../redux/selectors/showFiltersSelector";

import { createSetDateOrderingStart } from "../../redux/actionCreators/filtersCreator";
import { getFilters } from "../../redux/selectors/filtersSelector";

export const FilterPanelContainer = () => {
  const showFilters = useSelector(getShowFilters);
  const filterDateOrdering = useSelector(getFilters);
  const dispatch = useDispatch();

  const handleChangeFilter = ({ target: { value } }) => {
    dispatch(createSetDateOrderingStart(value));
  };

  return (
    <FilterPanel
      filters={filterDateOrdering}
      onChange={handleChangeFilter}
      showFilterPanel={showFilters}
    />
  );
};
