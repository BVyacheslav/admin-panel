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
            <CheckboxWithLabel label="Новый" />
            <CheckboxWithLabel label="Расчет" />
            <CheckboxWithLabel label="Подтвержден" defaultChecked />
            <CheckboxWithLabel label="Отложен" />
            <CheckboxWithLabel label="Выполнен" />
            <CheckboxWithLabel label="Отменен" />
          </div>

          <div class="dropdown">
            <RadioWithLabel label="Новый" />
            <RadioWithLabel label="Расчет" />
            <RadioWithLabel label="Подтвержден" defaultChecked />
            <RadioWithLabel label="Отложен" />
            <RadioWithLabel label="Выполнен" />
            <RadioWithLabel label="Отменен" />
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
            {/* <button class="button button_white button_small button_full">
              <svg
                class="icon"
                viewBox="0 0 16 16"
                fill="#8055FF"
                stroke="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 15C12.0269 15 15.5 11.5021 15 7.5C14.7688 10.0468 12.6071 12 10 12C7.23858 12 5 9.76142 5 7C5 4.23858 7.23858 2 10 2C11 2 12 2.5 12 2.5C11 1.5 10 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z"
                  stroke="none"
                />
              </svg>
              Темная
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
