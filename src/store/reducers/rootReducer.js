import { combineReducers } from "redux";

import { laptopsReducer } from "./laptopsReducer";
import { searchLineReducer } from "./searchLineReducer";
import { showFiltersReducer } from "./showFiltersReducer";
import { filtersReducer } from "./filtersReducer";
import { sortingReducer } from "./sortingReducer";
import { activeFilterReducer } from "./activeFilterReducer";
import { selectedLaptopsReducer } from "./selectedLaptopsReducer";

export default combineReducers({
  laptops: laptopsReducer,
  searchLine: searchLineReducer,
  showFilters: showFiltersReducer,
  filters: filtersReducer,
  sorting: sortingReducer,
  activeFilter: activeFilterReducer,
  selectedLaptops: selectedLaptopsReducer,
});
