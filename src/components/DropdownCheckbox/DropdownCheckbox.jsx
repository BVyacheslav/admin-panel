import { useState } from "react";
import { CheckboxWithLabel } from "../CheckboxWithLabel/CheckboxWithLabel";
import cx from "classnames";
import styles from "./DropdownCheckbox.module.css";

const STATUSES = [
  { label: "Новый", value: "Новый" },
  { label: "Расчет", value: "Расчет" },
  { label: "Подтвержден", value: "Подтвержден" },
  { label: "Отложен", value: "Отложен" },
  { label: "Выполнен", value: "Выполнен" },
  { label: "Отменен", value: "Отменен" },
];

const xor = (arr, item) =>
  arr.includes(item) ? arr.filter((i) => i !== item) : arr.concat(item);

export const DropdownCheckbox = ({ className, ...props }) => {
  const [checkChoices, setCheckChoices] = useState([]);

  const handleChange = ({ target: { value } }) => {
    setCheckChoices(xor(checkChoices, value));
  };

  return (
    <div className={cx(styles.dropdown, className)}>
      {STATUSES.map((status) => (
        <CheckboxWithLabel
          key={status.value}
          value={status.value}
          checked={checkChoices.includes(status.value)}
          onChange={handleChange}
          label={status.label}
        />
      ))}
    </div>
  );
};
