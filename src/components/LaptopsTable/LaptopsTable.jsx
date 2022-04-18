import { TableCell } from "../Table";
import { TableRow } from "../Table";
import { TableHead } from "../Table";
import { TableBody } from "../Table";
import { TableFooter } from "../Table";
import { Checkbox } from "..";

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
          <TableCell
            onClick={() => onSorting("id")}
            sorting={sortingKey === "id"}
            sortingOrder={sortingOrder}
          >
            ID
          </TableCell>
          <TableCell
            onClick={() => onSorting("date")}
            sorting={sortingKey === "date"}
            sortingOrder={sortingOrder}
          >
            Дата
          </TableCell>
          <TableCell
            onClick={() => onSorting("brand")}
            sorting={sortingKey === "brand"}
            sortingOrder={sortingOrder}
          >
            Бренд
          </TableCell>
          <TableCell
            onClick={() => onSorting("model")}
            sorting={sortingKey === "model"}
            sortingOrder={sortingOrder}
          >
            Модель
          </TableCell>
          <TableCell
            onClick={() => onSorting("price")}
            sorting={sortingKey === "price"}
            sortingOrder={sortingOrder}
          >
            Цена
          </TableCell>
          <TableCell
            onClick={() => onSorting("status")}
            sorting={sortingKey === "status"}
            sortingOrder={sortingOrder}
          >
            Статус
          </TableCell>
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
