import { InputWithLabel } from "../components/";
import { Input } from "../components/";
import { Checkbox } from "../components/";
import { Radio } from "../components/";
import { Button } from "../components/";
import { DropdownCheckbox } from "../components/";
import { DropdownRadio } from "../components/";
import { DropdownPageNumber } from "../components/";
import { DropdownDelete } from "../components/";
import { DropdownSelectTheme } from "../components/";

import { ReactComponent as CheckmarkIcon } from "../icons/checkmark.svg";

import cx from "classnames";
import styles from "./UiKit.module.css";

export const UiKit = ({ className, ...props }) => {
  return (
    <div className={cx(styles.wrapper, className)}>
      <div className={styles.wrapperInput}>
        <InputWithLabel label="Дата и время заказа" placeholder="Введите" />
        <InputWithLabel
          label="Дата и время заказа"
          placeholder="Введите"
          defaultValue="06.12.2021"
          error
        />
        <InputWithLabel
          label="Дата и время заказа"
          placeholder="Введите"
          defaultValue="06.12.2021"
          disabled
        />
      </div>

      <div className={styles.wrapperSearchBar}>
        <Input search placeholder="Номер заказа или ФИО" />
        <Input search defaultValue="50744" placeholder="Номер заказа или ФИО" />
      </div>

      <div className={styles.wrapperCheckbox}>
        <Checkbox />
        <Checkbox defaultChecked />
      </div>

      <div className={styles.wrapperRadio}>
        <Radio name="value" id="valueChoice1" />
        <Radio name="value" id="valueChoice2" defaultChecked />
      </div>

      <div className={styles.wrapperButton}>
        <div className={styles.box}>
          <Button
            variant="white"
            size="medium"
            icon={CheckmarkIcon}
            className={styles.buttonBox}
          >
            Text here
          </Button>
          <Button variant="white" size="medium" className={styles.buttonBox}>
            Text here
          </Button>
          <Button variant="white" size="medium" icon={CheckmarkIcon}></Button>
        </div>

        <div className={styles.box}>
          <Button
            variant="blue"
            size="medium"
            icon={CheckmarkIcon}
            className={styles.buttonBox}
          >
            Text here
          </Button>
          <Button variant="blue" size="medium" className={styles.buttonBox}>
            Text here
          </Button>
          <Button variant="blue" size="medium" icon={CheckmarkIcon}></Button>
        </div>

        <div className={styles.box}>
          <Button
            variant="black"
            size="medium"
            icon={CheckmarkIcon}
            className={styles.buttonBox}
          >
            Text here
          </Button>
          <Button variant="black" size="medium" className={styles.buttonBox}>
            Text here
          </Button>
          <Button variant="black" size="medium" icon={CheckmarkIcon}></Button>
        </div>

        <div className={styles.box}>
          <Button
            variant="white"
            size="small"
            icon={CheckmarkIcon}
            className={styles.buttonBox}
          >
            Text here
          </Button>
          <Button variant="white" size="small" className={styles.buttonBox}>
            Text here
          </Button>
          <Button variant="white" size="small" icon={CheckmarkIcon}></Button>
        </div>

        <div className={styles.box}>
          <Button
            variant="blue"
            size="small"
            icon={CheckmarkIcon}
            className={styles.buttonBox}
          >
            Text here
          </Button>
          <Button variant="blue" size="small" className={styles.buttonBox}>
            Text here
          </Button>
          <Button variant="blue" size="small" icon={CheckmarkIcon}></Button>
        </div>
      </div>

      <div className={styles.wrapperDropdown}>
        <div className={styles.wrapperSelectElements}>
          <DropdownCheckbox />
          <DropdownRadio />
        </div>

        <div className={styles.wrapperElements}>
          <DropdownPageNumber />
          <DropdownDelete />
          <DropdownSelectTheme />
        </div>
      </div>
    </div>
  );
};
