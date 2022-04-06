import { Button } from "../Button/Button";
import cx from "classnames";
import styles from "./DropdownDelete.module.css";

export const DropdownDelete = ({ className, ...props }) => {
  return (
    <div className={cx(styles.dropdown, className)}>
      <label> Удалить n записей? </label>
      <Button variant="blue" size="small" fullWidth>
        Удалить
      </Button>
      <Button variant="white" size="small" fullWidth>
        Отмена
      </Button>
    </div>
  );
};
