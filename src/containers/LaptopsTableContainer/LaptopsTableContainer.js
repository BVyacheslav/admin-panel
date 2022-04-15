import { LaptopsTable } from "../../components";
import { useSelector } from "react-redux";
import { getFilteredLaptops } from "../../selectors/laptops";

export const LaptopsTableContainer = () => {
  const laptops = useSelector(getFilteredLaptops);

  return <LaptopsTable laptops={laptops} />;
};
