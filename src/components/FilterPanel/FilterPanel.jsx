import { Input, Button } from "..";
import cx from "classnames";

import { InputWithLabel } from "../";

import styles from "./FilterPanel.module.css";

export const FilterPanel = ({ className, showFilterPanel }) => {
  const filterPanelClass = cx(styles.filterPanel, {
    [styles.showFilterPanel]: showFilterPanel,
    className,
  });

  return (
    <div className={filterPanelClass}>
      <div className={styles.filters}>
        <InputWithLabel
          className={styles.dateStart}
          label="Дата оформления"
          defaultValue="20.01.2021"
          placeholder="Введите"
        />
        <Input className={styles.dateFinish} placeholder="dd.mm.dddd" />

        <InputWithLabel
          className={styles.status}
          label="Статус заказа"
          defaultValue="Подтвержден"
          placeholder="Нажмите для выбора"
        />

        <InputWithLabel
          className={styles.priceStart}
          label="Дата оформления"
          defaultValue="5000"
          placeholder="₽"
        />
        <Input className={styles.priceFinish} placeholder="₽" />
      </div>
      <Button variant="blue" size="medium">
        Применить
      </Button>
    </div>
  );
};
