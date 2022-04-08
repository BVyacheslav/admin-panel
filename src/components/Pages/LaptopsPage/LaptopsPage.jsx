import cx from "classnames";

import styles from "./LaptopsPage.module.css";
import { LaptopsTable } from "../..";
import { Header } from "../..";
import { SearchFilterPanel } from "../..";
import { FilterPanel } from "../..";

export const LaptopsPage = ({ className }) => {
  const laptopsPageClass = cx(styles.laptopsPage, className, {});

  return (
    <div className={laptopsPageClass}>
      <Header>Список заказов</Header>
      <SearchFilterPanel />
      <FilterPanel />
      <LaptopsTable />
    </div>
  );
};
