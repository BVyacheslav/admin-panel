import cx from "classnames";
import { Checkbox } from '../Checkbox/Checkbox';
import styles from "./CheckboxWithLabel.module.css";

export const CheckboxWithLabel = ({ className, label, ...props }) => {

  return (
    <label className={cx(styles.label, className)}>
      <Checkbox
        className={styles.checkbox}
        {...props}
      />
      {label}
    </label>
  );
};