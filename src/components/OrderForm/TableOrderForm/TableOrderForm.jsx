// import { useState } from 'react';

import {
  TableCell,
  TableRow,
  TableHead,
  TableBody,
  TableFooter,
} from "../../Table";

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

export const TableOrderForm = ({ className, laptops }) => {
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
        {laptops.map((laptop) => (
          <TableRow key={laptop.id}>
            <TableCell key={laptop.brand}>{laptop.brand}</TableCell>
            <TableCell key={laptop.model}>{laptop.model}</TableCell>
            <TableCell key={laptop.price}>{laptop.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter className={styles.tableFooter}>Итоговая сумма:</TableFooter>
    </div>
  );
};
