import cx from "classnames";
import styles from "./Dropdown.module.css";

export const Dropdown = ({ children, className, ...props }) => (
  <div className={cx(styles._, { [className]: !!className })} {...props}>
    {children}
  </div>
);
