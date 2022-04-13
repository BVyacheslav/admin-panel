import { Input, Button } from "../";
import cx from "classnames";

import { ReactComponent as FilterIcon } from "../../icons/filter.svg";
import { ReactComponent as RefreshIcon } from "../../icons/refresh.svg";

import styles from "./SearchFilterPanel.module.css";

export const SearchFilterPanel = ({ value, className, onChange, onClear, ...props }) => {
  return (
    <div className={cx(styles.searchFilterPanel, className)}>
      <div className={styles.searchFilter}>
        <Input
          {...props}
          className={styles.search}
          search
          value={value}
          placeholder="Номер или бренд"
          onClear={onClear}
          onChange={onChange}
        />
        <Button variant="white" size="medium" icon={FilterIcon}>
          Фильтры
        </Button>
        <Button variant="blue" size="medium">
          Сбросить фильтры
        </Button>
      </div>
      <Button variant="blue" size="medium" icon={RefreshIcon}>
        Загрузка
      </Button>
    </div>
  );
};
