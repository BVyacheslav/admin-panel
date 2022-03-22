import cx from "classnames";
import styles from "./Checkbox.module.css";

export const Checkbox = ({ children, className, ...props }) => (
  <div className={cx(styles._, { [className]: !!className })} {...props}>
    {children}
  </div>
);
