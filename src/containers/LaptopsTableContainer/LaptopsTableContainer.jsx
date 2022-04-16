import { LaptopsTable } from "../../components";
import { useSelector } from "react-redux";
import { getFilteredLaptops } from "../../redux/selectors/laptopsSelector";

export const LaptopsTableContainer = () => {
  const laptops = useSelector(getFilteredLaptops);

  return <LaptopsTable laptops={laptops} />;
};
