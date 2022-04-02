import cx from "classnames";
import styles from "./Radio.module.css";

export const Radio = ({className, ...props}) => {
  return <input className={cx(styles.radio, className)} type="radio" {...props} />;
};
