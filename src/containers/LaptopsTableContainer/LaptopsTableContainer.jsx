import { LaptopsTable } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { getSorting } from "../../store/selectors/sortingSelector";
import {
  getLaptopsPart,
  getLaptopsIds,
} from "../../store/selectors/laptopsSelector";
import {
  createSetKeySorting,
  createSetOrderSorting,
} from "../../store/actionCreators/sortingCreator";
import {
  createSetAllSelectedLaptops,
  createSetSelectedLaptops,
} from "../../store/actionCreators/selectedLaptopsActionCreator";
import {
  getSelectedLaptops,
  getSelectedLaptopsCount,
  getIsAllSelectedLaptops,
} from "../../store/selectors/selectedLaptopsSelector";

export const LaptopsTableContainer = () => {
  const dispatch = useDispatch();
  const laptops = useSelector(getLaptopsPart);
  const laptopsIds = useSelector(getLaptopsIds);
  const sorting = useSelector(getSorting);
  const selectedLaptops = useSelector(getSelectedLaptops);
  const selectedLaptopsCount = useSelector(getSelectedLaptopsCount);
  const isAllSelectedLaptops = useSelector(getIsAllSelectedLaptops);

  const handleSorting = (key) => {
    sorting.key === key
      ? dispatch(createSetOrderSorting())
      : dispatch(createSetKeySorting(key));
  };

  const handleCheckboxClick = ({ target: { value } }) => {
    dispatch(createSetSelectedLaptops([value]));
  };

  const handleAllCheckboxClick = () => {
    dispatch(createSetAllSelectedLaptops(laptopsIds));
  };

  return (
    <LaptopsTable
      laptops={laptops}
      sortingKey={sorting.key}
      sortingOrder={sorting.desc}
      onSorting={handleSorting}
      onCheckboxClick={handleCheckboxClick}
      onAllCheckboxClick={handleAllCheckboxClick}
      selectedLaptops={selectedLaptops}
      isAllSelectedLaptops={isAllSelectedLaptops}
      selectedLaptopsCount={selectedLaptopsCount}
    />
  );
};
