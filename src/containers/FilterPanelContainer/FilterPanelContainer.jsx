import { FilterPanel } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { getShowFilters } from "../../store/selectors/showFiltersSelector";
import { getFilters } from "../../store/selectors/filtersSelector";
import { createSetFilter } from "../../store/actionCreators/filtersCreator";
import { createSetActiveFilter } from "../../store/actionCreators/activeFilterCreator";

export const FilterPanelContainer = () => {
  const showFilters = useSelector(getShowFilters);
  const filters = useSelector(getFilters);
  const dispatch = useDispatch();

  const createHandleChange =
    (key, isClear = false) =>
    ({ target: { value } }) => {
      dispatch(
        createSetFilter({
          [key]: isClear ? "" : value,
        })
      );
    };

  const handleChangeFilterActive = () => {
    dispatch(createSetActiveFilter(filters));
  };

  return (
    <FilterPanel
      filters={filters}
      showFilterPanel={showFilters}
      onChangeFilterActive={handleChangeFilterActive}
      onChangeDateOrderingStart={createHandleChange("dateOrderingStart")}
      onClearDateOrderingStart={createHandleChange("dateOrderingStart", true)}
      onChangeDateOrderingFinish={createHandleChange("dateOrderingFinish")}
      onClearDateOrderingFinish={createHandleChange("dateOrderingFinish", true)}
      onChangeOrderStatus={createHandleChange("orderStatus")}
      onClearOrderStatus={createHandleChange("orderStatus", true)}
      onChangeOrderPriceStart={createHandleChange("orderPriceStart")}
      onClearOrderPriceStart={createHandleChange("orderPriceStart", true)}
      onChangeOrderPriceFinish={createHandleChange("orderPriceFinish")}
      onClearOrderPriceFinish={createHandleChange("orderPriceFinish", true)}
    />
  );
};
