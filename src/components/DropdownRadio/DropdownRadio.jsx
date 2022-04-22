import { useState } from "react";
import { RadioWithLabel } from "../";
import cx from "classnames";
import styles from "./DropdownRadio.module.css";

export const DropdownRadio = ({ className, status, ...props }) => {
  const [radioChoice, setRadioChoice] = useState(status ? status : "");

  function handleChangeRadio(e) {
    setRadioChoice(e.target.id);
  }

  return (
    <div className={cx(styles.dropdown, className)}>
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
