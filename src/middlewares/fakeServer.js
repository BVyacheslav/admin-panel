import { GET_LAPTOPS_START, GET_LAPTOPS_SUCCESS, GET_LAPTOPS
} from "../constants/actionTypes";

const mock = [{
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
    {
        id: "114",
        date: "20.01.2021",
        brand: "HP",
        model: "15s-eq1129ur",
        price: "27730",
        status: "В наличии",
    },
];




const logger = ({ dispatch }) => next => ({ type, ...rest }) => {

    if (type === GET_LAPTOPS) {
        // Эмулияция сервера
        dispatch({
            type: GET_LAPTOPS_START,
        })

        setTimeout(() => {
            dispatch({
                type: GET_LAPTOPS_SUCCESS,
                payload: mock
            })
        }, 5000);

    } else {
        return next({ type, ...rest })
    }

};

export default logger;
