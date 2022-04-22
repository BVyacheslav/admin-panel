import cx from "classnames";
import { Input, Button, InputWithLabel } from "components/";

import styles from "./FilterPanel.module.css";

export const FilterPanel = ({
  className,
  showFilterPanel,
  filters,
  onChangeFilter,
  onChangeFilterActive,
  onClearDateOrderingStart,
  onClearDateOrderingFinish,
  onClearOrderStatus,
  onClearOrderPriceStart,
  onClearOrderPriceFinish,
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
          name="dateOrderingStart"
          label="Дата оформления"
          placeholder="dd.mm.yyyy"
          value={filters.dateOrderingStart}
          onChange={onChangeFilter}
          onClear={onClearDateOrderingStart}
        />
        <Input
          className={styles.dateFinish}
          name="dateOrderingFinish"
          placeholder="dd.mm.yyyy"
          value={filters.dateOrderingFinish}
          onChange={onChangeFilter}
          onClear={onClearDateOrderingFinish}
        />

        <InputWithLabel
          className={styles.status}
          name="orderStatus"
          label="Статус заказа"
          placeholder="Нажмите для выбора"
          value={filters.orderStatus}
          onChange={onChangeFilter}
          onClear={onClearOrderStatus}
        />

        <InputWithLabel
          className={styles.priceStart}
          name="orderPriceStart"
          label="Сумма заказа"
          placeholder="₽"
          value={filters.orderPriceStart}
          onChange={onChangeFilter}
          onClear={onClearOrderPriceStart}
        />
        <Input
          className={styles.priceFinish}
          name="orderPriceFinish"
          placeholder="₽"
          value={filters.orderPriceFinish}
          onChange={onChangeFilter}
          onClear={onClearOrderPriceFinish}
        />
      </div>
      <Button variant="blue" size="medium" onClick={onChangeFilterActive}>
        Применить
      </Button>
    </div>
  );
};
