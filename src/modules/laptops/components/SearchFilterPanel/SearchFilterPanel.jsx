import { Input, Button } from "components";
import cx from "classnames";

import { ReactComponent as FilterIcon } from "icons/filter.svg";
import { ReactComponent as RefreshIcon } from "icons/refresh.svg";

import styles from "./SearchFilterPanel.module.css";

export const SearchFilterPanel = ({
  className,
  value,
  onChange,
  onClear,
  onClearFilters,
  onShowFilters,
  isActiveFilter,
}) => {
  const buttonClass = cx(className, {
    [styles.hideClearFilters]: !isActiveFilter,
  });

  return (
    <div className={cx(styles.searchFilterPanel, className)}>
      <div className={styles.searchFilter}>
        <Input
          className={styles.search}
          name="search"
          search
          value={value}
          placeholder="Номер или бренд"
          onClear={onClear}
          onChange={onChange}
        />
        <Button
          variant="white"
          size="medium"
          icon={FilterIcon}
          onClick={onShowFilters}
        >
          Фильтры
        </Button>
        <Button
          className={buttonClass}
          variant="blue"
          size="medium"
          onClick={onClearFilters}
        >
          Сбросить фильтры
        </Button>
      </div>
      <Button variant="blue" size="medium" icon={RefreshIcon}>
        Загрузка
      </Button>
    </div>
  );
};
