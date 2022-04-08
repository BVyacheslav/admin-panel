import { useState } from "react";
import { RadioWithLabel } from "../../../../components";
import cx from "classnames";
import styles from "./DropdownRadio.module.css";

export const DropdownRadio = ({ className }) => {
  const [radioChoice, setRadioChoice] = useState("dropdownChoice3");

  function handleChangeRadio(e) {
    setRadioChoice(e.target.id);
  }

  return (
    <div className={cx(styles.dropdown, className)}>
      <RadioWithLabel
        label="Новый"
        name="dropdownRadio"
        id="dropdownChoice1"
        checked={radioChoice === "dropdownChoice1"}
        onChange={handleChangeRadio}
      />
      <RadioWithLabel
        label="Расчет"
        name="dropdownRadio"
        id="dropdownChoice2"
        checked={radioChoice === "dropdownChoice2"}
        onChange={handleChangeRadio}
      />
      <RadioWithLabel
        label="Подтвержден"
        name="dropdownRadio"
        id="dropdownChoice3"
        checked={radioChoice === "dropdownChoice3"}
        onChange={handleChangeRadio}
      />
      <RadioWithLabel
        label="Отложен"
        name="dropdownRadio"
        id="dropdownChoice4"
        checked={radioChoice === "dropdownChoice4"}
        onChange={handleChangeRadio}
      />
      <RadioWithLabel
        label="Выполнен"
        name="dropdownRadio"
        id="dropdownChoice5"
        checked={radioChoice === "dropdownChoice5"}
        onChange={handleChangeRadio}
      />
      <RadioWithLabel
        label="Отменен"
        name="dropdownRadio"
        id="dropdownChoice6"
        checked={radioChoice === "dropdownChoice6"}
        onChange={handleChangeRadio}
      />
    </div>
  );
};
