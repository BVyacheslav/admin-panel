import { useSelector, useDispatch } from "react-redux";
import { FilterPanel } from "../../components";
import { getFilters } from "store/selectors/filtersSelector";
import { createSetFilter } from "store/actionCreators/filtersCreator";
import { createSetActiveFilter } from "store/actionCreators/activeFilterCreator";

export const FilterPanelContainer = () => {
  const filters = useSelector(getFilters);
  const { isShow } = useSelector(getFilters);
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
      showFilterPanel={isShow}
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
