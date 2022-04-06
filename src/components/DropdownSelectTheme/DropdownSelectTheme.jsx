import { Button } from "../Button/Button";
import { ReactComponent as SunIcon } from "../../icons/sun.svg";
import { ReactComponent as MoonIcon } from "../../icons/moon.svg";
import cx from "classnames";
import styles from "./DropdownSelectTheme.module.css";

export const DropdownSelectTheme = ({ className, ...props }) => {
  return (
    <div className={cx(styles.dropdown, className)}>
      <label> Выберите тему </label>
      <Button variant="blue" size="small" icon={SunIcon} fullWidth>
        Светлая
      </Button>
      <Button variant="white" size="small" icon={MoonIcon} fullWidth>
        Темная
      </Button>
    </div>
  );
};
