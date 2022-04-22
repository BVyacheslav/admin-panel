import {
  LaptopsTableContainer,
  SearchFilterPanelContainer,
  FilterPanelContainer,
} from "../../containers/";

import { Header } from "../../components/Header/Header";

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
