import { useState } from "react";
import { RadioWithLabel } from "components";
import cx from "classnames";
import styles from "./DropdownRadio.module.css";

export const DropdownRadio = ({
  className,
  status,
  isShowDropdown,
  filterStatus,
  onChangeFilter,
  filters,
  ...props
}) => {
  const [radioChoice, setRadioChoice] = useState(status ? status : "");

  function handleChangeRadio(e) {
    setRadioChoice(e.target.value);
    onChangeFilter && onChangeFilter(e);
  }

  const dropdownClass = cx(styles.dropdown, {
    [styles.showDropdown]: isShowDropdown,
    [styles.filterStatus]: filterStatus,
    className,
  });

  return (
    <div className={dropdownClass}>
      <RadioWithLabel
        label="В наличии"
        name="orderStatus"
        id="В наличии"
        value="В наличии"
        checked={radioChoice === "В наличии"}
        onChange={handleChangeRadio}
        {...props}
      />
      <RadioWithLabel
        className={styles.lastRadio}
        value="Отсутствует"
        label="Отсутствует"
        name="orderStatus"
        id="Отсутствует"
        checked={radioChoice === "Отсутствует"}
        onChange={handleChangeRadio}
        {...props}
      />
    </div>
  );
};
