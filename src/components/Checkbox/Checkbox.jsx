import cx from "classnames";
import styles from "./Checkbox.module.css";

export const Checkbox = ({className, ...props}) => {
  return <input className={cx(styles.checkbox, className)} type="checkbox" {...props} />;
};
