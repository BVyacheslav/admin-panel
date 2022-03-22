import cx from "classnames";
import styles from "./SearchBar.module.css";

export const SearchBar = ({ children, className, ...props }) => (
  <div className={cx(styles._, { [className]: !!className })} {...props}>
    {children}
  </div>
);
