import { Input, Button } from "..";
import cx from "classnames";

import { InputWithLabel } from "../";

import styles from "./FilterPanel.module.css";

export const FilterPanel = ({
  className,
  showFilterPanel,
  filters,
  onChange,
}) => {
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
          value={filters.dateOrderingStart}
          onChange={onChange}
          placeholder="dd.mm.dddd"
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
          label="Сумма заказа"
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
