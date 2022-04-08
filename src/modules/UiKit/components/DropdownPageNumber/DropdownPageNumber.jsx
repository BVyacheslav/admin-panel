import { InputWithLabel } from "../../../../components";
import cx from "classnames";
import styles from "./DropdownPageNumber.module.css";

export const DropdownPageNumber = ({ className, ...props }) => {
  return (
    <div className={cx(styles.dropdown, className)}>
      <InputWithLabel label="Номер страницы" placeholder="Введите номер" />
    </div>
  );
};
