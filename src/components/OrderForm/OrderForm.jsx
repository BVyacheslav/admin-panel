import { useEffect, useState } from "react";
import { Button } from "..";
import cx from "classnames";
import { InputWithLabel } from "..";
import { TableOrderForm } from "./TableOrderForm/TableOrderForm";
import { ReactComponent as FilterIcon } from "../../icons/checkmark.svg";
import { ReactComponent as CloseIcon } from "../../icons/x-medium.svg";

import styles from "./OrderForm.module.css";

export const OrderForm = ({ className, editLaptop, onEditLaptop }) => {
  const [isShow, setIsShow] = useState(editLaptop.length > 0 ? true : false);

  useEffect(() => {
    setIsShow(editLaptop.length > 0 ? true : false);
  }, [editLaptop]);

  const modalWrapperClass = cx(styles.modalWrapper, {
    [styles.show]: isShow,
    className,
  });

  return (
    <div className={modalWrapperClass}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <span className={styles.cardHeaderText}>Заявка #</span>
          <button onClick={onEditLaptop("")} className={styles.closeButton}>
            <CloseIcon className={styles.closeIcon} />
          </button>
        </div>
        <div className={styles.orderForm}>
          <InputWithLabel
            className={styles.orderFormElement}
            label="Дата оформления"
            placeholder="dd.mm.yyyy"
            disabled
            // value={filters.dateOrderingStart}
            // onChange={onChangeDateOrderingStart}
            // onClear={onClearDateOrderingStart}
          />

          <InputWithLabel
            className={styles.orderFormElement}
            label="Статус заказа"
            placeholder="Нажмите для выбора"
            // value={filters.orderStatus}
            // onChange={onChangeOrderStatus}
            // onClear={onClearOrderStatus}
          />

          <TableOrderForm
            className={styles.orderFormElement}
            laptops={editLaptop}
          />

          <InputWithLabel
            className={styles.orderFormElement}
            label="Сумма заказа"
            placeholder="₽"
            // value={filters.orderPriceStart}
            // onChange={onChangeOrderPriceStart}
            // onClear={onClearOrderPriceStart}
          />

          <InputWithLabel
            className={styles.orderFormElement}
            label="Сумма заказа"
            placeholder="₽"
            // value={filters.orderPriceStart}
            // onChange={onChangeOrderPriceStart}
            // onClear={onClearOrderPriceStart}
          />

          <InputWithLabel
            className={styles.orderFormElement}
            label="Сумма заказа"
            placeholder="₽"
            // value={filters.orderPriceStart}
            // onChange={onChangeOrderPriceStart}
            // onClear={onClearOrderPriceStart}
          />
        </div>
        <div className={styles.cardFooter}>
          <span className={styles.cardFooterText}>
            Ошибка или индикатор загрузки
          </span>
          <Button
            variant="white"
            size="medium"
            icon={FilterIcon}
            onClick={onEditLaptop("")}
          >
            Сохранить
          </Button>
        </div>
      </div>
    </div>
  );
};
