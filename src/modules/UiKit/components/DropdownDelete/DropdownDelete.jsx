import { Button } from "components";
import cx from "classnames";
import styles from "./DropdownDelete.module.css";

export const DropdownDelete = ({ className }) => {
  return (
    <div className={cx(styles.dropdown, className)}>
      <span className={styles.title}> Удалить n записей? </span>
      <Button
        className={styles.buttonBox}
        variant="blue"
        size="small"
        fullWidth
      >
        Удалить
      </Button>
      <Button variant="white" size="small" fullWidth>
        Отмена
      </Button>
    </div>
  );
};
