import { Input, Button } from "..";
import cx from "classnames";

import { InputWithLabel } from "../";

import styles from "./FilterPanel.module.css";

export const FilterPanel = ({
  className,
  showFilterPanel,
  filters,
  onChangeDateOrderingStart,
  onClearDateOrderingStart,
  onChangeDateOrderingFinish,
  onClearDateOrderingFinish,
  onChangeOrderStatus,
  onClearOrderStatus,
  onChangeOrderPriceStart,
  onClearOrderPriceStart,
  onChangeOrderPriceFinish,
  onClearOrderPriceFinish,
  onChangeFilterActive,
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
          placeholder="dd.mm.yyyy"
          value={filters.dateOrderingStart}
          onChange={onChangeDateOrderingStart}
          onClear={onClearDateOrderingStart}
        />
        <Input
          className={styles.dateFinish}
          placeholder="dd.mm.yyyy"
          value={filters.dateOrderingFinish}
          onChange={onChangeDateOrderingFinish}
          onClear={onClearDateOrderingFinish}
        />

        <InputWithLabel
          className={styles.status}
          label="Статус заказа"
          placeholder="Нажмите для выбора"
          value={filters.orderStatus}
          onChange={onChangeOrderStatus}
          onClear={onClearOrderStatus}
        />

        <InputWithLabel
          className={styles.priceStart}
          label="Сумма заказа"
          placeholder="₽"
          value={filters.orderPriceStart}
          onChange={onChangeOrderPriceStart}
          onClear={onClearOrderPriceStart}
        />
        <Input
          className={styles.priceFinish}
          placeholder="₽"
          value={filters.orderPriceFinish}
          onChange={onChangeOrderPriceFinish}
          onClear={onClearOrderPriceFinish}
        />
      </div>
      <Button variant="blue" size="medium" onClick={onChangeFilterActive}>
        Применить
      </Button>
    </div>
  );
};
