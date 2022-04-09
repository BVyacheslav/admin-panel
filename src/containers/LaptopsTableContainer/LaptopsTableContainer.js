import { LaptopsTable } from "../../components";
import { useSelector } from "react-redux";
import { getLaptops } from "../../selectors/laptops";

export const LaptopsTableContainer = () => {
  const laptops = useSelector(getLaptops);

  return <LaptopsTable laptops={laptops} />;
};
