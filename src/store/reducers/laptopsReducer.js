const initialState = [
  {
    id: 111,
    date: "20.01.2021",
    brand: "Lenovo",
    model: "ideapad 3",
    price: 37999,
    status: "В наличии",
  },
  {
    id: 112,
    date: "25.01.2021",
    brand: "ASUS",
    model: "VivoBook Pro 15",
    price: 8999,
    status: "Отсутствует",
  },
  {
    id: 113,
    date: "14.02.2021",
    brand: "HP",
    model: "15s-eq1129ur",
    price: 27730,
    status: "В наличии",
  },
];

export const laptopsReducer = (state = initialState, { type }) => {
  switch (type) {
    default:
      return state;
  }
};
