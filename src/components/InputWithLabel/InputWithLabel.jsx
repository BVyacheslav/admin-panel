import { Input } from "../Input/Input";

import styles from "./InputWithLabel.module.css";

export const InputWithLabel = ({
  children,
  className,
  label,
  error,
  search,
  ...props
}) => {
  const { value, defaultValue, disabled } = props;

  return (
    <label className={className}>
      {label}
      <Input
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
        error={error}
        search={search}
        className={styles.input}
        {...props}
      />
    </label>
  );
};
