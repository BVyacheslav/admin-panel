import { createSelector } from "reselect";
import { getAllLaptops } from "../selectors/laptopsSelector";

export const getSelectedLaptops = ({ selectedLaptops }) => selectedLaptops;

export const getSelectedLaptopsCount = createSelector(
  getSelectedLaptops,
  (selectedLaptops) => selectedLaptops.length
);

export const getIsAllSelectedLaptops = createSelector(
  getSelectedLaptops,
  getAllLaptops,
  (selectedLaptops, laptops) => selectedLaptops.length === laptops.length
);
