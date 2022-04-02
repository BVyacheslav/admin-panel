import { InputWithLabel } from "./components/InputWithLabel/InputWithLabel";
import { Input } from "./components/Input/Input";
import { Checkbox } from "./components/Checkbox/Checkbox";
import { Radio } from "./components/Radio/Radio";

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
        <Input search />
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
          <button class="button button_white button_medium button-box__button">
            <svg
              class="icon"
              viewBox="0 0 16 16"
              fill="#ffffff"
              stroke="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z"
                stroke="none"
              />
            </svg>
            <span class="button__text">Text here</span>
          </button>

          <button class="button button_white button_medium button-box__button">
            <span class="button__text">Text here</span>
          </button>

          <button class="button button_white button_only-icon button-box__button">
            <svg
              class="icon"
              viewBox="0 0 16 16"
              fill="#ffffff"
              stroke="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z"
                stroke="none"
              />
            </svg>
          </button>
        </div>

        <div class="button-box">
          <button class="button button_blue button_medium button-box__button">
            <svg
              class="icon"
              viewBox="0 0 16 16"
              fill="#ffffff"
              stroke="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z"
                stroke="none"
              />
            </svg>
            <span class="button__text">Text here</span>
          </button>

          <button class="button button_blue button_medium button-box__button">
            <span class="button__text">Text here</span>
          </button>

          <button class="button button_blue button_only-icon">
            <svg
              class="icon"
              viewBox="0 0 16 16"
              fill="#ffffff"
              stroke="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z"
                stroke="none"
              />
            </svg>
          </button>
        </div>

        <div class="button-box">
          <button class="button button_black button_medium button-box__button">
            <svg
              class="icon"
              viewBox="0 0 16 16"
              fill="#ffffff"
              stroke="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z"
                stroke="none"
              />
            </svg>
            <span class="button__text">Text here</span>
          </button>

          <button class="button button_black button_medium button-box__button">
            <span class="button__text">Text here</span>
          </button>

          <button class="button button_black button_only-icon">
            <svg
              class="icon"
              viewBox="0 0 16 16"
              fill="#ffffff"
              stroke="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z"
                stroke="none"
              />
            </svg>
          </button>
        </div>

        <div class="button-box">
          <button class="button button_white button_small button-box__button">
            <svg
              class="icon"
              viewBox="0 0 16 16"
              fill="#ffffff"
              stroke="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z"
                stroke="none"
              />
            </svg>
            <span class="button__text">Text here</span>
          </button>

          <button class="button button_white button_small button-box__button">
            <span class="button__text">Text here</span>
          </button>

          <button class="button button_white button_only-icon-small">
            <svg
              class="icon"
              viewBox="0 0 16 16"
              fill="#ffffff"
              stroke="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z"
                stroke="none"
              />
            </svg>
          </button>
        </div>

        <div class="button-box">
          <button class="button button_blue button_small button-box__button">
            <svg
              class="icon"
              viewBox="0 0 16 16"
              fill="#ffffff"
              stroke="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z"
                stroke="none"
              />
            </svg>
            <span class="button__text">Text here</span>
          </button>

          <button class="button button_blue button_small button-box__button">
            <span class="button__text">Text here</span>
          </button>

          <button class="button button_blue button_only-icon-small">
            <svg
              class="icon"
              viewBox="0 0 16 16"
              fill="#ffffff"
              stroke="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z"
                stroke="none"
              />
            </svg>
          </button>
        </div>
      </div>

      <div class="wrapper__dropdown">
        <div class="wrapper__elements">
          <div class="dropdown">
            <div class="checkbox">
              <input
                type="checkbox"
                class="checkbox__input"
                id="dropdownCheck1"
              />
              <label
                class="checkbox__label checkbox__label_dropdown"
                for="dropdownCheck1"
              >
                <svg
                  class="checkbox__icon"
                  viewBox="0 0 16 16"
                  fill="#ffffff"
                  stroke="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z"
                    stroke="none"
                  />
                </svg>
                Новый
              </label>
            </div>

            <div class="checkbox">
              <input
                type="checkbox"
                class="checkbox__input"
                id="dropdownCheck2"
              />
              <label
                class="checkbox__label checkbox__label_dropdown"
                for="dropdownCheck2"
              >
                <svg
                  class="checkbox__icon"
                  viewBox="0 0 16 16"
                  fill="#ffffff"
                  stroke="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z"
                    stroke="none"
                  />
                </svg>
                Расчет
              </label>
            </div>

            <div class="checkbox">
              <input
                type="checkbox"
                class="checkbox__input"
                id="dropdownCheck3"
                checked
              />
              <label
                class="checkbox__label checkbox__label_dropdown"
                for="dropdownCheck3"
              >
                <svg
                  class="checkbox__icon"
                  viewBox="0 0 16 16"
                  fill="#ffffff"
                  stroke="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z"
                    stroke="none"
                  />
                </svg>
                Подтвержден
              </label>
            </div>

            <div class="checkbox">
              <input
                type="checkbox"
                class="checkbox__input"
                id="dropdownCheck4"
              />
              <label
                class="checkbox__label checkbox__label_dropdown"
                for="dropdownCheck4"
              >
                <svg
                  class="checkbox__icon"
                  viewBox="0 0 16 16"
                  fill="#ffffff"
                  stroke="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z"
                    stroke="none"
                  />
                </svg>
                Отложен
              </label>
            </div>

            <div class="checkbox">
              <input
                type="checkbox"
                class="checkbox__input"
                id="dropdownCheck5"
              />
              <label
                class="checkbox__label checkbox__label_dropdown"
                for="dropdownCheck5"
              >
                <svg
                  class="checkbox__icon"
                  viewBox="0 0 16 16"
                  fill="#ffffff"
                  stroke="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z"
                    stroke="none"
                  />
                </svg>
                Выполнен
              </label>
            </div>

            <div class="checkbox">
              <input
                type="checkbox"
                class="checkbox__input"
                id="dropdownCheck6"
              />
              <label
                class="checkbox__label checkbox__label_dropdown"
                for="dropdownCheck6"
              >
                <svg
                  class="checkbox__icon"
                  viewBox="0 0 16 16"
                  fill="#ffffff"
                  stroke="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z"
                    stroke="none"
                  />
                </svg>
                Отменен
              </label>
            </div>
          </div>

          <div class="dropdown">
            <div class="radio">
              <input
                type="radio"
                name="dropdown-radio"
                class="radio__input"
                id="dropdownChoice1"
              />
              <label class="radio__label_dropdown" for="dropdownChoice1">
                Новый
              </label>
            </div>

            <div class="radio">
              <input
                type="radio"
                name="dropdown-radio"
                class="radio__input"
                id="dropdownChoice2"
              />
              <label class="radio__label_dropdown" for="dropdownChoice2">
                Расчет
              </label>
            </div>

            <div class="radio">
              <input
                type="radio"
                name="dropdown-radio"
                class="radio__input"
                id="dropdownChoice3"
                checked
              />
              <label class="radio__label_dropdown" for="dropdownChoice3">
                Подтвержден
              </label>
            </div>

            <div class="radio">
              <input
                type="radio"
                name="dropdown-radio"
                class="radio__input"
                id="dropdownChoice4"
              />
              <label class="radio__label_dropdown" for="dropdownChoice4">
                Отложен
              </label>
            </div>

            <div class="radio">
              <input
                type="radio"
                name="dropdown-radio"
                class="radio__input"
                id="dropdownChoice5"
              />
              <label class="radio__label_dropdown" for="dropdownChoice5">
                Выложен
              </label>
            </div>

            <div class="radio">
              <input
                type="radio"
                name="dropdown-radio"
                class="radio__input"
                id="dropdownChoice6"
              />
              <label class="radio__label_dropdown" for="dropdownChoice6">
                Отменен
              </label>
            </div>
          </div>
        </div>

        <div class="wrapper__elements wrapper__elements_space-between">
          <div class="dropdown dropdown_page-number">
            <div class="text-field">
              <label
                class="text-field__label"
                for="text-field__input_page-number"
              >
                Номер страницы
              </label>
              <input
                id="text-field__input_page-number"
                class="text-field__input"
                placeholder="Введите номер"
              />
            </div>
          </div>

          <div class="dropdown dropdown_buttons">
            <label> Удалить n записей? </label>
            <button class="button button_blue button_small button_full">
              Удалить
            </button>
            <button class="button button_white button_small button_full">
              Отмена
            </button>
          </div>

          <div class="dropdown dropdown_buttons">
            <label> Выберите тему </label>
            <button class="button button_blue button_small button_full">
              <svg
                class="icon"
                viewBox="0 0 16 16"
                fill="#8055FF"
                strok="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="8" cy="8" r="4" stroke="none" />
                <path d="M15 9L16 8L15 7H13V9H15Z" stroke="none" />
                <path d="M1 9L0 8L1 7H3V9H1Z" stroke="none" />
                <path d="M7 15L8 16L9 15V13H7V15Z" stroke="none" />
                <path d="M7 1L8 0L9 1V3H7V1Z" stroke="none" />
                <path
                  d="M12.5 14H14L14 12.5L12.5 11L11 12.5L12.5 14Z"
                  stroke="none"
                />
                <path d="M2 3.5L2 2L3.5 2L5 3.5L3.5 5L2 3.5Z" stroke="none" />
                <path
                  d="M3.5 14H2L2 12.5L3.5 11L5 12.5L3.5 14Z"
                  stroke="none"
                />
                <path
                  d="M14 3.5V2L12.5 2L11 3.5L12.5 5L14 3.5Z"
                  stroke="none"
                />
              </svg>
              Светлая
            </button>
            <button class="button button_white button_small button_full">
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
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
