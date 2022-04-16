import { LaptopsTableContainer } from "../../../containers";
import { SearchFilterPanelContainer } from "../../../containers";
import { FilterPanelContainer } from "../../../containers";

import { Header } from "../..";

import cx from "classnames";

import styles from "./LaptopsPage.module.css";

export const LaptopsPage = ({ className }) => {
  return (
    <div className={cx(styles.laptopsPage, className)}>
      <Header>Список заказов</Header>
      <SearchFilterPanelContainer />
      <FilterPanelContainer />
      <LaptopsTableContainer />
    </div>
  );
};
