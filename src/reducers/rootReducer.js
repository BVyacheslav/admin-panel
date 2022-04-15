import { combineReducers } from "redux";

import laptops from "./laptops";
import searchLine from "./searchLine";

export default combineReducers({
  laptops,
  searchLine,
});
