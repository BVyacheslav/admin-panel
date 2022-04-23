import cx from "classnames";
import { ReactComponent as ArrowIcon } from "icons/v_arrow.svg";

import styles from "./TableCell.module.css";

export const TableCell = ({
  className,
  children,
  sorting,
  sortingOrder,
  ...props
}) => {
  const arrowIconClass = cx(styles.arrowIcon, {
    [styles.reverseSort]: sortingOrder === "desc",
  });

  return (
    <div className={cx(styles.tableCell, className)} {...props}>
      <span>{children}</span>
      {sorting && <ArrowIcon className={arrowIconClass} />}
    </div>
  );
};
