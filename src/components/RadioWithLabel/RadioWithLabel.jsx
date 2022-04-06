import cx from "classnames";
import { Radio } from "../Radio/Radio";
import styles from "./RadioWithLabel.module.css";

export const RadioWithLabel = ({ className, label, ...props }) => {
  const { checked } = props;

  const radioWithLabelClass = cx(styles.label, className, {
    [styles.checked]: checked,
  });

  return (
    <label className={radioWithLabelClass}>
      <Radio className={styles.radio} {...props} />
      {label}
    </label>
  );
};
