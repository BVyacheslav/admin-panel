import cx from "classnames";
import { Input } from "../Input/Input";

import styles from "./TextField.module.css";

export const TextField = ({ children, className, label, ...props }) => {
  return (
    <label className={cx(styles.label, className)}>
      {label}
      <Input {...props} />
    </label>
  );
};
