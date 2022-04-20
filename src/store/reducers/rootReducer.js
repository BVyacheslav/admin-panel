import { combineReducers } from "redux";

import laptopsReducer from "./laptopsReducer";
import searchLineReducer from "./searchLineReducer";
import showFiltersReducer from "./showFiltersReducer";
import filtersReducer from "./filtersReducer";
import sortingReducer from "./sortingReducer";

export default combineReducers({
  laptopsReducer,
  searchLineReducer,
  showFiltersReducer,
  filtersReducer,
  sortingReducer,
});
