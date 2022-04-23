import { useState } from "react";
import { RadioWithLabel } from "components";
import cx from "classnames";
import styles from "./DropdownRadio.module.css";

export const DropdownRadio = ({
  className,
  status,
  isShowDropdown,
  ...props
}) => {
  const [radioChoice, setRadioChoice] = useState(status ? status : "");

  function handleChangeRadio(e) {
    setRadioChoice(e.target.id);
  }

  const dropdownClass = cx(styles.dropdown, {
    [styles.showDropdown]: isShowDropdown,
    className,
  });

  return (
    <div className={dropdownClass}>
      <RadioWithLabel
        label="В наличии"
        name="dropdownRadio"
        id="В наличии"
        checked={radioChoice === "В наличии"}
        onChange={handleChangeRadio}
        {...props}
      />
      <RadioWithLabel
        className={styles.lastRadio}
        label="Отсутствует"
        name="dropdownRadio"
        id="Отсутствует"
        checked={radioChoice === "Отсутствует"}
        onChange={handleChangeRadio}
        {...props}
      />
    </div>
  );
};
