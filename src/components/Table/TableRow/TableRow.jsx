import cx from "classnames";

import styles from "./TableRow.module.css";

export const TableRow = ({ className, children }) => {
  const tableRowClass = cx(styles.tableRow, className, {});

  return <div className={tableRowClass}>{children}</div>;
};
