import cx from "classnames";
import styles from "./Input.module.css";

export const Input = ({ 
  children, 
  className, 
  label = 'Дата и время заказа',
  placeholder = 'Введите',
  value,
  error,
  locked,
  icon,
  ...props }) => {

  const blockClass = cx(styles._, {
    [styles.error]: error,
    [styles.locked]: locked,
    [className]: !!className,
  });

  return (
  <div class={blockClass}>
    <label class={styles.label} for="input">
      {label}
    </label>
    <div class={styles.inputWrapper}>
      <input
        id="input"
        class={styles.input}
        value={value}
        placeholder={placeholder}
      />
      {error && <button class={styles.delete}>
        {icon}
      </button>}
      {locked && icon}
    </div>
  </div>
);

}
