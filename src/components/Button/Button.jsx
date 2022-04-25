import cx from "classnames";

import styles from "./Button.module.css";

export const Button = ({
  children,
  className,
  variant,
  icon: Icon,
  size,
  fullWidth,
  ...props
}) => {
  const buttonClass = cx(styles.button, className, {
    [styles[`${variant}`]]: true,
    [styles[`${size}`]]: true,
    [styles.onlyIcon]: !children && Icon,
    [styles.fullWidth]: fullWidth,
  });

  return (
    <button className={buttonClass} {...props}>
      {Icon && <Icon className={styles.icon} />}
      {children && <span className={styles.text}>{children}</span>}
    </button>
  );
};
