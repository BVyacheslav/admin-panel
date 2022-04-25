import cx from "classnames";
import { ReactComponent as ArrowIcon } from "icons/v_arrow.svg";

import styles from "./TableCell.module.css";

export const TableCell = ({
  className,
  children,
  sorting,
  sortingOrder,
  status,
  ...props
}) => {
  const tableCellClass = cx(className, styles.tableCell, {
    [styles.inStock]: status === "В наличии",
    [styles.outOfStock]: status === "Отсутствует",
  });

  const arrowIconClass = cx(styles.arrowIcon, {
    [styles.reverseSort]: sortingOrder === "desc",
  });

  return (
    <div className={tableCellClass} {...props}>
      <span>{children}</span>
      {sorting && <ArrowIcon className={arrowIconClass} />}
    </div>
  );
};
