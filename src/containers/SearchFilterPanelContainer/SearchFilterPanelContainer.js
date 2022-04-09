import { SearchFilterPanel } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { searchLaptops } from "../../actionCreators/laptops";
import { getLaptops } from "../../selectors/laptops";

export const SearchFilterPanelContainer = () => {
  const laptops = useSelector(getLaptops);
  const dispatch = useDispatch();

  const handleChangeSearch = ({ target: { value } }) => {
    dispatch(searchLaptops(value));
    console.log("value", value);
  };

  console.log(laptops);

  return (
    <SearchFilterPanel
      laptops={laptops}
      handleChangeSearch={handleChangeSearch}
    />
  );
};
