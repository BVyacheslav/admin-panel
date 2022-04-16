import { FilterPanel } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { getShowFilters } from "../../redux/selectors/showFiltersSelector";

import {
  createSetDateOrderingStart,
  createClearDateOrderingStart,
  createSetDateOrderingFinish,
  createClearDateOrderingFinish,
  createSetOrderStatus,
  createClearOrderStatus,
  createSetOrderPriceStart,
  createClearOrderPriceStart,
  createSetOrderPriceFinish,
  createClearOrderPriceFinish,
} from "../../redux/actionCreators/filtersCreator";
import { getFilters } from "../../redux/selectors/filtersSelector";

export const FilterPanelContainer = () => {
  const showFilters = useSelector(getShowFilters);
  const filters = useSelector(getFilters);
  const dispatch = useDispatch();

  const handleChangeDateOrderingStart = ({ target: { value } }) => {
    dispatch(createSetDateOrderingStart(value));
  };
  const handleClearDateOrderingStart = () => {
    dispatch(createClearDateOrderingStart());
  };

  const handleChangeDateOrderingFinish = ({ target: { value } }) => {
    console.log("handleChangeDateOrderingFinish");
    dispatch(createSetDateOrderingFinish(value));
  };
  const handleClearDateOrderingFinish = () => {
    dispatch(createClearDateOrderingFinish());
  };

  const handleChangeOrderStatus = ({ target: { value } }) => {
    dispatch(createSetOrderStatus(value));
  };
  const handleClearOrderStatus = () => {
    dispatch(createClearOrderStatus());
  };

  const handleChangeOrderPriceStart = ({ target: { value } }) => {
    dispatch(createSetOrderPriceStart(value));
  };
  const handleClearOrderPriceStart = () => {
    dispatch(createClearOrderPriceStart());
  };

  const handleChangeOrderPriceFinish = ({ target: { value } }) => {
    dispatch(createSetOrderPriceFinish(value));
  };
  const handleClearOrderPriceFinish = () => {
    dispatch(createClearOrderPriceFinish());
  };

  return (
    <FilterPanel
      filters={filters}
      showFilterPanel={showFilters}
      onChangeDateOrderingStart={handleChangeDateOrderingStart}
      onClearDateOrderingStart={handleClearDateOrderingStart}
      onChangeDateOrderingFinish={handleChangeDateOrderingFinish}
      onClearDateOrderingFinish={handleClearDateOrderingFinish}
      onChangeOrderStatus={handleChangeOrderStatus}
      onClearOrderStatus={handleClearOrderStatus}
      onChangeOrderPriceStart={handleChangeOrderPriceStart}
      onClearOrderPriceStart={handleClearOrderPriceStart}
      onChangeOrderPriceFinish={handleChangeOrderPriceFinish}
      onClearOrderPriceFinish={handleClearOrderPriceFinish}
    />
  );
};
