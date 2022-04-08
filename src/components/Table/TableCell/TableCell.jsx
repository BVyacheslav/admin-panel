import cx from "classnames";

import styles from "./TableCell.module.css";

export const TableCell = ({ className, children }) => {
  return (
    <div className={cx(styles.tableCell, className)}>
      <label>{children}</label>
    </div>
  );
};
