import cx from "classnames";

import { ReactComponent as DeleteIcon } from "../../icons/x-medium.svg";
import { ReactComponent as LockedIcon } from "../../icons/locked.svg";
import { ReactComponent as SearchIcon } from "../../icons/search.svg";

import styles from "./Input.module.css";

export const Input = ({
  children,
  className,
  value,
  defaultValue,
  disabled,
  error,
  search,
  ...props
}) => {
  const inputClass = cx(styles.input, {
    [styles.error]: error,
    [styles.locked]: disabled,
    [styles.search]: search,
  });

  return (
    <div className={cx(styles.inputWrapper, className)}>
      <input
        className={inputClass}
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
        {...props}
      />
      {(value || defaultValue) && !disabled && (
        <button className={styles.deleteIcon}>
          <DeleteIcon />
        </button>
      )}
      {disabled && <LockedIcon className={styles.lockedIcon} />}
      {search && <SearchIcon className={styles.searchIcon} />}
    </div>
  );
};
