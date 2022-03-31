import "./style/reset.css";
import "./style/input.css";
import "./style/search-bar.css";
import "./style/checkbox-radio.css";
import "./style/button.css";
import "./style/dropdown.css";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <div className="text-field">
          <label className="text-field__label" htmlFor="text-field__input">
            Дата и время заказа
          </label>
          <div className="text-field__input-wrapper">
            <input
              id="text-field__input"
              className="text-field__input"
              placeholder="Введите"
            />
          </div>
        </div>

        <div className="text-field">
          <label className="text-field__label" htmlFor="text-field_error">
            Дата и время заказа
          </label>
          <div className="text-field__input-wrapper">
            <input
              id="text-field_error"
              className="text-field__input text-field_error"
              value="06.12.2021"
              placeholder="Введите"
            />
            <button className="text-field__delete">
              <svg
                viewBox="0 0 16 16"
                fill="none"
                stroke="#BAD8F5"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.5 3.5L3.5 12.5M3.5 3.5L12.5 12.5" fill="none" />
              </svg>
            </button>
          </div>
        </div>

        <div className="text-field">
          <label className="text-field__label" htmlFor="text-field_locked">
            Дата и время заказа
          </label>
          <div className="text-field__input-wrapper">
            <input
              id="text-field_locked"
              className="text-field__input text-field_locked"
              placeholder="Введите"
              value="06.12.2021"
              disabled
            />
            <svg
              className="text-field__locked-icon"
              viewBox="0 0 16 16"
              fill="#000000"
              stroke="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4 5C4 2.79086 5.79086 1 8 1C10.2091 1 12 2.79086 12 5V7C13.1046 7 14 7.89543 14 9V13C14 14.1046 13.1046 15 12 15H4C2.89543 15 2 14.1046 2 13V9C2 7.89543 2.89543 7 4 7V5ZM10 5V7H6V5C6 3.89543 6.89543 3 8 3C9.10457 3 10 3.89543 10 5Z"
                stroke="none"
              />
              <path
                d="M12 5C12 2.8 10.2 1 8 1C5.8 1 4 2.8 4 5L4 9H6V5C6 3.75 7 3 8 3C9 3 10 3.75 10 5V9H12V5Z"
                stroke="none"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="wrapper__search-bar">
        <div className="search-bar">
          <div className="search-bar__input-wrapper">
            <svg
              className="search-bar__icon"
              viewBox="0 0 16 16"
              fill="none"
              stroke="#459DF5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.036 10.036a5 5 0 1 0-7.071-7.072 5 5 0 0 0 7.07 7.072Zm0 0L14 14m0 0 .5-.5-3-3M14 14l-.5.5-3-3" />
            </svg>
            <input
              className="search-bar__input"
              placeholder="Номер заказа или ФИО"
            />
          </div>
        </div>

        <div className="search-bar">
          <div className="search-bar__input-wrapper">
            <svg
              className="search-bar__icon"
              viewBox="0 0 16 16"
              fill="none"
              stroke="#459DF5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.036 10.036a5 5 0 1 0-7.071-7.072 5 5 0 0 0 7.07 7.072Zm0 0L14 14m0 0 .5-.5-3-3M14 14l-.5.5-3-3" />
            </svg>
            <input
              className="search-bar__input"
              value="50744"
              placeholder="Номер заказа или ФИО"
            />
            <button className="search-bar__delete">
              <svg
                viewBox="0 0 16 16"
                fill="none"
                stroke="#BAD8F5"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.5 3.5L3.5 12.5M3.5 3.5L12.5 12.5" fill="none" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="wrapper__checkbox">
        <div className="checkbox">
          <input type="checkbox" className="checkbox__input" id="valueCheck1" />
          <label className="checkbox__label" htmlFor="valueCheck1">
            <svg
              className="checkbox__icon"
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
          </label>
        </div>

        <div className="checkbox">
          <input
            type="checkbox"
            className="checkbox__input"
            id="valueCheck2"
            checked
          />

          <label className="checkbox__label" htmlFor="valueCheck2">
            <svg
              className="checkbox__icon"
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
          </label>
        </div>
      </div>

      <div className="wrapper__radio">
        <div className="radio">
          <input
            type="radio"
            name="value"
            className="radio__input"
            id="valueChoice1"
          />
          <label className="radio__label" htmlFor="valueChoice1">
            <svg
              className="radio__icon"
              viewBox="0 0 16 16"
              fill="#ffffff"
              stroke="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8" cy="8" r="4" stroke="none" />
            </svg>
          </label>
        </div>

        <div className="radio">
          <input
            type="radio"
            name="value"
            className="radio__input"
            id="valueChoice2"
            checked
          />
          <label className="radio__label" htmlFor="valueChoice2">
            <svg
              className="radio__icon"
              viewBox="0 0 16 16"
              fill="#ffffff"
              stroke="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8" cy="8" r="4" stroke="none" />
            </svg>
          </label>
        </div>
      </div>

      <div className="wrapper__button">
        <div className="button-box">
          <button className="button button_white button_medium button-box__button">
            <svg
              className="icon"
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
            <span className="button__text">Text here</span>
          </button>

          <button className="button button_white button_medium button-box__button">
            <span className="button__text">Text here</span>
          </button>

          <button className="button button_white button_only-icon button-box__button">
            <svg
              className="icon"
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

        <div className="button-box">
          <button className="button button_blue button_medium button-box__button">
            <svg
              className="icon"
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
            <span className="button__text">Text here</span>
          </button>

          <button className="button button_blue button_medium button-box__button">
            <span className="button__text">Text here</span>
          </button>

          <button className="button button_blue button_only-icon">
            <svg
              className="icon"
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

        <div className="button-box">
          <button className="button button_black button_medium button-box__button">
            <svg
              className="icon"
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
            <span className="button__text">Text here</span>
          </button>

          <button className="button button_black button_medium button-box__button">
            <span className="button__text">Text here</span>
          </button>

          <button className="button button_black button_only-icon">
            <svg
              className="icon"
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

        <div className="button-box">
          <button className="button button_white button_small button-box__button">
            <svg
              className="icon"
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
            <span className="button__text">Text here</span>
          </button>

          <button className="button button_white button_small button-box__button">
            <span className="button__text">Text here</span>
          </button>

          <button className="button button_white button_only-icon-small">
            <svg
              className="icon"
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

        <div className="button-box">
          <button className="button button_blue button_small button-box__button">
            <svg
              className="icon"
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
            <span className="button__text">Text here</span>
          </button>

          <button className="button button_blue button_small button-box__button">
            <span className="button__text">Text here</span>
          </button>

          <button className="button button_blue button_only-icon-small">
            <svg
              className="icon"
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

      <div className="wrapper__dropdown">
        <div className="wrapper__elements">
          <div className="dropdown">
            <div className="checkbox">
              <input
                type="checkbox"
                className="checkbox__input"
                id="dropdownCheck1"
              />
              <label
                className="checkbox__label checkbox__label_dropdown"
                htmlFor="dropdownCheck1"
              >
                <svg
                  className="checkbox__icon"
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

            <div className="checkbox">
              <input
                type="checkbox"
                className="checkbox__input"
                id="dropdownCheck2"
              />
              <label
                className="checkbox__label checkbox__label_dropdown"
                htmlFor="dropdownCheck2"
              >
                <svg
                  className="checkbox__icon"
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

            <div className="checkbox">
              <input
                type="checkbox"
                className="checkbox__input"
                id="dropdownCheck3"
                checked
              />
              <label
                className="checkbox__label checkbox__label_dropdown"
                htmlFor="dropdownCheck3"
              >
                <svg
                  className="checkbox__icon"
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

            <div className="checkbox">
              <input
                type="checkbox"
                className="checkbox__input"
                id="dropdownCheck4"
              />
              <label
                className="checkbox__label checkbox__label_dropdown"
                htmlFor="dropdownCheck4"
              >
                <svg
                  className="checkbox__icon"
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

            <div className="checkbox">
              <input
                type="checkbox"
                className="checkbox__input"
                id="dropdownCheck5"
              />
              <label
                className="checkbox__label checkbox__label_dropdown"
                htmlFor="dropdownCheck5"
              >
                <svg
                  className="checkbox__icon"
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

            <div className="checkbox">
              <input
                type="checkbox"
                className="checkbox__input"
                id="dropdownCheck6"
              />
              <label
                className="checkbox__label checkbox__label_dropdown"
                htmlFor="dropdownCheck6"
              >
                <svg
                  className="checkbox__icon"
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

          <div className="dropdown">
            <div className="radio">
              <input
                type="radio"
                name="dropdown-radio"
                className="radio__input"
                id="dropdownChoice1"
              />
              <label className="radio__label_dropdown" htmlFor="dropdownChoice1">
                Новый
              </label>
            </div>

            <div className="radio">
              <input
                type="radio"
                name="dropdown-radio"
                className="radio__input"
                id="dropdownChoice2"
              />
              <label className="radio__label_dropdown" htmlFor="dropdownChoice2">
                Расчет
              </label>
            </div>

            <div className="radio">
              <input
                type="radio"
                name="dropdown-radio"
                className="radio__input"
                id="dropdownChoice3"
                checked
              />
              <label className="radio__label_dropdown" htmlFor="dropdownChoice3">
                Подтвержден
              </label>
            </div>

            <div className="radio">
              <input
                type="radio"
                name="dropdown-radio"
                className="radio__input"
                id="dropdownChoice4"
              />
              <label className="radio__label_dropdown" htmlFor="dropdownChoice4">
                Отложен
              </label>
            </div>

            <div className="radio">
              <input
                type="radio"
                name="dropdown-radio"
                className="radio__input"
                id="dropdownChoice5"
              />
              <label className="radio__label_dropdown" htmlFor="dropdownChoice5">
                Выложен
              </label>
            </div>

            <div className="radio">
              <input
                type="radio"
                name="dropdown-radio"
                className="radio__input"
                id="dropdownChoice6"
              />
              <label className="radio__label_dropdown" htmlFor="dropdownChoice6">
                Отменен
              </label>
            </div>
          </div>
        </div>

        <div className="wrapper__elements wrapper__elements_space-between">
          <div className="dropdown dropdown_page-number">
            <div className="text-field">
              <label
                className="text-field__label"
                htmlFor="text-field__input_page-number"
              >
                Номер страницы
              </label>
              <input
                id="text-field__input_page-number"
                className="text-field__input"
                placeholder="Введите номер"
              />
            </div>
          </div>

          <div className="dropdown dropdown_buttons">
            <label> Удалить n записей? </label>
            <button className="button button_blue button_small button_full">
              Удалить
            </button>
            <button className="button button_white button_small button_full">
              Отмена
            </button>
          </div>

          <div className="dropdown dropdown_buttons">
            <label> Выберите тему </label>
            <button className="button button_blue button_small button_full">
              <svg
                className="icon"
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
            <button className="button button_white button_small button_full">
              <svg
                className="icon"
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
