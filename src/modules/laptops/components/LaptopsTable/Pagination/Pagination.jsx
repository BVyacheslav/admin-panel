import { Button } from "components/";

import styles from "./Pagination.module.css";

export const Pagination = ({ onSetPage, laptopPages }) => {
  const { pages, activePage } = laptopPages;
  return (
    <div className={styles.pagination}>
      {pages.map((page) => (
        <Button
          variant={page === activePage ? "white" : "blue"}
          size="small"
          key={page}
          onClick={onSetPage(page)}
        >
          {page}
        </Button>
      ))}
    </div>
  );
};
