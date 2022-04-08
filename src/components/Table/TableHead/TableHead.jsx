import cx from "classnames";

import styles from "./TableHead.module.css";

export const TableHead = ({ className, children, ...props }) => {
  const tableHeadClass = cx(styles.tableHead, className);

  return <div className={tableHeadClass}>{children}</div>;
};
