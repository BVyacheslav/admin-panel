import { SEARCH_LAPTOPS } from "../constants/actionTypes";

const initialState = [
  {
    id: "111",
    date: "20.01.2021",
    brand: "Lenovo",
    model: "ideapad 3",
    price: 37999,
    status: "В наличии",
  },
  {
    id: "112",
    date: "20.01.2021",
    brand: "ASUS",
    model: "VivoBook Pro 15",
    price: "89999",
    status: "Отсутствует",
  },
  {
    id: "113",
    date: "20.01.2021",
    brand: "HP",
    model: "15s-eq1129ur",
    price: "27730",
    status: "В наличии",
  },
];

const laptops = (state = initialState, { type, payload }) => {
  switch (type) {
    case SEARCH_LAPTOPS:
      if (payload) {
        return state.filter((item) => item.id.includes(payload));
      } else {
        return state;
      }

    default:
      return state;
  }
};
export default laptops;
