import cx from "classnames";
import { Input } from "../Input/Input";

import styles from "./InputWithLabel.module.css";

export const InputWithLabel = ({ children, className, label, error, ...props }) => {
  const { value, defaultValue, disabled } = props;

  return (
    <label className={cx(styles.label, className)}>
      {label}
      <Input
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
        error={error}
        {...props}
      />
    </label>
  );
};
