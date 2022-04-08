import { Button } from "../../../../components/Button/Button";
import { ReactComponent as SunIcon } from "../../../../icons/sun.svg";
import { ReactComponent as MoonIcon } from "../../../../icons/moon.svg";
import cx from "classnames";
import styles from "./DropdownSelectTheme.module.css";

export const DropdownSelectTheme = ({ className }) => {
  return (
    <div className={cx(styles.dropdown, className)}>
      <span className={styles.title}> Выберите тему </span>
      <Button
        className={styles.buttonBox}
        variant="blue"
        size="small"
        icon={SunIcon}
        fullWidth
      >
        Светлая
      </Button>
      <Button variant="white" size="small" icon={MoonIcon} fullWidth>
        Темная
      </Button>
    </div>
  );
};
