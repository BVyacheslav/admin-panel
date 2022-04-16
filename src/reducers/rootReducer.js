import { combineReducers } from "redux";

import laptops from "./laptops";
import searchLine from "./searchLine";
import showFilters from "./showFilters";

export default combineReducers({
  laptops,
  searchLine,
  showFilters,
});
