import cx from "classnames";
import { Radio } from '../Radio/Radio';
import styles from "./RadioWithLabel.module.css";

export const RadioWithLabel = ({ className, label, ...props }) => {

  return (
    <label className={cx(styles.label, className)}>
      <Radio
        className={styles.radio}
        {...props}
      />
      {label}
    </label>
  );
};