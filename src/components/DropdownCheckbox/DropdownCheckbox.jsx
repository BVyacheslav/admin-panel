import { useState } from "react";
import { CheckboxWithLabel } from "../CheckboxWithLabel/CheckboxWithLabel";
import cx from "classnames";
import styles from "./DropdownCheckbox.module.css";

export const DropdownCheckbox = ({ className, ...props }) => {
  const dropdownCheckboxState = [
    { label: "Новый", checked: false },
    { label: "Расчет", checked: false },
    { label: "Подтвержден", checked: false },
    { label: "Отложен", checked: false },
    { label: "Выполнен", checked: false },
    { label: "Отменен", checked: false },
  ];

  const [checkChoices, setCheckChoices] = useState(dropdownCheckboxState);

  const handleChangeCheck = (index) => {
    setCheckChoices(
      checkChoices.map((checkbox, currentIndex) =>
        currentIndex === index
          ? { ...checkbox, checked: !checkbox.checked }
          : checkbox
      )
    );
  };

  return (
    <div className={cx(styles.dropdown, className)}>
      {checkChoices.map((checkChoice, index) => (
        <CheckboxWithLabel
          key={checkChoice.label}
          checked={checkChoice.checked}
          onChange={() => handleChangeCheck(index)}
          label={checkChoice.label}
          index={index}
          {...props}
        />
      ))}
    </div>
  );
};
