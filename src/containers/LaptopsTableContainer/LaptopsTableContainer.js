import { LaptopsTable } from "../../components";
import { useSelector } from "react-redux";
import {getFilteredLaptops} from "../../selectors/laptops";
import {getIsLoading} from "../../selectors/isLoading";
import { ReactComponent as Loading } from "../../icons/refresh.svg";

import styles from './LaptopsTableContainer.module.css';

export const LaptopsTableContainer = () => {
  const laptops = useSelector(getFilteredLaptops);
  const isLoading = useSelector(getIsLoading);

  return <>
    {isLoading && <Loading className={styles.loading} />}
    {!isLoading && <LaptopsTable laptops={laptops} />}
  </>

};
