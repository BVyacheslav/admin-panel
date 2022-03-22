import cx from "classnames";
import styles from "./Radio.module.css";

export const Radio = ({ children, className, ...props }) => (
  <div className={cx(styles._, { [className]: !!className })} {...props}>
    {children}
  </div>
);
