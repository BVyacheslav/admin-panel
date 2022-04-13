import { LaptopsTableContainer } from "../../../containers";
import { SearchFilterPanelContainer } from "../../../containers";

import { Header } from "../..";
import { FilterPanel } from "../..";

import cx from "classnames";

import styles from "./LaptopsPage.module.css";

export const LaptopsPage = ({ className }) =>
    <div className={cx(styles.laptopsPage, className)}>
      <Header>Список заказов</Header>
      <SearchFilterPanelContainer />
      <FilterPanel />
      <LaptopsTableContainer />
    </div>
