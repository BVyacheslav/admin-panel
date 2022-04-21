import { TableCell } from "../Table";
import { TableRow } from "../Table";
import { TableHead } from "../Table";
import { TableBody } from "../Table";
import { TableFooter } from "../Table";
import { Checkbox } from "..";
import { LaptopsTableHeader } from "./LaptopsTableHeader/LaptopsTableHeader";
import { OrderForm } from "../../components/OrderForm/OrderForm";

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
}) => {
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
              />
            </TableCell>
            <TableCell key={laptop.id}>{laptop.id}</TableCell>
            <TableCell key={laptop.date}>{laptop.date}</TableCell>
            <TableCell key={laptop.brand}>{laptop.brand}</TableCell>
            <TableCell key={laptop.model}>{laptop.model}</TableCell>
            <TableCell key={laptop.price}>{laptop.price}</TableCell>
            <TableCell
              key={laptop.status}
              className={
                laptop.status === "В наличии"
                  ? styles.inStock
                  : styles.outOfStock
              }
            >
              {laptop.status}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter className={styles.tableFooter}>
        Выбрано записей: {selectedLaptopsCount}
      </TableFooter>
    </div>
  );
};
