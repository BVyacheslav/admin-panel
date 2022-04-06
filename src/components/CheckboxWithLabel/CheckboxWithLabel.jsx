import cx from "classnames";
import { Checkbox } from "../Checkbox/Checkbox";
import styles from "./CheckboxWithLabel.module.css";

export const CheckboxWithLabel = ({ className, label, ...props }) => {
  const { checked } = props;

  const checkboxWithLabelClass = cx(styles.label, className, {
    [styles.checked]: checked,
  });

  return (
    <label className={checkboxWithLabelClass}>
      <Checkbox className={styles.checkbox} {...props} />
      {label}
    </label>
  );
};
