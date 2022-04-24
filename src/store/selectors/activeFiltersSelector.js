export const getActiveFilter = ({ activeFilter }) => activeFilter;

export const getIsActiveFilter = ({ activeFilter }) =>
  Object.values(activeFilter).some((filter) => filter !== "");
