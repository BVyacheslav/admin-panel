import cx from "classnames";

import styles from "./TableFooter.module.css";

export const TableFooter = ({ className, children }) => {
  const tableHeadClass = cx(styles.tableFooter, className);

  return <div className={tableHeadClass}>{children}</div>;
};
