import { LaptopsTable } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { getSorting } from "../../store/selectors/sortingSelector";
import { getLaptopsPart } from "../../store/selectors/laptopsSelector";

import {
  createSetKeySorting,
  createSetOrderSorting,
} from "../../store/actionCreators/sortingCreator";

export const LaptopsTableContainer = () => {
  const laptops = useSelector(getLaptopsPart);
  const sorting = useSelector(getSorting);
  const dispatch = useDispatch();

  const handleSorting = (key) => {
    sorting.key === key
      ? dispatch(createSetOrderSorting())
      : dispatch(createSetKeySorting(key));
  };

  return (
    <LaptopsTable
      laptops={laptops}
      sortingKey={sorting.key}
      sortingOrder={sorting.desc}
      onSorting={handleSorting}
    />
  );
};
