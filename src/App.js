import { useState } from "react";
import { InputWithLabel } from "./components/InputWithLabel/InputWithLabel";
import { Input } from "./components/Input/Input";
import { Checkbox } from "./components/Checkbox/Checkbox";
import { Radio } from "./components/Radio/Radio";
import { Button } from "./components/Button/Button";
import { CheckboxWithLabel } from "./components/CheckboxWithLabel/CheckboxWithLabel";
import { RadioWithLabel } from "./components/RadioWithLabel/RadioWithLabel";

import { ReactComponent as CheckmarkIcon } from "./icons/checkmark.svg";
import { ReactComponent as SunIcon } from "./icons/sun.svg";
import { ReactComponent as MoonIcon } from "./icons/moon.svg";

import "./style/reset.css";
import "./style/input.css";
import "./style/search-bar.css";
import "./style/checkbox-radio.css";
import "./style/button.css";
import "./style/dropdown.css";

function App() {
  const dropdownCheckbox = [
    { name: "Новый", checked: false },
    { name: "Расчет", checked: false },
    { name: "Подтвержден", checked: false },
    { name: "Отложен", checked: false },
    { name: "Выполнен", checked: false },
    { name: "Отменен", checked: false },
  ];

  const [radioChoice, setRadioChoice] = useState("dropdownChoice3");
  const [checkChoices, setCheckChoices] = useState(dropdownCheckbox);

  function handleChangeRadio(e) {
    setRadioChoice(e.target.id);
  }

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
    <div className="App">
      <div class="wrapper">
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
          locked
          disabled
        />
      </div>

      <div class="wrapper__search-bar">
        <Input search placeholder="Номер заказа или ФИО" />
        <Input search defaultValue="50744" placeholder="Номер заказа или ФИО" />
      </div>

      <div class="wrapper__checkbox">
        <Checkbox />
        <Checkbox defaultChecked />
      </div>

      <div class="wrapper__radio">
        <Radio name="value" id="valueChoice1" />
        <Radio name="value" id="valueChoice2" defaultChecked />
      </div>

      <div class="wrapper__button">
        <div class="button-box">
          <Button variant="white" size="medium" icon={CheckmarkIcon} buttonBox>
            Text here
          </Button>
          <Button variant="white" size="medium" buttonBox>
            Text here
          </Button>
          <Button variant="white" size="medium" icon={CheckmarkIcon}></Button>
        </div>

        <div class="button-box">
          <Button variant="blue" size="medium" icon={CheckmarkIcon} buttonBox>
            Text here
          </Button>
          <Button variant="blue" size="medium" buttonBox>
            Text here
          </Button>
          <Button variant="blue" size="medium" icon={CheckmarkIcon}></Button>
        </div>

        <div class="button-box">
          <Button variant="black" size="medium" icon={CheckmarkIcon} buttonBox>
            Text here
          </Button>
          <Button variant="black" size="medium" buttonBox>
            Text here
          </Button>
          <Button variant="black" size="medium" icon={CheckmarkIcon}></Button>
        </div>

        <div class="button-box">
          <Button variant="white" size="small" icon={CheckmarkIcon} buttonBox>
            Text here
          </Button>
          <Button variant="white" size="small" buttonBox>
            Text here
          </Button>
          <Button variant="white" size="small" icon={CheckmarkIcon}></Button>
        </div>

        <div class="button-box">
          <Button variant="blue" size="small" icon={CheckmarkIcon} buttonBox>
            Text here
          </Button>
          <Button variant="blue" size="small" buttonBox>
            Text here
          </Button>
          <Button variant="blue" size="small" icon={CheckmarkIcon}></Button>
        </div>
      </div>

      <div class="wrapper__dropdown">
        <div class="wrapper__elements">
          <div class="dropdown">
            {checkChoices.map((checkChoice, index) => (
              <CheckboxWithLabel
                key={checkChoice.name}
                checked={checkChoice.checked}
                onChange={() => handleChangeCheck(index)}
                label={checkChoice.name}
                index={index}
              />
            ))}
          </div>

          <div class="dropdown">
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
        </div>

        <div class="wrapper__elements wrapper__elements_space-between">
          <div class="dropdown dropdown_page-number">
            <InputWithLabel
              label="Номер страницы"
              placeholder="Введите номер"
            />
          </div>

          <div class="dropdown dropdown_buttons">
            <label> Удалить n записей? </label>
            <Button variant="blue" size="small" fullWidth>
              Удалить
            </Button>
            <Button variant="white" size="small" fullWidth>
              Отмена
            </Button>
          </div>

          <div class="dropdown dropdown_buttons">
            <label> Выберите тему </label>
            <Button variant="blue" size="small" icon={SunIcon} fullWidth>
              Светлая
            </Button>
            <Button variant="white" size="small" icon={MoonIcon} fullWidth>
              Темная
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
