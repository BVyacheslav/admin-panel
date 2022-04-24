import {
  TableCell,
  TableRow,
  TableHead,
  TableBody,
  TableFooter,
} from "components/Table";
import { Checkbox, Button } from "components";
import { LaptopsTableHeader } from "./LaptopsTableHeader/LaptopsTableHeader";
import { OrderForm } from "../../components/";
import { Pagination } from "./Pagination/Pagination";

import cx from "classnames";

import styles from "./LaptopsTable.module.css";

export const LaptopsTable = ({
  className,
  laptops,
  sortingKey,
  sortingOrder,
  onSorting,
  onCheckboxClick,
  onAllCheckboxClick,
  selectedLaptops,
  isAllSelectedLaptops,
  selectedLaptopsCount = 0,
  editLaptop,
  onEditLaptop,
  laptopPages,
  onSetPage,
}) => {
  const dropdownClass = cx(styles.buttonsWrapper, {
    [styles.showButtons]: selectedLaptopsCount > 0,
  });

  return (
    <div className={cx(styles.laptopsTable, className)}>
      <OrderForm editLaptop={editLaptop} onEditLaptop={onEditLaptop} />
      <TableHead>
        <TableRow>
          <TableCell>
            <Checkbox
              checked={isAllSelectedLaptops}
              onChange={onAllCheckboxClick}
            />
          </TableCell>
          <LaptopsTableHeader
            sortingKey={sortingKey}
            sortingOrder={sortingOrder}
            onSorting={onSorting}
          />
        </TableRow>
      </TableHead>
      <TableBody className={styles.tableBody}>
        {laptops.map((laptop) => (
          <TableRow key={laptop.id} onClick={onEditLaptop(laptop.id)}>
            <TableCell>
              <Checkbox
                value={laptop.id}
                checked={selectedLaptops.includes(laptop.id)}
                onChange={onCheckboxClick}
                onClick={(event) => event.stopPropagation()}
              />
            </TableCell>
            <TableCell key={laptop.id}>{laptop.id}</TableCell>
            <TableCell key={laptop.date}>{laptop.date}</TableCell>
            <TableCell key={laptop.brand}>{laptop.brand}</TableCell>
            <TableCell key={laptop.model}>{laptop.model}</TableCell>
            <TableCell key={laptop.price}>{laptop.price}</TableCell>
            <TableCell key={laptop.status} status={laptop.status}>
              {laptop.status}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter className={styles.tableFooter}>
        <div className={styles.footerPanel}>
          <div className={styles.count}>
            Выбрано записей: {selectedLaptopsCount}
          </div>
          <div className={dropdownClass}>
            <Button
              className={styles.changeStatus}
              variant="white"
              size="small"
            >
              Изменить статус
            </Button>
            <Button className={styles.delete} variant="white" size="small">
              Удалить
            </Button>
          </div>
        </div>

        <Pagination laptopPages={laptopPages} onSetPage={onSetPage} />
      </TableFooter>
    </div>
  );
};
