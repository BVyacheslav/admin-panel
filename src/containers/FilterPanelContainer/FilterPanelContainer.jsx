import { FilterPanel } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { createSetShowFilters } from "../../redux/actionCreators/showFiltersCreator";
import { getShowFilters } from "../../redux/selectors/showFiltersSelector";

export const FilterPanelContainer = () => {
  const showFilters = useSelector(getShowFilters);
  const dispatch = useDispatch();

  const handleShowFilters = () => {
    dispatch(createSetShowFilters());
  };

  return (
    <FilterPanel
      showFilterPanel={showFilters}
      onShowFilters={handleShowFilters}
    />
  );
};
