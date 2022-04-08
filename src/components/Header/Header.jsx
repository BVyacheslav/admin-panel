import cx from "classnames";
import { Button } from "../";
import { ReactComponent as SunIcon } from "../../icons/sun.svg";

import styles from "./Header.module.css";

export const Header = ({ children, className, ...props }) => {
  return (
    <div className={cx(styles.header, className)}>
      <span className={styles.title}>{children}</span>
      <Button variant="blue" size="small" icon={SunIcon}>
        Светлая тема
      </Button>
    </div>
  );
};
