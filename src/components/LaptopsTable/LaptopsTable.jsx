import { TableCell } from "../Table";
import { TableRow } from "../Table";
import { TableHead } from "../Table";
import { TableBody } from "../Table";
import { TableFooter } from "../Table";
import { Checkbox } from "..";
import { LaptopsTableHeader } from "./LaptopsTableHeader";

import cx from "classnames";

import styles from "./LaptopsTable.module.css";

export const LaptopsTable = ({
  className,
  laptops,
  sortingKey,
  sortingOrder,
  onSorting,
}) => {
  return (
    <div className={cx(styles.laptopsTable, className)}>
      <TableHead>
        <TableRow>
          <TableCell>
            <Checkbox />
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
          <TableRow key={laptop.id}>
            <TableCell>
              <Checkbox />
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
        Выбрано записей: 0
      </TableFooter>
    </div>
  );
};
