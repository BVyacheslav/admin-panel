import { Input, Button } from "..";
import cx from "classnames";

import { InputWithLabel } from "../";

import styles from "./FilterPanel.module.css";

export const FilterPanel = ({ className }) => {
  return (
    <div className={cx(styles.filterPanel, className)}>
      <div className={styles.filters}>
        <InputWithLabel
          className={styles.dateStart}
          label="Дата оформления"
          value="20.01.2021"
          placeholder="Введите"
        />
        <Input className={styles.dateFinish} placeholder="dd.mm.dddd" />

        <InputWithLabel
          className={styles.status}
          label="Статус заказа"
          value="Подтвержден"
          placeholder="Нажмите для выбора"
        />

        <InputWithLabel
          className={styles.priceStart}
          label="Дата оформления"
          value="5000"
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
