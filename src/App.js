import { InputWithLabel } from "./components/InputWithLabel/InputWithLabel";
import { Input } from "./components/Input/Input";
import { Checkbox } from "./components/Checkbox/Checkbox";
import { Radio } from "./components/Radio/Radio";
import { Button } from "./components/Button/Button";
import { DropdownCheckbox } from "./components/DropdownCheckbox/DropdownCheckbox";
import { DropdownRadio } from "./components/DropdownRadio/DropdownRadio";
import { DropdownPageNumber } from "./components/DropdownPageNumber/DropdownPageNumber";
import { DropdownDeleteButtons } from "./components/DropdownDeleteButtons/DropdownDeleteButtons";
import { DropdownSelectTheme } from "./components/DropdownSelectTheme/DropdownSelectTheme";

import { ReactComponent as CheckmarkIcon } from "./icons/checkmark.svg";

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
          <DropdownCheckbox />
          <DropdownRadio />
        </div>

        <div class="wrapper__elements wrapper__elements_space-between">
          <DropdownPageNumber />
          <DropdownDeleteButtons />
          <DropdownSelectTheme />
        </div>
      </div>
    </div>
  );
}

export default App;
