import cx from "classnames";

import styles from "./TableBody.module.css";

export const TableBody = ({ className, children }) => {
  return <div className={cx(styles.tableBody, className)}>{children}</div>;
};
