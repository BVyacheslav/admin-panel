import { LaptopsTable } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { getSorting } from "store/selectors/sortingSelector";
import {
  getLaptops,
  getLaptopsIds,
  getLaptopForEdit,
  getLaptopPages,
} from "store/selectors/laptopsSelector";
import {
  getSelectedLaptops,
  getSelectedLaptopsCount,
  getIsAllSelectedLaptops,
} from "store/selectors/selectedLaptopsSelector";
import {
  createSetKeySorting,
  createSetOrderSorting,
  createSetAllSelectedLaptops,
  createSetSelectedLaptops,
  createClearSelectedLaptops,
  createSetEditLaptop,
  createSetPage,
} from "store/actionCreators";

export const LaptopsTableContainer = () => {
  const dispatch = useDispatch();
  const laptops = useSelector(getLaptops);
  const laptopsIds = useSelector(getLaptopsIds);
  const sorting = useSelector(getSorting);
  const selectedLaptops = useSelector(getSelectedLaptops);
  const selectedLaptopsCount = useSelector(getSelectedLaptopsCount);
  const isAllSelectedLaptops = useSelector(getIsAllSelectedLaptops);
  const editLaptop = useSelector(getLaptopForEdit);
  const laptopPages = useSelector(getLaptopPages);

  const handleSorting = (key) => () => {
    sorting.key === key
      ? dispatch(createSetOrderSorting())
      : dispatch(createSetKeySorting(key));
  };

  const handleCheckboxClick = (e) => {
    dispatch(createSetSelectedLaptops(e.target.value));
  };

  const handleAllCheckboxClick = () => {
    isAllSelectedLaptops
      ? dispatch(createClearSelectedLaptops())
      : dispatch(createSetAllSelectedLaptops(laptopsIds));
  };

  const handleSetEditLaptop = (value) => () => {
    dispatch(createSetEditLaptop(value));
  };

  const handleSetPage = (page) => () => {
    dispatch(createSetPage(page));
  };

  return (
    <LaptopsTable
      laptops={laptops}
      sortingKey={sorting.key}
      sortingOrder={sorting.sortDirection}
      onSorting={handleSorting}
      onCheckboxClick={handleCheckboxClick}
      onAllCheckboxClick={handleAllCheckboxClick}
      selectedLaptops={selectedLaptops}
      isAllSelectedLaptops={isAllSelectedLaptops}
      selectedLaptopsCount={selectedLaptopsCount}
      editLaptop={editLaptop}
      onEditLaptop={handleSetEditLaptop}
      laptopPages={laptopPages}
      onSetPage={handleSetPage}
    />
  );
};
