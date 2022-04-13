import { combineReducers } from "redux";

import laptops from "./laptops";
import searchLine from "./searchLine";
import filter from "./filter";
import isLoading from "./isLoading";

export default combineReducers({
  filter,
  isLoading,
  laptops,
  searchLine,
});
