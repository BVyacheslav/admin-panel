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
  createSetKeySorting,
  createSetOrderSorting,
} from "store/actionCreators/sortingCreator";
import {
  createSetAllSelectedLaptops,
  createSetSelectedLaptops,
} from "store/actionCreators/selectedLaptopsActionCreator";
import {
  getSelectedLaptops,
  getSelectedLaptopsCount,
  getIsAllSelectedLaptops,
} from "store/selectors/selectedLaptopsSelector";
import { createSetEditLaptop } from "store/actionCreators/editLaptopCreator";
import { createSetPage } from "store/actionCreators/paginationCreator";

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

  const handleCheckboxClick = ({ target: { value } }) => {
    dispatch(createSetSelectedLaptops([value]));
  };

  const handleAllCheckboxClick = () => {
    dispatch(createSetAllSelectedLaptops(laptopsIds));
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
