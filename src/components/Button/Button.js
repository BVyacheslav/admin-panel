import cx from "classnames";
import styles from "./Button.module.css";

export const Button = ({ children, className, ...props }) => (
  <div className={cx(styles._, { [className]: !!className })} {...props}>
    {children}
  </div>
);
