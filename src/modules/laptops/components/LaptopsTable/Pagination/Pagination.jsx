import { Button } from "components/";

import styles from "./Pagination.module.css";

export const Pagination = ({ onSetPage, laptopPages }) => {
  return (
    <div className={styles.pagination}>
      {laptopPages.map((page) => (
        <Button
          variant="blue"
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
