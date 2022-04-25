import { useEffect, useState } from "react";
import cx from "classnames";
import { Button, InputWithLabel } from "components";
import { TableOrderForm } from "./TableOrderForm/TableOrderForm";
import { DropdownRadio } from "../";
import { ReactComponent as FilterIcon } from "icons/checkmark.svg";
import { ReactComponent as CloseIcon } from "icons/x-medium.svg";

import styles from "./OrderForm.module.css";

export const OrderForm = ({ className, editLaptop, onEditLaptop }) => {
  const [isShow, setIsShow] = useState(editLaptop ? true : false);
  const [isShowDropdown, setIsShowDropdown] = useState(false);

  useEffect(() => {
    setIsShow(editLaptop ? true : false);
  }, [editLaptop]);

  const handleClickInput = () => {
    setIsShowDropdown(!isShowDropdown);
  };

  const handleClickDropdown = () => {
    setIsShowDropdown(false);
  };

  const modalWrapperClass = cx(styles.modalWrapper, {
    [styles.show]: isShow,
    className,
  });

  return (
    <div className={modalWrapperClass} onClick={onEditLaptop("")}>
      {editLaptop && (
        <div
          className={styles.card}
          onClick={(event) => event.stopPropagation()}
        >
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
            <div className={styles.inputDropdown}>
              <InputWithLabel
                label="Статус заказа"
                value={editLaptop.status}
                onChange={(event) => event.stopPropagation()}
                onClick={handleClickInput}
              />
              <DropdownRadio
                isShowDropdown={isShowDropdown}
                onClick={handleClickDropdown}
                status={editLaptop.status}
              />
            </div>

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
