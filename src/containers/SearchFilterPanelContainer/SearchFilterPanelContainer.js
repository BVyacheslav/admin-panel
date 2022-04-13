import {useEffect} from "react";
import { SearchFilterPanel } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import {getSearchLine} from "../../selectors/searchLine";
import {createClearSearchLaptopsLine, createSetSearhLaptopsLine, createSearch} from "../../actionCreators/searchLine";
import {getLaptops} from "../../actionCreators/laptops";

const ENTER = 13;

// let timer = null;

export const SearchFilterPanelContainer = () => {
  const searchLine = useSelector(getSearchLine);
  const dispatch = useDispatch();


  const handleChangeSearch = ({ target: { value } }) => {
    dispatch(createSetSearhLaptopsLine(value));

    // TODO: дописать запрос на сервер
    // clearTimeout(timer);
    // timer = setTimeout(() => {
    //   dispatch({
    //     type: 'Отфильтруй',
    //     payload: value
    //   });
    // }, 500);
  };

  const handleClear = () => {
    dispatch(createClearSearchLaptopsLine());
  };

  const handleKeyDown = ({ keyCode }) => {
    if (keyCode === ENTER) {
      dispatch(createSearch(searchLine));
    }
  };

  const handleLoad = () => {
    dispatch(getLaptops());
  };


  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <SearchFilterPanel
      onChange={handleChangeSearch}
      onClear={handleClear}
      onKeyDown={handleKeyDown}
      value={searchLine}
    />
  );
};
