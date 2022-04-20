import { createSelector } from "reselect";
import { getLaptops } from "../selectors/laptopsSelector";

export const getSelectedLaptops = ({ selectedLaptops }) => selectedLaptops;

export const getSelectedLaptopsCount = createSelector(
  getSelectedLaptops,
  (selectedLaptops) => selectedLaptops.length
);

export const getLaptopsCount = createSelector(
  getLaptops,
  (laptops) => laptops.length
);

export const getIsAllSelectedLaptops = createSelector(
  getSelectedLaptopsCount,
  getLaptopsCount,
  (selectedLaptopsCount, laptopsCount) => selectedLaptopsCount === laptopsCount
);
