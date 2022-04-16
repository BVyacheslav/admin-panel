import { LaptopsTable } from "../../components";
import { useSelector } from "react-redux";
import {
  getFilteredLaptops,
  getSearchLaptops,
} from "../../redux/selectors/laptopsSelector";
import { getFilters } from "../../redux/selectors/filtersSelector";

export const LaptopsTableContainer = () => {
  const filteredLaptops = useSelector(getFilteredLaptops);
  const searchLaptops = useSelector(getSearchLaptops);
  const filters = useSelector(getFilters);

  return (
    <LaptopsTable laptops={filters.active ? filteredLaptops : searchLaptops} />
  );
};
