import { useEffect, useState } from "react";
import { Button } from "..";
import cx from "classnames";
import { InputWithLabel } from "..";
import { TableOrderForm } from "./TableOrderForm/TableOrderForm";
import { ReactComponent as FilterIcon } from "../../icons/checkmark.svg";
import { ReactComponent as CloseIcon } from "../../icons/x-medium.svg";

import styles from "./OrderForm.module.css";

export const OrderForm = ({ className, editLaptop, onEditLaptop }) => {
  const [isShow, setIsShow] = useState(editLaptop ? true : false);

  useEffect(() => {
    setIsShow(editLaptop ? true : false);
  }, [editLaptop]);

  const modalWrapperClass = cx(styles.modalWrapper, {
    [styles.show]: isShow,
    className,
  });

  return (
    <div className={modalWrapperClass}>
      {editLaptop && (
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <span className={styles.cardHeaderText}>
              Заявка #{editLaptop.id}
            </span>
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
              value={editLaptop.date}
            />

            <TableOrderForm
              className={styles.orderFormElement}
              editLaptop={editLaptop}
            />

            <InputWithLabel
              className={styles.orderFormElement}
              label="Статус заказа"
              // FIXME:
              //  value={editLaptop.status}
              //  onChange={onChangeOrderStatus}
            />

            <InputWithLabel
              className={styles.orderFormElement}
              label="Код подтверждения"
              defaultValue="000"
              error
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
      )}
    </div>
  );
};
