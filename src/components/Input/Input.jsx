import cx from "classnames";

import { ReactComponent as DeleteIcon } from "../../icons/x-medium.svg";
import { ReactComponent as LockedIcon } from "../../icons/locked.svg";

import styles from "./Input.module.css";

export const Input = ({ children, className, value, defaultValue, disabled, error, ...props }) => {

  const inputClass = cx(styles.input, className, {
    [styles.error]: error,
    [styles.locked]: disabled,
  });

  return (
    <div className={styles.inputWrapper}>
      <input class={inputClass} value={value} defaultValue={defaultValue} disabled={disabled} {...props} />
      {(value || defaultValue) && !disabled && (
        <button className={styles.deleteIcon}>
          <DeleteIcon />
        </button>
      )}
      {disabled && <LockedIcon className={styles.lockedIcon} />}
    </div>
  );
};
