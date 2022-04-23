import { TableCell } from "components/Table";

const initialCells = [
  {
    id: "id",
    title: "ID",
  },
  {
    id: "date",
    title: "Дата",
  },
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
  {
    id: "status",
    title: "Статус",
  },
];

export const LaptopsTableHeader = ({
  onSorting,
  cells = initialCells,
  sortingOrder,
  sortingKey,
}) =>
  cells.map(({ id, title }) => {
    return (
      <TableCell
        key={id}
        onClick={onSorting(id)}
        sorting={sortingKey === id}
        sortingOrder={sortingOrder}
      >
        {title}
      </TableCell>
    );
  });
