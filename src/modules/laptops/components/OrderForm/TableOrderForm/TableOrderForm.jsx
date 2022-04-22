import {
  TableCell,
  TableRow,
  TableHead,
  TableBody,
  TableFooter,
} from "components/Table";

import styles from "./TableOrderForm.module.css";

const headerCells = [
  {
    id: "brand",
    title: "Бренд",
  },
  {
    id: "model",
    title: "Модель",
  },
  {
    id: "price",
    title: "Цена",
  },
];

export const TableOrderForm = ({ className, editLaptop }) => {
  return (
    <div className={className}>
      <TableHead>
        <TableRow>
          {headerCells.map(({ id, title }) => (
            <TableCell key={id}>{title}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody className={styles.tableBody}>
        <TableRow key={editLaptop.id}>
          <TableCell key={editLaptop.brand}>{editLaptop.brand}</TableCell>
          <TableCell key={editLaptop.model}>{editLaptop.model}</TableCell>
          <TableCell key={editLaptop.price}>{editLaptop.price}</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter className={styles.tableFooter}>
        Итоговая сумма: {editLaptop.price}
      </TableFooter>
    </div>
  );
};
