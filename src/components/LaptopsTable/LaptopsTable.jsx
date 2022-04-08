import { TableCell } from "../Table";
import { TableRow } from "../Table";
import { TableHead } from "../Table";
import { TableBody } from "../Table";
import { TableFooter } from "../Table";
import { Checkbox } from "..";

import cx from "classnames";

import styles from "./LaptopsTable.module.css";

const laptops = [
  {
    id: 1,
    date: "20.01.2021",
    brand: "lenovo",
    model: "ideapad 3",
    price: 37999,
    status: "В наличии",
  },
  {
    id: 2,
    date: "20.01.2021",
    brand: "ASUS",
    model: "VivoBook Pro 15",
    price: 89999,
    status: "Отсутствует",
  },
  {
    id: 3,
    date: "20.01.2021",
    brand: "HP",
    model: "15s-eq1129ur",
    price: 27730,
    status: "В наличии",
  },
];

export const LaptopsTable = ({ className }) => {
  return (
    <div className={cx(styles.laptopsTable, className)}>
      <TableHead>
        <TableRow>
          <TableCell>
            <Checkbox />
          </TableCell>
          <TableCell>ID</TableCell>
          <TableCell>Дата</TableCell>
          <TableCell>Бренд</TableCell>
          <TableCell>Модель</TableCell>
          <TableCell>Цена</TableCell>
          <TableCell>Статус</TableCell>
        </TableRow>
      </TableHead>
      <TableBody className={styles.tableBody}>
        {laptops.map((laptop) => (
          <TableRow>
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell>{laptop.id}</TableCell>
            <TableCell>{laptop.date}</TableCell>
            <TableCell>{laptop.brand}</TableCell>
            <TableCell>{laptop.model}</TableCell>
            <TableCell>{laptop.price}</TableCell>
            <TableCell>{laptop.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter className={styles.tableFooter}>
        Выбрано записей: 0
      </TableFooter>
    </div>
  );
};
